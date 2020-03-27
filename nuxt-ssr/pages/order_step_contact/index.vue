<template>
  <div>
    <Header />

    <client-only>
      <section class="contact__form">
          <div class="container">
              <h1>Введите свои контактные данные</h1>
              <!-- <div id="app"> -->
              <progress-bar 
                class="progress_bar" 
                bar-color="#64d282" 
                size="15" 
                :val="consultation || (moodService === 'research' || moodServiceCookie === 'research') ? 
                      50 : 
                      33" 
                bg-color="#fff" 
                :bar-border-radius="radius"              
                bar-transition="all 0.5s ease">
              </progress-bar>
              <!-- </div> -->
              <div class="contact__wrapper">
                  <!-- <label class="containerInp" v-bind:class="{ active: lastname }">Фамилия:
                      <input type="text" v-model.trim="lastname" placeholder="Иванов">
                  </label> -->
                  <div></div>
                  <div>
                    <label class="containerInp" v-bind:class="{ active: firstname }">Имя:
                        <input type="text"  v-model.trim="firstname" placeholder="Иван">
                    </label>
                    <label class="containerInp" v-bind:class="{ active: telnumber }">Телефон:
                        <input
                          v-mask="'+7 (###) ###-##-##'" 
                          type="tel"
                          v-model="telnumber"
                          placeholder="+7 (999) 999-99-99">
                    </label>
                  </div>
                  <div></div>
                  <!-- <label class="containerInp" v-bind:class="{ active: patronymic }">Отчество:
                      <input type="text"  v-model.trim="patronymic" placeholder="Иванович">
                  </label> -->
              </div>
              <!-- <div class="contact__wrapper">
                  <label class="containerInp" :class="{ active: gender }">Пол:
                      <select
                        class="select-theme" 
                        v-model="gender">
                        <option value="" disabled hidden>Выберите пол</option>
                        <option 
                          v-for="(gender, index) in genderList"
                          :key="index"
                          :value="gender.option">
                          {{ gender.name }}
                        </option>
                      </select>
                  </label>
                  <label class="containerInp" v-bind:class="{ active: email }">E-mail:
                      <input type="email"  v-model.trim="email" placeholder="ivan@mail.ru">
                  </label>
                  <label class="containerInp" v-bind:class="{ active: adress }">Адрес:
                      <input type="text"  v-model.trim="adress" placeholder="г. Москва, ул. Ленина, 25">
                  </label>
              </div> -->
              <!-- <div class="contact__wrapper">
                  <label for="datebirth" class="containerInp">
                    Дата рождения:
                    <date-picker
                      v-model="datebirth"
                      lang="ru"
                      input-class="input-text input-text--date"
                      format="DD.MM.YYYY"
                      :disabled-date="notAfterToday"
                      value-type="format"
                      :open.sync="openDateBirth"
                      :first-day-of-week="1">
                      <template v-slot:input>
                        <masked-input
                          type="text"
                          name="phone"
                          class="mx-input"
                          :value="datebirth"
                          :mask="maskDate"
                          :guide="true"
                          placeholder="Выберите дату рождения"
                          @change="handleChange">
                        </masked-input>
                      </template>
                    </date-picker>
                  </label>
                  <label class="containerInp" v-bind:class="{ active: telnumber }">Телефон:
                    <input
                      v-mask="'+7(###)-###-##-##'" 
                      type="tel"
                      v-model="telnumber"
                      placeholder="+7(999)-999-99-99">
                  </label>
                  <label for="datereg" class="containerInp">
                    Дата выезда:
                    <date-picker
                      v-model="datereg"
                      :editable="false"
                      lang="ru"
                      type="date"
                      input-class="input-text input-text--date"
                      format="DD.MM.YYYY"
                      :disabled-date="notBeforeToday"
                      placeholder="Выберите дату выезда"
                      :first-day-of-week="1"/>
                  </label>
              </div> -->
              <div class="privacy__policy">
                  <label class="container2">
                      Я согласен(а) на 
                      <!-- <a href="">обработку предоставленных мною персональных данных.</a> -->
                      <span>обработку предоставленных мною персональных данных.</span>
                      <input type="checkbox" v-model="privatPersonDate" @click="privatPersonDate=!privatPersonDate">
                      <span class="checkmark"></span>
                  </label>
              </div>
              <button 
                v-if="(moodService === 'consult' || moodServiceCookie === 'consult') && !consultation"
                class="contact__form_btn" 
                :disabled="!valid" 
                @click="goToStepAnalysis">
                Далее
              </button>
              <button 
                v-if="moodService === 'research' || moodServiceCookie === 'research' && !consultation"
                class="contact__form_btn" 
                :disabled="!valid" 
                @click="goToSuccess">
                Оформить заказ
              </button>
              <button 
                v-if="(moodService === 'consult' || moodServiceCookie === 'consult') && consultation"
                class="contact__form_btn" 
                :disabled="!valid" 
                @click="goToSuccess">
                Оформить заказ
              </button>
          </div>
      </section>
    </client-only>
      
    <Footer/>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import Header from "@/components/UI/Header"
