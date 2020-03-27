import Cookie from 'js-cookie'
import axios from 'axios'

export const state = () => ({
  allAnalysis: [],
  complexes: [],
  researches: [],
  page: 1,
  pagination: null,
  currentHost: '',
  moodService: '',
  user: {},
  consultation: false,
  loading: false
})

export const mutations = {
  setAnalysis(state, payload) {
    let el = payload.map((item) => {
      if (item.complex){
          return {
            ...item.complex,
            price: item.complex.price/100,
            complex: true,
            visible: true
          }
      } else {
        return {
          id: item.research.type.id,
          code: item.research.directory.code,
          name: item.research.directory.name,
          price: item.research.price/100,
          includComplex:false,
          priceNew: 0,
          comment: "Анализ входит в выбранный комплекс",
          complex: false,
          visible: true
        }
      }
    })
    state.allAnalysis.push(...el)
  },
  setPagination(state, data) {
    state.pagination = data
  },
  setClearAnalis(state){
    state.allAnalysis = []
  },
  setOrderList(state, payload){
    payload.map((item) => {
      if (item.complex){
        state.complexes.push({
          id: item.id,
          price: item.price
        })
      } else {
        state.researches.push({
          id: item.id,
          price: item.price
        })
      }
    })
  },
  serCurrentHost(state, data) {
    state.currentHost = data.path
  },
  setVisibillity(state, data) {
    state.allAnalysis.find(item => {
      if (data.id === item.id && item.complex) {
        item.visible = data.visible
      } else if (data.id === item.id && data.code === item.code && 
        !item.complex) {
        item.visible = data.visible
      }
    })
  },
  setMoodService(state, data) {
    Cookie.set('moodServiceCookie', data, { expires: 7 })
    state.moodService = data
  },
  setUserData(state, data) {
    Cookie.set('user', data, { expires: 7 })
    state.user = data
  },
  setConsultation(state, status) {
    state.consultation = status
  },
  setLoading(state, status) {
    state.loading = status
  }
}

export const actions = {
  fetchAnalysis({commit, state}, data){
    commit('setLoading', true)

    if (state.allAnalysis.length) {
      commit('setLoading', false)
      return
    } else {
      return axios.get(`https://api.hculture.ru/r1/landing/nurse/researches?page=${data.page}&search=${data.SearchNameAnalis}&count=50&city=${data.city}`)
        .then((res) => { 
          commit('setLoading', false)
          commit ('setAnalysis', res.data.result)
          commit ('setPagination', res.data.pagination)
        })
        .catch(e => console.log(e))
    }
  },
  clearAnalysis({commit}){
    commit('setClearAnalis')
  },
  postOrder({ commit, dispatch }, data) {
    return axios.post(`https://api.hculture.ru/v1/landing/nurse/order`, {
        user: data.user,
        needConsultation: data.needConsultation,
        complexes: data.complexes || null,
        researches: data.researches || null
      })
      .then((response) => { 
        if (response.status === 201) {
          console.log('Order is created')
          Cookie.remove('user')
          this.$router.push('/order_step_success')
        }
      })
      .catch(error => {
        if (error.response.data.errors[0].code === 4002101) {
          console.log(`${error.response.data.errors[0].message}`)

          const { 
            information, 
            needConsultation, 
            complexes, 
            researches
          } = error.response.data.errors[0].data

          const user = {
            firstname: information.firstname,
            secondname: information.secondname,
            lastname: information.lastname,
            gender: information.gender,
            birthdate: information.birthdate,
            phone: information.phone,
            email: information.email,
            address: information.address,
            nursedate: information.nursedate,
            city: information.city.id
          }

          const complexesArr = complexes.map(item => ({ 
            id: item.id, 
            price: item.price
          }))

          const researchesArr = researches.map(item => ({ 
            id: item.directory.id, 
            price: item.price
          }))

          dispatch('postOrder', {
            user: user,
            needConsultation,
            complexes: complexesArr,
            researches: researchesArr
          })
        }
      })
  },
  saveUser({ commit }, data) {
    commit('setUserData', data)
  }
}

export const getters = {
  getAllAnalysis (state) {
    return state.allAnalysis
  },
  getPagination (state) { 
    return state.pagination 
  },
  getCurrentHost (state) { 
    return state.currentHost 
  },
  getMoodService (state) {
    return state.moodService
  },
  getComplexes (state) {
    return state.complexes
  },
  getResearches (state) {
    return state.researches
  },
  getUserData (state) {
    return state.user
  },
  getConsultation (state) {
    return state.consultation
  },
  getLoading (state) {
    return state.loading
  },
}