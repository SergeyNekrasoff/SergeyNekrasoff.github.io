<template>
      <div class="analyzesList">
        <div>
          <h2 v-if="designMainPage">Выберите необходимые анализы</h2>
          <div>
            <label class="container3">
              Много анализов и тяжело заполнить заявку? Поставьте галочку, и наш специалист заполнит с ваших слов по телефону
              <input 
                type="checkbox"
                @change="setConsult">
              <span class="checkmark"></span>
            </label>
          </div>
        </div>

        <div class="perfect-scrollbar" :disabled="consult === true">
          <div class="inp">
            <button @click="changeInp" class="search_icon" :class="{ active: inputAnalis }"></button>
            <input 
              v-model="inputAnalis"            
              type="text"
              @keyup.enter="searcDataBase"
              placeholder="Введите название анализа для поиска">
            <button @click="searcDataBase" v-if="inputAnalis" class="searchBTN">Найти</button>
          </div>
          <div class="perfect-scrollbar__list">
            <div class="table__title">
              <div class="bold table_cod" v-if="designMainPage && !isMobile">Код</div>
              <div class="bold table_cod" v-else>Код МКБ</div>
              <div class="bold ">Название анализа</div>
              <div class="bold ">Цена</div>
              <div class="bold ">Добавить</div>
            </div>
          <div class="perfect-scrollbar__list" ontouchstart>
            <Perfectscroll 
              :analyzesAll="addNamesToComplex" 
              @addOrders="addOrdersList"
              @loadMoreToEnd="featchLoadMoreEnd"/>
          </div>
            <div class="price">
              <div>
                <div 
                  class="row__title"
                  v-if="nurse">
                  <div class="bold table_cod" v-if="!isMobile"></div>
                  <div class="table_name"> 
                    <span class="bold">Выезд мед сестры</span> 
                  </div>
                  <div class="table_price">0 р.</div>
                </div>
                <div v-if="sortedOrderList.length">
                  <div 
                    class="row__title" 
                    v-for="(item, index) in sortedOrderList" 
                    :key="index" 
                    :class="{ 'bggrey': item.includComplex }" >
                    <div class="bold table_cod" v-if="!isMobile">{{ item.code }}</div>
                    <div class="table_name"> 
                      <span :class="{ bold: item.complex }">{{ item.name }}</span> 
                      {{ item.includComplexNames}} 
                      <div v-if="item.includComplex" style="color: red">{{ item.comment }}</div>
                      </div>
                    <div class="table_price" v-if="!item.complex && item.includComplex">{{ item.priceNew }} р.</div> 
                    <div class="table_price" v-else>{{ item.price }} р.</div>                  
                    <div class="table_check icon_close" @click="deleteOrdersList(item)"></div>
                  </div>
                </div>
              </div>
              <hr class="table-total__hr">
              <div class="table-total">                
                <div class="total_wrapper">
                  <div>
                    <div class="price_text">Стоимость без скидки: </div>
                    <div>Ваша скидка (-{{ discountPercent }}%):</div>
                    <div class=" total-text">Итого к оплате:</div>
                  </div>
                  <div>
                    <div class="bold price_text">{{ calcPrice }} р.</div>
                    <div class="bold" v-if="calcDiscountPrice">-{{ calcDiscountPrice }} р.</div>
                    <div v-else>&nbsp;</div>
                    <div class="total-price-text"><span class="total-price bold">{{ calcTotalPrice }} р.</span>
                  </div>         
                  </div>
                </div>
                <button 
                  class="total-button" 
                  @click="goToContactForm" 
                  :disabled="!consult && orderList.length < 1"
                  v-if="designMainPage">
                  Далее
                </button>
                <button 
                  class="total-button_second" 
                  @click="goToSuccess" 
                  v-else 
                  :disabled="!consult && orderList.length < 1">
                  Оформить заказ
                </button>
              </div>
            </div>
          </div>
        </div>
    </div>
</template>

<script>
import Perfectscroll from "../components/Perfectscrollbar"
import { mapGetters } from 'vuex'
import Cookie from 'js-cookie'