import Footer from "@/components/UI/Footer"
import Cookie from 'js-cookie'
// import DatePicker from 'vue2-datepicker'
// import 'vue2-datepicker/locale/ru'

export default {
    name:'contact__form',
    components:{ 
      Header, 
      Footer,
      // DatePicker,
    },
    data() {
      return {
        lastname: '',
        firstname: '',
        patronymic: '',
        gender: '',
        idGender: null,
        email: '',
        adress: '',
        datebirth: null,
        telnumber: '+7',
        datereg: null,
        radius: 50,
        progressPercent: 0,
        privatPersonDate: true,
        genderList: [
          {
            name: 'Мужской',
            option: 'man',
          },
          {
            name: 'Женский', 
            option: 'woman',
          },
        ],
        moodServiceCookie: '',
        openDateBirth: false,
        maskDate: [/\d/, /\d/, ".", /\d/, /\d/, ".", /\d/, /\d/, /\d/, /\d/]
      }
    },
    computed:{
        valid(){
            if(this.firstname && this.telnumber && this.privatPersonDate){
              return true
            } else{
              return false
            }
        },
        ...mapGetters({ 
          moodService: 'getMoodService',
          complexes: 'getComplexes',
          researches: 'getResearches',
          consultation: 'getConsultation',
        })
    },
    methods:{
      handleChange(event) {
        this.datebirth = event.target.value
        this.openDateBirth = false
      },
      goToStepAnalysis(){
        const phone = parseInt(this.telnumber.replace(/[^0-9]/g,''), 10)
        // const birthday = this.$moment(this.datebirth).format('YYYY-MM-DD')
        // const datereg = this.$moment(this.datereg).format('YYYY-MM-DD')

        // const user = {
        //   firstname: this.firstname,
        //   secondname: this.patronymic,
        //   lastname: this.lastname,
        //   gender: this.gender,
        //   birthdate: birthday,
        //   phone: phone,
        //   email: this.email,
        //   address: this.adress,
        //   nursedate: datereg,
        //   city: 1098
        // }

        const user = {
          firstname: this.firstname,
          secondname: '',
          lastname: '',
          gender: '',
          birthdate: '',
          phone: phone,
          email: '',
          address: '',
          nursedate: '',
          city: 1098
        }

        this.$store.dispatch('saveUser', user)
        this.$router.push('/order_step_analysis')
      },
      notBeforeToday(date) {
        return date < new Date();
      },
      notAfterToday(date) {
        return date > new Date();
      },
      async goToSuccess() {
        const phone = parseInt(this.telnumber.replace(/[^0-9]/g,''), 10)
        // const birthday = this.$moment(this.datebirth).format('YYYY-MM-DD')
        // const datereg = this.$moment(this.datereg).format('YYYY-MM-DD')

        // const user = {
        //   firstname: this.firstname,
        //   secondname: this.patronymic,
        //   lastname: this.lastname,
        //   gender: this.gender,
        //   birthdate: birthday,
        //   phone: phone,
        //   email: this.email,
        //   address: this.adress,
        //   nursedate: datereg,
        //   city: 1098
        // }

        const user = {
          firstname: this.firstname,
          secondname: '',
          lastname: '',
          gender: '',
          birthdate: '',
          phone: phone,
          email: '',
          address: '',
          nursedate: '',
          city: 1098
        }

        const response = await this.$store.dispatch('postOrder', {
          user: user,
          needConsultation: this.consultation,
          complexes: this.complexes,
          researches: this.researches
        })
      }
    },
    mounted() {
      this.moodServiceCookie = Cookie.get('moodServiceCookie')
    }
}
</script>

<style lang="scss">
.select-theme {
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  background: url('~assets/img/UI/arrow.svg') 95% / 15% no-repeat #eee;
  background-size: 10px;
}

.select-theme::-ms-expand { 
  display: none; /* remove default arrow on ie10 and ie11 */
}

@media screen and (min-width:0\0) {
  .select-theme {
    background:none\9;
    padding: 5px\9;
  } 
}

.input-text {
  font-size: 15px;
  font-weight: 400;
  color: #000;
  text-align: left;
  padding: 0 20px;
}
.contact__wrapper .active{
    color: #bccacf;
}
.contact__form_btn{
  display: flex;
  justify-content: center;
  margin-left: 50%;
  transform: translateX(-50%);
  margin-top: 59px;
  color: #fff;
  width: 160px;
  height: 40px;
  line-height: 40px;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16);
  border-radius: 5px;
  background-color: #0096c8;
  border: 0px;
  font-size: 16px;
  font-family: "Foros", Roboto, Arial, sans-serif;
  cursor: pointer;
}
.contact__form_btn:hover{
  background-color: #22acda;
}
.contact__form_btn:active{
  background-color: #2685a5;
}
.contact__form_btn:disabled{
  background-color: #dce3e6;
}

