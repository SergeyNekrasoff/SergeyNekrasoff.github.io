<template>
  <div>
    <!-- Header -->
    <Header />

      <section class="order__analise">
        <div class="container">
          <h1>Выберите необходимый анализ</h1>
          <div id="app">
              <progress-bar 
                class="progress_bar" 
                bar-color="#64d282" 
                size="15" 
                :val="progressPercent" 
                bg-color="#fff" :bar-border-radius="radius"              
                bar-transition="all 0.5s ease">
              </progress-bar>
          </div>

          <SelectAnalyzes 
            :designMainPage="false"
            :user="user" />
        </div>
      </section>

    <!-- Footer -->
    <Footer/>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import ProgressBar from 'vue-simple-progress'
import Header from "@/components/UI/Header"
import Footer from "@/components/UI/Footer"
import SelectAnalyzes from "@/components/SelectAnalyzes"

export default {
  components:{ 
    Header, 
    Footer, 
    ProgressBar, 
    SelectAnalyzes 
  },
  data ({ params }) {
    return {
      radius: 50,
      progressPercent: 75,
      userCookie: null
    }
  },
  computed: {
    ...mapGetters({ user: 'getUserData' })
  },
};
</script>

<style >

.order__analise{
  background-color: #f2f7f9;
  padding-bottom: 60px;
  padding-top: 50px;
}
.container {
  max-width: 1120px;
  margin: 0 auto;
  justify-content: center;
}
/* Customize the label (the container) */
.container3 {
  margin-top: -40px; 
  font-size: 15px;
  text-align: left;
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
  top: 0;
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
.ps {
  height: 400px;
  box-shadow: 0 3px 15px rgba(0, 0, 0, 0.06);
  background-color: #fff;
}
@media only screen and (max-width: 1200px) {
  .container{
    padding-left: 10px;
    padding-right: 10px;
    overflow: hidden;
  }
}

@media only screen and (max-width: 480px) {
    .progress_bar{
        display: none;
    }
    .container3{
      margin-top: 34px;
    }
}
</style>>

