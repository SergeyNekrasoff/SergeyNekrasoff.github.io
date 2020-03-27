<template>
      <header>
      <div class="container">
        <nav class="nav">
          <nuxt-link to="/blood_analysis_home">
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
            <h1>Сдать анализы на онкомаркеры</h1>
            <div class="check-icon">Женски/мужской онкоскрининг </div>
            <div class="check-icon">Сheck-up Женский/мужской</div>
            <div class="check-icon">Сheck-up онкоурологический</div>
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
export default {
  methods:{
    goToContactForm(){
      this.$store.commit('serCurrentHost', { path: this.$route.name })
      this.$store.commit('setMoodService', 'consult')
      this.$store.commit('setConsultation', false)
      this.$router.push('/order_step_contact')
    },
  }
}
</script>

<style scoped>
.header-bacground {
  background-image: url('~assets/img/8-layers.png');
  background-size: 419px 566px;
  background-repeat: no-repeat;
  margin-top: 38px;
  -webkit-box-align: center;
  align-items: center;
  padding-bottom: 5rem;
}
</style>