<template>
  <div>
    <!-- Header -->
    <Header class="head"/>

    <section class="order__success">
        <div class="container">
            <h1>Спасибо!</h1>
            <div id="app">
                <progress-bar class="progress_bar" bar-color="#64d282" size="15" :val="progressPercent" 
                bg-color="#fff" :bar-border-radius="radius"              
                bar-transition="all 0.5s ease"></progress-bar>
            </div>
            <div class="order__success_wrapper">
                <div class="bold">Спасибо, ваш заказ принят.</div>
                <div>
                    <div>Медсестра вам перезвонит для подтверждения данных.</div>
                     <div>Получить результаты анализов вы можете в личном кабинете. </div>
                    <div>Доступ в него мы пришлем вам на почту, указанную при оформлении заказа.</div>
                </div>
            </div>
        </div>
    </section>
      

    <!-- Footer -->
    <Footer/>
  </div>
</template>

<script>
import ProgressBar from 'vue-simple-progress'
import Header from "@/components/UI/Header"
import Footer from "@/components/UI/Footer"
import Cookie from 'js-cookie'

export default {
  name:"order__success",
  components:{ Header, Footer, ProgressBar },
  data:()=>({
    radius: 50,
    progressPercent: 100
  })
}
</script>

<style scoped>

.head{
   box-shadow: 0 3px 6px rgba(0, 0, 0, 0.1)!important;
}
.containerInp{
    color: #000;
    font-size: 12px;
}
.order__success_wrapper{
    padding-bottom: 48px;
    padding-top: 48px;
    margin: 0 auto;
    width: 100%;
    height: 215px;
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.1);
    background-color: #ffffff;
    font-size: 20px;
    
}
.order__success_wrapper .bold{
    margin-bottom: 20px;
}
.order__success{
    padding-top: 51px;
    text-align: center;
    background-color: #f2f7f9;
    padding-bottom: 291px;
}
.order__success_wrapper div div{
    max-width: 692px;
    margin: 0 auto;
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


.bold {
  font-weight: bold;
}
a {
  color: #fff;
  text-decoration: none;
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

}
@media only screen and (max-width: 670px) {
    .container{
        padding-left: 30px;
        padding-right: 30px;
    }
    .order__success_wrapper{
        height: auto;
        padding-left: 20px;
        padding-right: 20px;          
    }
    .order__success{
        padding-bottom: 90px;
    }

}
@media only screen and (max-width: 480px) {
    .progress_bar{
        display: none;
    }
}
</style>>

