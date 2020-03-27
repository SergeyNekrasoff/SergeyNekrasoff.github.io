<template>
    <header>
      <div class="container">
        <nav class="nav">
          <nuxt-link :to="currentHost && currentHost !== 'index' ? currentHost : '/'">
            <div class="logo"></div>
          </nuxt-link>
          <div class="nav-contacts">
            <div>
              <div class="nav-contacts-text">Наш адрес:</div>
              <div class="font-size-12">115304, г. Москва, ул. Кантемировская, дом 5, корп. 4</div>
            </div>
            <div class="tel">
              <div class="nav-contacts-text ">Поддержка с 8:00 до 22:00</div>
              <div class="font-size-12 bold"><a href="tel:+74959259296">8-495-925-92-96</a></div>
            </div>
          </div>
        </nav>
        <hr>
        <div class="header-title">
          <div class="title">
            <h1>Сдать анализы на дому</h1>
            <div class="check-icon">Более 2000 видов анализов</div>
            <div class="check-icon">Анализы крови на гормоны</div>
            <div class="check-icon">Анализы крови на аллергены</div>
            <div class="check-icon">Анализы крови на инфекции</div>
            <div class="check-icon">Анализы крови на витамины</div>
            <button class="header-button" @click="goToContactForm">Заказать выезд</button>
          </div>
          <div class="header-bacground"></div>
        </div>
        <div>
        </div>
      </div>
    </header>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  methods:{
    goToContactForm(){
      this.$store.commit('setMoodService', 'consult')
      this.$store.commit('setConsultation', false)
      this.$router.push(`/order_step_contact`)
    },
  },
  computed: {
    ...mapGetters({
      currentHost: 'getCurrentHost'
    })
  }
}
</script>

<style>
.header-bacground {
 background-image: url("~assets/img/header-bacground.png"); 
  background-size: 550px 388px;
  background-repeat: no-repeat;
  margin-top: 3rem;
  align-items: center;
  padding-bottom: 5rem;
}
</style>