export default {
  components: {
    Perfectscroll,
  },
  props: {
    designMainPage: {
      type: Boolean,
      default: true,
      required: false
    },
    user: {
      type: Object,
      required: false
    }
  },
  data () {
    return {
      windowWidth: 0,
      inputAnalis: '',
      orderList: [],
      price: 0,
      discountPercent: 20,
      discountPrice: 0,
      totalPrice: 0,
      AnalyzesFromComplex: [],
      analysisIncludComplex: [],
      allCodesComplex: [],
      page: 1,
      codesOrderList: [],
      consult: false,
      moodService: '',
      nurse: false,
      userCookie: null
    }
  },
  mounted(){
    window.addEventListener('resize', this.handleResize)
    this.handleResize()
    this.changeInp()
    this.userCookie = Cookie.getJSON('user')
  },
  computed:{
    ...mapGetters([
      'getAllAnalysis', 
      'getPagination'
    ]),
    addNamesToComplex(){
      // добавляем в названия анализов входящих в комплекс в массив с комплексами
      let arr = this.getMatchedResearchAndOrder
      arr.map(element => {
        if(element.research){
          element.includComplexNames = this.getNames(element.research);
          this.getAnalyzesFromComplex(element.research)
        }
          return
      });
      return arr
    },
    calcPrice(){
      return this.orderList.reduce((acc,item) => acc + this.priceVal(item), 0)
    },
    calcDiscountPrice(){
      return parseInt(this.calcPrice * this.discountPercent / 100)
    },
    calcTotalPrice(){
      return parseInt(this.calcPrice - this.calcDiscountPrice)
    },
    getCodeAnalise(){
      return this.orderList.filter(item => item.complex === false)
    },
    getCodeComplex(){
      return this.orderList.filter(item => item.complex === true)
    },
    findCodesInComplexs(){
      return this.getCodeComplex.map(item => this.findCodes(item.research))
    },
    double(){
      return this.allCodesComplex.filter(e=>this.getCodeAnalise.findIndex(i => i.code == e ) !== -1);
    },
    getMatchedResearchAndOrder() {
      const orderList = new Set(this.orderList.map(({ code }) => code))
      const combined = [
        ...this.orderList,
        ...this.getAllAnalysis.filter(({ code }) => !orderList.has(code))
      ]
      return combined
    },
    isMobile() {
      if (this.windowWidth < 768) {
        return true
      } else {
        return false
      }
    },
    sortedOrderList() {
      return this.orderList.slice().sort((a, b) => a.complex !== b.complex ? 
        b.complex - a.complex : 
        a.includComplex - b.includComplex)
    }
  },
  methods:{
    handleResize() {
      this.windowWidth = window.innerWidth;
    },
    priceVal(item){
      return item.includComplex === true ? 0 : item.price
    },
    getCodes(){
      this.findCodesInComplexs.map(item => this.getCode(item))
    },
    getCode(arrCod){
      return arrCod.map(item => this.findDublicateOrders(item))
    },
    findDublicateOrders(code){
      this.allCodesComplex.push(code)
    },
    record(){
      this.allCodesComplex.map(item => this.rec2(item))
    },
    rec2(code){
      this.getCodeAnalise.map(item => {
        if( item.code === code ){
          item.includComplex = true
        }
      })
    },
    findCodes(item){
      return item.map( it => it.code);
    },
    //получаем названия анализов входящих в комплекс 
    getNames(arrNames){
      return String(arrNames.map(item => item.name))
    },
    //получаем анализы из комплексов
    getAnalyzesFromComplex(item){
      this.AnalyzesFromComplex.push(...item)
    },
    changeInp(){
      this.inputAnalis = '';
      this.page = this.page;
      this.$store.dispatch('clearAnalysis')
      this.$store.dispatch('fetchAnalysis', { 
        SearchNameAnalis: this.inputAnalis, 
        page: this.page,
        city: 1098
      });
    },
    addOrdersList(item){
      this.allCodesComplex=[];
      this.getCodes();
      if(!this.codesOrderList.includes(item.code)){
        this.codesOrderList.push(item.code);
        this.orderList.push({...item});
        this.getCodes()
      }
      this.record()
      this.moodService = 'research'
    },
    deleteOrdersList(item){
      this.allCodesComplex=[];
      let findElem = this.orderList.indexOf(item);
      if(this.orderList[findElem].complex === false ){
        this.orderList[findElem].includComplex = false;
      }
      this.getCodeAnalise.map(item => {
        item.includComplex = false
      })
      this.orderList.splice(findElem, 1);
      this.getCodes();   
      this.$store.commit('setVisibillity', { 
        complex: item.complex,
        id: item.id,
        code: item.code,
        visible: true
      });
      this.record();
      if (this.orderList.length === 1 && this.orderList.includes(item.nurse)) {
        this.orderList = [];
      }
      let delCodesOrderList =this.codesOrderList.indexOf(item.code);
      this.codesOrderList.splice(delCodesOrderList, 1);
    },
    setConsult() {
      this.consult = !this.consult
      if (this.consult) {
        this.moodService = 'consult'
        this.$store.commit('setConsultation', true)
      } else {
        this.moodService = 'research'
        this.$store.commit('setConsultation', false)
      }
    },
    clear(){
      this.getCodeAnalise.map(item => {
          item.includComplex = false
      })
    },
    goToContactForm(){
      this.$store.commit('serCurrentHost', { path: this.$route.name })
      this.$store.commit('setMoodService', this.moodService)

      if (this.moodService !== 'consult') {
        this.$store.commit('setOrderList', this.orderList)
        this.$store.commit('setConsultation', false)
      } else {
        this.$store.commit('setConsultation', true)
        this.orderList.forEach(item => {
            this.$store.commit('setVisibillity', { 
            complex: item.complex,
            id: item.id,
            code: item.code,
            visible: true
          })
        })
        this.orderList = []
      }
      this.$router.push('/order_step_contact')
    },
    goToSuccess(){
      const complexes = []
      const researches = []

      this.orderList.map((item) => {
        if (item.complex){
          complexes.push({
            id: item.id,
            price: item.price
          })
        } else {
          researches.push({
            id: item.id,
            price: item.price
          })
        }
      })

      if (Object.keys(this.user).length) {
        this.$store.dispatch('postOrder', {
          user: this.user,
          needConsultation: this.consult,
          complexes: complexes,
          researches: researches
        })
      } else {
        this.$store.dispatch('postOrder', {
          user: this.userCookie,
          needConsultation: this.consult,
          complexes: complexes,
          researches: researches
        })
      }
    },
    searcDataBase(){
      this.$store.dispatch('clearAnalysis')
      this.page = 1
      this.$store.dispatch('fetchAnalysis', { 
        SearchNameAnalis: 
        this.inputAnalis, 
        page: this.page,
        city: 1098
      })
    },
    featchLoadMoreEnd(){
      if (this.getMatchedResearchAndOrder.length && this.getPagination.next) {
        this.page++
        this.$store.dispatch('fetchAnalysis', { 
          SearchNameAnalis: 
          this.inputAnalis, 
          page: this.page,
          city: 1098
        })
      } else {
        this.page = 1
        return
      }
    },
  },
  watch: {
    orderList: {
      handler (after) {
        if (after.length > 0) {
          this.nurse = true
        } else {
          this.nurse = false
        }
      }
    }
  },
  destroyed() {
    window.removeEventListener('resize', this.handleResize)
  }
};
</script>

