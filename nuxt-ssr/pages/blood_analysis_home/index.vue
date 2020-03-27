<template>
  <div>
    <Onkomarker/>
    <MainPage/>
  </div>
</template>

<script>
import Onkomarker from "@/components/Headers/Onkomarker";
import VueCaruse from "@/components/Vuecarousel";
import MainPage from "@/components/MainPage";
import SelectAnalyzes from "@/components/SelectAnalyzes";

export default {
  components: {
    VueCaruse,
    SelectAnalyzes,
    MainPage,
    Onkomarker
  },
  methods:{
    goToContactForm(){
      this.$router.push('/order_step_contact')
    },
  }
};
</script>

<style>

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
.perfect-scrollbar__list .ps{
    height: 400px;
    box-shadow: 0 3px 15px rgba(0, 0, 0, 0.06);
    background-color: #fff;
    overflow-x: hidden!important;
}
.ps{
  height: 400px;
  box-shadow: 0 3px 15px rgba(0, 0, 0, 0.06);
  background-color: #fff;
  overflow: hidden;
  overflow-x: hidden;
}
.bggrey{
  background-color: rgb(221, 221, 221);
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
a {
  color: #fff;
  text-decoration: none;
}
h2{
  text-align: center;
  font-size: 35px;
}
.container {
  max-width: 1120px;
  margin: 0 auto;
  justify-content: center;
}
header {
  position: relative;
  background-color: #0096c8;
  color: #fff;
  z-index: 0;
  background-size: 49px 52px;
  height: 600px;
}

header::after {
  position: absolute;
  z-index: -3;
  content: "";
  display: block;
  left: 0px;
  top: 45%;
  height: 696px;
  width: 100%;
  color: #fff;
  background-image: url("~assets/img/2-layers.png");
  background-repeat: no-repeat;
  background-position: 0px 50%;
  background-size: cover;
  padding-bottom: 30px;
}
.nav {
  display: grid;
  grid-template-columns: .9fr 1fr;
  margin-bottom: 26px;
  align-items: center;
  padding-top: 26px;
}
.logo {
  content: '';
  display: block;
  height: 68px;
  width: 100%;
  background-image: url("~assets/img/logo.png");
  background-repeat: no-repeat;
  padding-left: 60px;
  width: 204px;
  cursor: pointer;
}

.nav-contacts {
  font-size: 16px;
  display: grid;
  grid-template-columns: 2.8fr 1fr;
  grid-gap: 10px;
}
.nav-contacts-text {
  font-size: 11px;
}
hr {
  border: 0px;
  background-color: #80cae3;
  height: 1px;
}
header h1 {
  margin-top: 101px;
  font-size: 35px;
  margin-bottom: 29px;
}
.check-icon {
  background-image: url("~assets/img/check-icon.png");
  background-size: 10px 10px;
  background-repeat: no-repeat;
  padding-left: 1.2rem;
  margin-bottom: 0.4rem;
  background-position-y: 4px;
  font-size: 18px;
}
.header-title {
  display: grid;
  grid-template-columns: 1.1fr .9fr;
}
.header-title .title{
  margin-left: 33px;
}
/* .header-bacground {
 background-image: url("~assets/img/header-bacground.png"); 
  background-size: 550px 388px;
  background-repeat: no-repeat;
  margin-top: 3rem;
  align-items: center;
  padding-bottom: 5rem;
} */
.header-button {
  position: relative;
  z-index: 101;
  width: 250px;
  height: 50px;
  line-height: 50px;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16);
  border-radius: 5px;
  background-color: #64d282;
  border: 0px;
  font-size: 20px;
  color: #fff;
  margin-top: 50px;
  margin-bottom: 68px;
  font-family: "Foros", Roboto, Arial, sans-serif;
  cursor: pointer;
}
.header-button:hover {
  background-color: #78e996;
  transition: 0.3s ease;
}
.header-button:active {
  background-color: #4e8fad;
  box-shadow: none;
  transition: 0.3s ease;
  color: rgb(168, 168, 168);
}
.header_wrapper {
  justify-content: space-between;
  position: relative;
  z-index: 4;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-gap: 20px;
  color: #fff;
}
.header_wrapper div {
  text-align: center;
  justify-content: center;
}
.header_item {
  width: 100%;
  height: 210px;
  box-shadow: 0 3px 15px rgba(0, 0, 0, 0.06);
  border-radius: 5px;
  background-color: #21a4cf;
  padding-top: 123px;
  font-size: 16px;
}
.header_item .bold{
  font-size: 18px;
}
.header_wrapper .time{
  background-image: url("~assets/img/cloc.svg");
  background-repeat: no-repeat;
  display: block;
  background-size: 75px 62px;
  background-position: 60% 30%;
}
.header_wrapper .servis{
  background-image: url("~assets/img/car.svg");
  background-repeat: no-repeat;
  display: block;
  background-size: 106px 62px;
  background-position: 60% 30%;
}
.header_wrapper .result{
  background-image: url("~assets/img/numb.svg");
  background-repeat: no-repeat;
  display: block;
  background-size: 75px 62px;
  background-position: 60% 30%;
}
.header_wrapper .pogram{
  background-image: url("~assets/img/hend.svg");
  background-repeat: no-repeat;
  display: block;
  background-size: 75px 62px;
  background-position: 60% 30%;
}

