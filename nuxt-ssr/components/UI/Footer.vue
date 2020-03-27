<template>
  <div class="footer2">
    <div class="container">
      <div>
        <div class="footer2__wrapper1 font-size-18">
          <div class="text-left cursor-pointer bold footer_tel"><a href="tel:+74959259296">8-495-925-92-96</a></div>
          <div class="divider cursor-pointer bold"> <a href="mailto:info@hculture.ru"></a>info@hculture.ru</div>
          <div>
            <div class="social__wrapper">
              <span class="social-icon-insta"></span>
              <span class="social-icon-vk"></span>
              <span class="social-icon-facebook"></span>
            </div>
          </div>
        </div>
        <div class="footer2__wrapper2 font-size-12">
          <div class="text-left">
            <div class="bold">Организация:</div>
            <div>Общество с ограниченной ответственностью </div>
            <div>«Группа Компаний «Медика» </div>
          </div>
          <div>
            <div class="text-center bold">Наш адрес:</div>
            <div class="text-center">115304, г. Москва,</div>
            <div class="text-center">ул. Кантемировская, дом 5, корп. 4.</div>

          </div>
          <div class="text-right">
            <div><span class="bold">Лицензия</span> ЛО-77-01-018432 от 18 июля 2019 г.</div>
            <div><span class="bold">ОГРН:</span> 1127746221734</div>
            <div><span class="bold">ИНН/КПП:</span> 7724827831/772401001</div>
          </div>

        </div>
        <div class="text-center copyright">
          © Все права защищены и охраняются законом. Консультации и информационные услуги оказывают партнеры.
        </div>
      </div>
    </div>

  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
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
.ps {
  height: 400px;
  box-shadow: 0 3px 15px rgba(0, 0, 0, 0.06);
  background-color: #fff;
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
  color: #000;
  text-decoration: none;
}
.container {
  max-width: 1120px;
  margin: 0 auto;
  justify-content: center;
}
.footer2 {
  position: relative;
  padding-top: 41px;
  z-index: 9;
  background-color: rgb(255, 255, 255);
  color: #000;
  padding-bottom: 46px;
}
.footer2__wrapper1 {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  align-items: center;
  font-size: 25px;
}
.footer2__wrapper2 {
  margin-top: 46px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  align-items: center;
  font-size: 15px;
}
.footer2__wrapper div {
  text-align: center;
}
.divider {
  border-left: 1px solid #dce3e6;
  border-right: 1px solid #dce3e6;
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
  background-image: url("~assets/img/UI/vk.svg");
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
  background-image: url("~assets/img/UI/insta.svg");
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
  background-image: url("~assets/img/UI/facebook.png");
  background-size: 100% 100%;
  background-repeat: no-repeat;
  cursor: pointer;
}
.social-icon-facebook:hover {
  filter: brightness(90%);
}
.footer2__wrapper .text-left {
  padding: 0;
}
.footer2__wrapper1 .text-right {
  text-align: right !important;
}
.foote2r__wrapper1 .text-left {
  text-align: left !important;
}
.footer2__wrapper2 .text-right {
  text-align: right !important;
}
.footer2__wrapper2 .text-left {
  text-align: left !important;
}
.copyright {
  margin-top: 32px;
  font-size: 15px;
}
@media only screen and (max-width: 1200px) {
  .container{
    padding-left: 10px;
    padding-right: 10px;
    overflow: hidden;
  }
}
@media only screen and (max-width: 670px) {
    .footer2__wrapper1 {
    grid-template-columns: 1fr;
    margin-top: 50px;
  }
  .footer2__wrapper1 .text-left {
    text-align: center !important;
  }
  .footer2__wrapper2 {
    grid-template-columns: 1fr;
    margin-top: 20px;
  }
  .footer2__wrapper1 div{
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
  .footer2__wrapper2 div{
    text-align: center;
    border: none;
    margin-bottom: 10px;
  }
}
@media only screen and (max-width: 480px) {
    .footer2__wrapper2 div:nth-child(2){
      margin-bottom: 0px;
    }
}
</style>>