<style lang="scss" scoped>
.container3 {
  margin-top: 30px; 
  font-size: 15px;
  text-align: left;
  display: block;
  position: relative;
  padding-left: 35px;
  cursor: pointer;
  font-size: 22px;
  user-select: none;
  /* margin-bottom: 30px; */
}

/* Hide the browser's default radio button */
.container3 input {
  position: absolute;
  opacity: 0;
  cursor: pointer;
  height: 0;
  width: 0;

}

/* Create a custom radio button */
.checkmark {
  border-radius: 50%;
  border: 1px solid #ccc;
  position: absolute;
  top: 5px;
  left: 0;
  height: 18px;
  width: 18px;
  background-color: rgb(255, 255, 255);
  border-radius: 50%;
}

/* On mouse-over, add a grey background color */
.container3:hover input ~ .checkmark {
  background-color: #ccc;
}

/* When the radio button is checked, add a blue background */
.container3 input:checked ~ .checkmark {
  background-color: rgb(255, 255, 255);
}

/* Create the indicator (the dot/circle - hidden when not checked) */
.checkmark:after {
  content: "";
  position: absolute;
  display: none;
}

/* Show the indicator (dot/circle) when checked */
.container3 input:checked ~ .checkmark:after {
  display: block;
}

/* Style the indicator (dot/circle) */
.container3 .checkmark:after {
  top: 4px;
  left: 4px;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: #0096c8;
}