/* ///////////////////////analyzes/////////////////////// */
.analyzes{
  margin-top: 200px;
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
.analyzes .price{
  width: 100%;
  box-shadow: 0 3px 15px rgba(0, 0, 0, 0.06);
  border-radius: 5px;
  background-color: #ffffff;
  padding-top: 15px;
  margin-top: 20px;
}
.analyzes .table_title{
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
  margin-bottom: 28px;
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
.analyzes .table_name{
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
/* //////////////////select-compleks////////////// */
.select-compleks{
  padding-top: 53px;
  position: relative;
  background-color: #0096c8;
}
.select-compleks::after {
    content: "";
    display: block;
    position: absolute;
    left: 0px;
    right: 0px;
    top: -503px;
    height: 503px;
    width: 100%;
    color: #fff;
    background-image: url('~assets/img/Frame 1.png');
    background-repeat: no-repeat;
    background-position: 0px 1px;
    background-size: inherit;
    z-index: -1;
}
.select-compleks{
  position: relative;
  background-image: url('~assets/img/Group_6687@2x.png');
  background-size: 100% 100%;
  max-width: 100%;
}
.select-compleks h2{
  color: #fff;
  margin-bottom: 40px;
  
}
.carusel{
  position: relative;
  padding-bottom: 40px;
}
/* /////////////////privilege///////////////// */
.privilege{
  position: relative;
}
.privilege::after {
    position: absolute;
    z-index: -1;
    content: "";
    display: block;
    left: 0px;
    top: -0;
    height: 223%;
    width: 100%;
    color: #fff;
    background-image: url('~assets/img/Frame2.png');
    background-repeat: no-repeat;
    background-position: 0px 0px;
    background-size: 100% 58%;
    padding-bottom: 30px;
}
.privilege h2{
  color: #fff;
  padding-top: 40px;
  margin-bottom: 105px;
}
.privilege__wrapper{
  margin-top: 155px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 20px;
}
.privilege__item{
  position: relative;
  width: 100%;
  background-color: #fff;
  height: 303px;
  box-shadow: 0 3px 15px rgba(0, 0, 0, 0.06);
  border-radius: 5px;
  text-align: center;
  padding: 60px;
  font-size: 16px;
}
.privilege__item .bold{
  padding-top: 80px;
  width: 145px;
  margin: 0 auto;
  margin-bottom: 10px;
  font-size: 18px;
}
.privilege_chimical::before{
    position: absolute;
    z-index: 3;
    content: "";
    display: block;
    left: 50%;
    transform: translateX(-50%);
    top: -95px;
    height: 220px;
    width: 220px;
    background-image: url('~assets/img/17-layers.png');
    background-repeat: no-repeat;
    background-position: 0px 0px;
    background-size: 100% 100%;
}
.privilege_onlinecervice::before{
    position: absolute;
    z-index: 3;
    content: "";
    display: block;
    left: 50%;
    transform: translateX(-50%);
    top: -95px;
    height: 220px;
    width: 220px;
    background-image: url('~assets/img/32-layers.png');
    background-repeat: no-repeat;
    background-position: 0px 0px;
    background-size: 100% 100%;
}
.privilege_personal::before{
  position: absolute;
  z-index: 3;
  content: "";
  display: block;
  left: 50%;
  transform: translateX(-50%);
  top: -95px;
  height: 220px;
  width: 220px;
  background-image: url('~assets/img/12-layers.png');
  background-repeat: no-repeat;
  background-position: 0px 0px;
  background-size: 100% 100%;
}
/* /////////////////////discounts///////////// */
.discounts{
  margin-top: 148px;
  position: relative;
}
.discounts h3{
  font-size: 35px;
  margin-bottom: 49px;
}
.discounts__text{
  font-size: 25px;
}
.discounts__btn{
  margin-top: 51px;
  color: #ffffff;
  font-family: Foros;
  font-size: 20px;
  width: 250px;
  height: 50px;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16);
  border-radius: 5px;
  background-color: #64d282;
  border: 0px;
}
.discounts__btn:hover {
  background-color: #78e996;
  transition: 0.3s ease;
}
.discounts__btn:active {
  background-color: #4e8fad;
  box-shadow: none;
  transition: 0.3s ease;
  color: rgb(168, 168, 168);
}
.discounts__wrapper{
  position: relative;
  display: grid;
  grid-template-columns: 1fr 1fr;

}
.discounts-bacground{
    position: absolute;
    content: "";
    display: block;
    left: 50%;
    height: 503px;
    width: 555px;
    background-image: url('~assets/img/Mask_Group_210.png');
    background-repeat: no-repeat;
    background-position: 0px 0px;
    background-size: 100% 100%;
    z-index: -2;
    top: -70px;
}
.discounts::before{
    position: absolute;
    z-index: -1;
    content: "";
    display: block;
    left: 0px;
    top: 370px;
    height: 230%;
    width: 100%;
    color: #fff;
    background-image: url('~assets/img/2-layers4.png');
    background-repeat: no-repeat;
    background-position: 0px 0px;
    background-size: 100% 59%;
    padding-bottom: 30px;

}
/* //////////////comments/////////////////// */
.comments{
  margin-top: 195px;
  position: relative;
}
.comments h2{
  color: #fff;
  margin-bottom: 41px;
}
.comments__carusel{
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 20px;
  position: relative;

}
.comments::before{
    position: absolute;
    content: '';
    display: block;
    background-color: #0096c8;
    width: 100%;
    height: 600px;
    top: 150px;
}
.comments__carusel_item{
  width: 100%;
  height: 260px;
  box-shadow: 0 3px 15px rgba(0, 0, 0, 0.06);
  border-radius: 5px;
  background-color: #ffffff;
  font-size: 18px;
  padding: 20px 20px 20px 170px;
}
.comments__carusel_item .bold{
font-size: 25px;
margin-bottom: 20px;
}
.font-size-14{
  font-size: 14px;
}
.font-size-18{
  font-size: 18px;
}
.comments__carusel .item1{
  background-image: url('~assets/img/Екатерина.png');
  background-position: 20px 65px ;
  background-size: 130px 130px;
  background-repeat: no-repeat;
}
.comments__carusel .item2{
  background-image: url('~assets/img/Дмитрий.png');
  background-position: 20px 65px ;
  background-size: 130px 130px;
  background-repeat: no-repeat;
}
.comments__carusel .item3{
  background-image: url('~assets/img/Владимир.png');
  background-position: 20px 65px ;
  background-size: 130px 130px;
  background-repeat: no-repeat;
}
.comments__carusel .item4{
  background-image: url('~assets/img/Станислава.png');
  background-position: 20px 65px ;
  background-size: 130px 130px;
  background-repeat: no-repeat;
}
.comments__carusel_item .years{
  margin-left: 49px;
}
/* /////////////////footer/////////////// */
footer {
  position: relative;
  padding-top: 70px;
  z-index: 9;
  background-color: #0096c8;
  color: #fff;
  padding-bottom: 3rem;
}
.footer__wrapper1 {
  margin-top: 70px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  align-items: center;
  font-size: 25px;
}
.footer__wrapper2 {
  margin-top: 70px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  align-items: center;
  font-size: 15px;
}
.footer__wrapper div {
  text-align: center;
}
.divider {
  border-left: 1px solid #71c2dd;
  border-right: 1px solid #71c2dd;
  text-align: center;
}
.text-center {
  text-align: center;
}
.social-icon-insta {
  content: "";
  display: block;
  height: 43px;
  width: 43px;
  background-image: url("~assets/img/Subtraction_29.png");
  background-size: 100% 100%;
  background-repeat: no-repeat;
  cursor: pointer;
}
.social-icon-insta:hover {
  filter: brightness(90%);
}
.social-icon-vk {
  content: "";
  display: block;
  height: 43px;
  width: 43px;
  background-image: url("~assets/img/Subtraction_30.png");
  background-size: 100% 100%;
  background-repeat: no-repeat;
  margin: 0 1rem;
  cursor: pointer;
}
.social-icon-vk:hover {
  filter: brightness(90%);
}
.social__wrapper {
  display: flex;
  justify-content: flex-end;
}
.cursor-pointer {
  cursor: pointer;
}
.social-icon-facebook {
  content: "";
  display: block;
  height: 43px;
  width: 43px;
  background-image: url("~assets/img/Path_5266.png");
  background-size: 100% 100%;
  background-repeat: no-repeat;
  cursor: pointer;
}
.social-icon-facebook:hover {
  filter: brightness(90%);
}
.footer__wrapper .text-left {
  padding: 0;
}
.footer__wrapper1 .text-right {
  text-align: right !important;
}
.footer__wrapper1 .text-left {
  text-align: left !important;
}
.footer__wrapper2 .text-right {
  text-align: right !important;
}
.footer__wrapper2 .text-left {
  text-align: left !important;
}
.copyright {
  margin-top: 3rem;
  font-size: 15px;
}
@media only screen and (max-width: 1200px) {
  .container{
    padding-left: 10px;
    padding-right: 10px;
    overflow: hidden;
  }
  .logo{
    margin: 0 auto;
    margin-bottom: 25px;
  }
  .nav{
    grid-template-columns: 1fr ;
  }
  .analyzes{
    margin-top: 150px;
  }
  .analyzes__wrapper{
    grid-template-columns: 1fr;
    margin-bottom: 130px;
  }
  .analyzes__hr{
    display: none;
  }
  .analyzes__wrapper div{
    margin-bottom: 80px;
  }
  .comments{
    background-color: #0096c8;
     margin-top: 0px;
  }
  .comments h2{
    padding-top: 30px;
  }
  .comments__carusel{
    grid-template-columns: 1fr;
  }
  .discounts {
    margin-top: 60px;
  }
  .discounts__text{
    font-size: 18px;
  }
  .discounts-bacground {
    left: 50%;
    height: 403px;
    width: 485px;
    background-position: 0px 0px;
    top: 0px;
  }
  .discounts::before {
    background-color: #0096c8;
    background-image: none;
  }
  .discounts__wrapper {
    padding-bottom: 60px;
  }
  .privilege::after {
    background-image: none;
  }
  .privilege{
    background-color: #0096c8;
  }
  .privilege{
    padding-bottom: 20px;
    background-size: 100% 43%;
  }
  .privilege h2{
    color: #fff;
  }
  .privilege__item{
    padding: 6px;
    padding-top: 80px;
    padding-bottom: 20px;
    height: auto;
  }
}


@media only screen and (max-width: 670px) {
  h2{
    font-size: 30px;
  }
  .discounts__wrapper h3{
    font-size: 30px;
  }
  h1{
    font-size: 30px;
  }
  .nav-contacts{
    grid-template-columns: 1fr 1fr;
  }
  .nav-contacts .tel{
    text-align: right;
  }
  .header_wrapper{
    grid-template-columns: 1fr 1fr;
  }
  .header-title{
    grid-template-columns: 1fr;
  }
  .analyzes {
    margin-top: 70px;
  }
  .analyzes__wrapper{
    grid-template-columns: 1fr;
    margin-bottom: 70px;
  }
  .privilege::after {
    background-image: none;
  }
  .privilege__wrapper{
    grid-template-columns: 1fr;
    margin-top: 40px;
  }
  .privilege h2 {
    color: #fff;
    padding-top: 0px;
    margin-bottom: 70px;
  }
  .privilege__item{
    margin-bottom: 30px;
    padding-bottom: 20px;
  }
  .privilege_chimical::before, .privilege_onlinecervice::before, .privilege_personal::before{
    top: -40px;
    height: 90px;
    width: 90px;
  }
  .discounts__wrapper{
    grid-template-columns: 1fr;
  }
  .privilege__item .bold {
    padding-top: 0px;
    margin-top: -10px;
  }
  .discounts__wrapper{
    margin-bottom: 30px;
  }
  .discounts__text{
    font-size: 18px;
    text-align: center
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
  .discounts__btn{
    width: 100%;
  }
  .discounts-bacground{
    background-image: none;
  }
  .header-bacground{
    background-image: none
  }
  .comments__carusel_item {
    height: auto;
  }
  .comments__carusel_item {
    padding: 20px;
    padding-top: 90px;
  }
  .comments {
    padding-top: 0px;
  }
  .comments__carusel .item1 {
      background-position: 50% 20px;
    background-size: 80px 80px;
  }
  .comments__carusel .item2 {
    background-position: 50% 20px;
    background-size: 80px 80px;
  }
  .comments__carusel .item3 {
    background-position: 50% 20px;
    background-size: 80px 80px;
}
  .comments__carusel .item4 {
    background-position: 50% 20px;
    background-size: 80px 80px;
  }
  .comments__carusel_item .font-size-14{
    margin-top: 20px;
  }
  .comments__carusel_item .font-size-14, .bold {
    text-align: center;
  }
  .comments__carusel_item .years{
    display: block;
    margin-left: 0px;
  }
  .footer__wrapper1 {
    grid-template-columns: 1fr;
    margin-top: 50px;
  }
  .footer__wrapper1 .text-left {
    text-align: center !important;
  }
  .footer__wrapper2 {
    grid-template-columns: 1fr;
    margin-top: 20px;
  }
  .footer__wrapper1 div{
    text-align: center;
    border: none;
    margin-bottom: 10px;
  }
  .divider{
    border: none;
  }
  .social__wrapper{
    margin-top: 5px;
    justify-content: center;
  }
  .copyright{
    text-align: center;
    margin-top: 20px;
  }
  .footer__wrapper2 div{
    text-align: center;
    border: none;
    margin-bottom: 10px;
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
  header {
    height: 700px;
  }
  .analyzes__item {
    padding-top: 11rem;
  }
  .header_wrapper{
    margin-top: 50px;
  }
  .nav-contacts{
    grid-template-columns: 1fr;
    text-align: left;
  }
  .nav-contacts .tel {
    text-align: left;
  }
  header h1 {
    margin-top: 60px;
    text-align: center;
    margin-bottom: 29px;
  }
  .header-button {
    margin-top: 20px;
  }
  .analyzes__hr {
    display: none
  }
  .header-title .title {
      margin-left: 0px;
  }
  .privilege__item .bold {
      margin-top: -30px;
  }
  .privilege__wrapper {
    grid-gap: 30px;
  }
  .header-button{
    width: 100%;
  }
  .discounts__text{
    font-size: 14px;
  }
  .footer__wrapper2 div:nth-child(2){
     margin-bottom: 0px;
  }
  .comments__carusel_item{
    text-align: center;
  }
  .total_wrapper{
    text-align: left;
  }
  .table-total .bold {
    padding-left: 0px; 
  }
}

</style>

