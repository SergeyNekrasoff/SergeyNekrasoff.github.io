<template>
  <div v-if="showCarousel" class="carusel__wrapper">

    <carousel-3d :controls-visible="true" :height="360" :width="400" :controls-prev-html="'&nbsp;'" :controls-next-html="'&nbsp;'" 
                 :controls-width="80" :controls-height="50" :clickable="false"
                 class="carusel_control">
      <slide :index="0">
        <div class="slide1"></div>
      </slide>
      <slide :index="1">
        <div class="slide2"></div>
      </slide>
      <slide :index="2">
       <div class="slide3"></div>
      </slide>
      <slide :index="3">
        <div class="slide4"></div>
      </slide>
      <slide :index="4">
        <div class="slide5"></div>
      </slide>
    </carousel-3d>

  </div>
</template>

<script>
import Carousel3d from "vue-carousel-3d/src/Carousel3d.vue";
import Slide from "vue-carousel-3d/src/Slide.vue";
export default {
  components: {
    Carousel3d,
    Slide
  },
  data() {
    return {
      showCarousel: false
    };
  },
  mounted() {
    this.showCarousel = true;
  }
};
</script>
<style scoped>
.slide1{
  content: '';
  display: block;
  width: 100%;
  height: 100%;
  background-image: url('~assets/img/Group_7602.png');
  background-size: 100% 100%;
  box-shadow: 0 3px 15px rgba(0, 0, 0, 0.06);
}
.slide2{
  content: '';
  display: block;
  width: 100%;
  height: 100%;
  background-image: url('~assets/img/Group_7603.png');
  background-size: 100% 100%;
  box-shadow: 0 3px 15px rgba(0, 0, 0, 0.06);
}
.slide3{
  content: '';
  display: block;
  width: 100%;
  height: 100%;
  background-image: url('~assets/img/Group_7604.png');
  background-size: 100% 100%;
  box-shadow: 0 3px 15px rgba(0, 0, 0, 0.06);
}
.slide4{
  content: '';
  display: block;
  width: 100%;
  height: 100%;
  background-image: url('~assets/img/Group_7605.png');
  background-size: 100% 100%;
  box-shadow: 0 3px 15px rgba(0, 0, 0, 0.06);
}
.slide5{
  content: '';
  display: block;
  width: 100%;
  height: 100%;
  background-image: url('~assets/img/Group_7606.png');
  background-size: 100% 100%;
  box-shadow: 0 3px 15px rgba(0, 0, 0, 0.06);
}
.carousel-3d-slide{
  background-color: transparent;
  border: none;
}
.carousel-3d-slide{
  height: 405px;
  width: 474px;
}
.carusel__wrapper{
  position: relative;
  width:95%;
  margin: 0 auto;
}
.carusel_control::after{
  position:absolute;

  content:'';
  display: block;
  height: 60px;
  width:60px;
  top: 50%;
  z-index: 99;
  transform: translateY(-50%);
  left:0;
  background-image: url('~assets/img/prev.png');
}
.carusel_control::before{
  position:absolute;
  content:'';
  display: block;
  z-index: 99;
  height: 60px;
  width:60px;
  top: 50%;
  transform: translateY(-50%);
  right:0;
  background-image: url('~assets/img/next.png');
}
</style>