.total-button:disabled{
  background-color: #dce3e6;
}
.total-button_second:disabled{
  background-color: #dce3e6;
}
.total-button:disabled:hover{
  background-color: #dce3e6;
}
.total-button_second:disabled:hover{
  background-color: #dce3e6;
}
.total-button_second:disabled{
  background-color: #dce3e6;
}
.total-button_second{
  margin-left: 20px;
  display: flex;
  width: 160px;
  height: 40px;
  line-height: 40px;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16);
  border-radius: 5px;
  background-color: #0096c8;
  margin-top: 40px;
  color: #fff;
  font-family: "Foros";
  font-size: 15px;
  border: 0px;
  text-align: center;
  justify-content: center;
  cursor: pointer;
  position: relative;
  pointer-events: all;
  z-index: 11;
}
.total-button_second:hover{
  background-color: #22acda;
}
.total-button_second:active{
  background-color: #2685a5;
}
.analyzes h2{
    text-align: center;
}
.analyzes{
  position: relative;
}
.searchBTN{
  position: absolute;
  top: 48px;
  right: 20px;
  background-color: #0096c8;
  color: #fff;
  font-family: "Foros", Roboto, Arial, sans-serif;
  border: 0px;
  padding: 8px 20px;
  border-radius: 5px;
}
.searchBTN:hover{
  background-color: #3ec1ec;
}
.searchBTN:active{
  background-color: #1f86a8;
}
.analyzes__wrapper {  
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-gap: 3rem;
  text-align: center;
  margin-bottom: 253px;
}
.analyzes__hr{
  position: absolute;
  z-index: -1;
  top: 170px;
  width: 100%;
  height: 2.6px; 
  background-color: #fff;
  background-image: url("~assets/img/Line.svg");
}
.analyzes__item{
  background-size: 151px 166px;
  background-repeat: no-repeat;
  margin: 0 auto;
  background-position-x: 50%;
  height: 10rem;
  padding-top: 12rem;
  margin-top: 42px;
  font-size: 16px;
  width: 227px;
}
.analyzes__item .bold{
  font-size: 18px;
  margin: 0 auto;
  width: 151px;
  margin-bottom: 10px;
}
.row__title{
  position: relative;
  max-width: 100%;
  margin-bottom: 14px;
  margin-top: 20px;
  font-size: 16px;
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 6fr 1fr 1fr;
  font-size: 16px;
}
.analyzes .table_name{
border-left: 1px solid #c8d6db; 
border-right: 1px solid #c8d6db; 
}
.table_price{
  display: flex;
  align-items: center;
  justify-content: center;
  border-right: 1px solid #c8d6db; 
}
.table-total{
  position: relative;
}
.icon_plus{
  position: relative;
  contain: '';
  display: block;
  height: 18px;
  width: 18px;
  background-image: url('~assets/img/plus.png');
  margin: 0 auto;
  background-repeat: no-repeat;
  justify-content: center;
  align-items: center;
  top: 50%;
  transform: translateY(-50%);
  cursor: pointer;
}
.analyzes__wrapper .register{
  background-image: url("~assets/img/41-layers.png");
}
.analyzes__wrapper .options{
  background-image: url("~assets/img/27-layers.png");
}
.analyzes__wrapper .order{
  background-image: url("~assets/img/29-layers.png");
}
.analyzes__wrapper .get{
  background-image: url("~assets/img/34-layers.png");
}
.perfect-scrollbar[disabled] {
  background: rgba(255, 255, 255, .5);
  position: relative;
  pointer-events: none;
  cursor: default;

  &:after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: #fff;
    opacity: .5;
    z-index: 10;
  }
}

.perfect-scrollbar input {
  width: 100%;
}
.perfect-scrollbar input {
  padding-left: 45px;
  margin-top: 38px;
  height: 50px;
  border-radius: 5px;
  border: 1px solid #c8d6db;
  font-family: "Foros";
  color: #767676;
  font-size: 15px;
  border-radius: 4px;
  box-shadow: 0 3px 15px rgba(0, 0, 0, 0.06);
}
.inp{
  position: relative;
}
.search_icon{
  position: absolute;
  top: 53px;
   left: 15px;
  content: '';
  display: block;
  height: 20px;
  width: 20px;
  background-image: url("~assets/img/search.svg");
  background-repeat: no-repeat;
  background-size: 20px 20px;
  border: 0px;
  background-color: transparent; 
}
.perfect-scrollbar .active{
   background-image: url("~assets/img/plus.svg");
}