.containerInp{
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: flex-start;
    margin-bottom: 20px;
    color: #000;
    font-size: 12px;

    .mx-datepicker {
      width: 100% !important;
    }
}
.contact__wrapper select{
    width: 100%;
    height: 40px;
    border-radius: 5px;
    border: 1px solid #dce3e6;
    background-color: #ffffff;
    font-family: "Foros", Roboto, Arial, sans-serif;
    font-size: 15px;
    padding-left: 20px;
    margin-top: 5px;
}
.contact__wrapper select option{
    margin-top: 10px;
}
.container2 {
  white-space: nowrap;
  margin-left: 50%;
  transform: translateX(-50%);
  display: block;
  position: relative;
  padding-left: 35px;
  margin-bottom: 12px;
  cursor: pointer;
  font-size: 22px;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  font-size: 15px;

}
.container2 a{
    text-decoration: underline;
}

/* Hide the browser's default checkbox */
.container2 input {
  position: absolute;
  opacity: 0;
  cursor: pointer;
  height: 0;
  width: 0;
}

/* Create a custom checkbox */
.checkmark {
  position: absolute;
  top: 0;
  left: 0;
  height: 18px;
  width: 18px;
  background-color: #fff;
  border-radius: 5px;
}

/* On mouse-over, add a grey background color */
.container2:hover input ~ .checkmark {
  background-color: #ccc;
}

/* When the checkbox is checked, add a blue background */
.container2 input:checked ~ .checkmark {
  background-color: #fff;
}

/* Create the checkmark/indicator (hidden when not checked) */
.checkmark:after {
  content: "";
  position: absolute;
  display: none;
}

/* Show the checkmark when checked */
.container2 input:checked ~ .checkmark:after {
  display: block;
}

/* Style the checkmark/indicator */
.container2 .checkmark:after {
  left: 7px;
  top: 3px;
  width: 5px;
  height: 10px;
  border: solid #64d282;
  border-width: 0 3px 3px 0;
  -webkit-transform: rotate(45deg);
  -ms-transform: rotate(45deg);
  transform: rotate(45deg);
}

@font-face {
  font-family: "Foros";
  src: url("~assets/fonts/Foros Medium.otf");
  font-style: bold;
  font-weight: bold;
}
@font-face {
  font-family: "Foros";
  src: url("~assets/fonts/Foros-Regular.ttf");
  font-style: normal;
  font-weight: normal;
}

body {
  font-size: 16px;
  font-family: "Foros", Roboto, Arial, sans-serif;
} 
button:focus{
  border: none;
  outline: none;
  border: 0;
}
.contact__form{
    background-color: #f2f7f9;
    padding-top: 50px;
    padding-bottom: 133px;
}
.contact__wrapper{
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 20px;
    margin-bottom: 21px;
}
.progress_bar{
    margin-bottom: 80px;
}
.vue-simple-progress:after{
 border-radius: 50px!important;
}
.vue-simple-progress:before{
 border-radius: 50px!important;
}
.vue-simple-progress-bar:before{
    border-radius: 50px!important;
}
.contact__wrapper input{
    width: 100%;
    height: 40px;
    border-radius: 5px;
    border: 1px solid #dce3e6;
    background-color: #ffffff;
    font-family: "Foros", Roboto, Arial, sans-serif;
    font-size: 15px;
    padding-left: 16px;
    margin-top: 5px;
}

.privacy__policy a{
    color: #0096c8;
}

.bold {
  font-weight: bold;
}
a {
  color: #fff;
  text-decoration: none;
}
.vue-simple-progress{
    border-radius: 5px!important;
}
h1{
  text-align: center;
  font-size: 35px;  
  margin-bottom: 19px;
}
.container {
  max-width: 1120px;
  margin: 0 auto;
  justify-content: center;
}
@media only screen and (max-width: 1200px) {
  .container{
    padding-left: 10px;
    padding-right: 10px;
    overflow: hidden;
  }
  .container2 {
    white-space: normal;
    }
}
@media only screen and (max-width: 670px) {
    .container{
        padding-left: 30px;
        padding-right: 30px;
    }
    .contact__wrapper{
        grid-template-columns: 1fr;

    }
    .container2 {
    white-space: normal;
  
    margin-left: 30px;
    transform: translateX(0%);
    }
}
@media only screen and (max-width: 480px) {
    .progress_bar{
        display: none;
    }
}
</style>>

