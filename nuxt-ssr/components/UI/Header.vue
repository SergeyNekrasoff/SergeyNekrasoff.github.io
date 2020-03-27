<template>

      <!-- header -->
    <div class="head">
      <div class="container">
        <nav class="navbar">
          <nuxt-link :to="currentHost && currentHost !== 'index' ? currentHost : '/'">
            <div class="logo2"></div>
          </nuxt-link>
          <div class="nav-contacts">
            <div>
              <div class="nav-contacts-text">Наш адрес:</div>
              <div class="font-size-12 bold">115304, г. Москва, ул. Кантемировская, дом 5, корп. 4</div>
            </div>
            <div class="tel">
              <div class="nav-contacts-text ">Поддержка с 8:00 до 22:00</div>
              <div class="font-size-12 bold"><a href="tel:+74959259296">8-495-925-92-96</a></div>
            </div>
          </div>
        </nav>
        </div>
    </div>

</template>

<script>
import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters({
      currentHost: 'getCurrentHost'
    })
  },
}
</script>

<style >
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
.bold {
  font-weight: bold;
}
.head a {
    color: #000;
    text-decoration: none;
}
.container {
  max-width: 1120px;
  margin: 0 auto;
}
.head{
    width: 100%;
    height: 121px;
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.1);
    background-color: #ffffff;
    position: relative;
}
.head .navbar {
  display: grid;
  grid-template-columns: .9fr 1fr;
  margin-bottom: 26px;
  align-items: center;
  padding-top: 26px;
  
}
.head .logo2 {
  content: '';
  display: block;
  height: 68px;
  width: 100%;
  background-image: url("~assets/img/UI/logo.svg");
  background-repeat: no-repeat;
  padding-left: 60px;
  width: 204px;
  cursor: pointer;
}

.head .nav-contacts {
  font-size: 16px;
  display: grid;
  grid-template-columns: 2.8fr 1fr;
  grid-gap: 10px;
}
.head .tel .nav-contacts-text {
  font-size: 11px;
  color: #000;
}
@media only screen and (max-width: 1200px) {
  .container{
    padding-left: 10px;
    padding-right: 10px;
    overflow: hidden;
  }
.head{
    height: auto;
}
.head .logo2{
    margin: 0 auto;
    margin-bottom: 25px;
  }
.head .navbar{
    grid-template-columns: 1fr ;
  }
} 
@media only screen and (max-width: 670px) {
 .head .nav-contacts2{
    grid-template-columns: 1fr 1fr;
  }
  .head .nav-contacts2 .tel{
    text-align: right;
  }
}
@media only screen and (max-width: 480px) {
  .head .nav-contacts2{
    grid-template-columns: 1fr !important;
    text-align: left;
  }
  .head .nav-contacts2 .tel {
    text-align: left;
  }
}
</style>