.alaliss{
  width: 100%;
  height: 411px;
  box-shadow: 0 3px 15px rgba(0, 0, 0, 0.06);
  border-radius: 5px;
  background-color: #ffffff;
}
.table__title{
  margin-bottom: 14px;
  margin-top: 20px;
  font-size: 16px;
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 6fr 1fr 1fr;
  text-align: center;
}
.row__title .table_name{
  /* display: flex; */
  justify-content: left;
  align-items: center;
  padding-left: 16px;
}
.row__title:hover{
  background-color: rgb(240, 240, 240);
  transition: .3s ease;
}
.analyzesList .price{
  width: 100%;
  box-shadow: 0 3px 15px rgba(0, 0, 0, 0.06);
  border-radius: 5px;
  background-color: #ffffff;
  padding-top: 15px;
  margin-top: 20px;
}
.analyzesList .table_title{
  border-left: 1px solid #c8d6db; 
  border-right: 1px solid #c8d6db; 
}
.table_price{
  border-right: 1px solid #c8d6db; 
}
.table-total__hr{
  width: 100%;
  height: 1px;
  background-color:#c8d6db; 
  margin-bottom: 20px;
}
.table_cod{
  display: flex;
  justify-content: center;
  align-items: center;
}
.table-total{
  margin-top: 20px;
  font-size: 16px;
  margin-right: 20px;
  margin-left: 20px;
  padding-bottom: 20px;
}
.total-price-text{
  margin-top: 27px;
}
.total-button{
  width: 160px;
  height: 40px;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16);
  border-radius: 5px;
  background-color: #0096c8;
  margin-top: 40px;
  color: #fff;
  font-family: "Foros";
  font-size: 15px;
  border: 0px;
  margin-bottom: 20px;
  cursor: pointer;
  position: relative;
  pointer-events: all;
  z-index: 11;
}
.total-button:hover{
  background-color: #22acda;
}
.total-button:active{
  background-color: #2685a5;
}
.total-price-text .bold{
  font-size: 28px;
}
.table-total .bold{
  padding-left: 39px;
}
.row__title{
  margin-bottom: 14px;
  margin-top: 20px;
  font-size: 16px;
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 6fr 1fr 1fr;
  font-size: 16px;
}
.analyzesList .table_name{
  border-left: 1px solid #c8d6db; 
  border-right: 1px solid #c8d6db; 
}
.table_price{
  border-right: 1px solid #c8d6db; 
}
.table-total{
  position: relative;
}
.total_wrapper{
  display: flex;
  justify-content: flex-end;
}
.total_wrapper .price_text{
  margin-bottom: 5px;
}
.total-text{
margin-top: 37px;
}
.icon_close{
  position: relative;
  contain: '';
  display: block;
  height: 18px;
  width: 18px;
  background-image: url('~assets/img/close.png');
  background-repeat: no-repeat;
  margin: 0 auto;
  align-items: center;
  top: 50%;
  transform: translateY(-50%);
  cursor: pointer;
}
@media only screen and (max-width: 1200px) {
  .container{
    padding-left: 10px;
    padding-right: 10px;
    overflow: hidden;
  }
  .analyzes__wrapper{
    grid-template-columns: 1fr;
    margin-bottom: 130px;
  }
  .analyzes__wrapper div{
    margin-bottom: 80px;
  }
}
@media only screen and (max-width: 670px) {
  h2{
    font-size: 30px;
  }
  .analyzes__wrapper{
    grid-template-columns: 1fr;
    margin-bottom: 70px;
  }

  h3{
    text-align: center;
  }
  .price{
    height: auto;
  }
  .table__title .bold:nth-child(1){
    display: none;
  } 
  .table__title .bold:nth-child(3){
    display: none;
  }
  .table__title .bold:nth-child(4){
    text-align: right;
    padding-right: 15px;
  }
  .table__title{
    grid-template-columns: 1fr 1fr;
  }
  .row__title {
    grid-template-columns: 1fr;
    text-align: left;
    position: relative;
    border-top: 1px solid#c8d6db;
    padding-left: 15px;
    padding-top: 15px;
  }
  .row__title .table_check{
    position: absolute;
    right: 10px;
    top: 24px;
    transform: translateY(-50%);
  }
  .row__title .table_cod, .table_price{
    text-align: left;
    justify-content: left;
    border: none;
  }
  .row__title .table_name{
    border: none;
    padding-left: 0px;
    padding-right: 50px;
  }
  .row__title .table_price{
    font-weight: bold;
    margin-top: 10px;
  }
}
@media only screen and (max-width: 480px) {
  .row__title, .table__title{
    font-size: 12px;
  }
  .row__title .table_name{
    padding-right: 12px;
    max-width: 90%;
  }
  .header-button {
    margin-bottom: 158px;
  }
  .analyzes__item {
    padding-top: 11rem;
  }
  .total_wrapper{
    text-align: left;
  }
  .table-total .bold {
    padding-left: 0px; 
  }
}
</style>