<template>
  <div>
    <div 
      class="infinite-scroll"
      v-infinite-scroll="onScroll" 
      infinite-scroll-disabled="busy" 
      infinite-scroll-distance="700">
      <div class="perfect-scrollbar__list" >
        <div>
          <div 
            :class="['row__title', { 'hidden': !item.visible }]"
            v-for="(item, index) in analyzesAll" 
            :key="index">
              <div class="bold table_cod" v-if="!isMobile">{{ item.code }}</div>
              <div class=" table_name">
                <span :class="{ bold: item.complex }">
                  {{ item.name }}
                </span> 
                {{ item.includComplexNames }}</div>
              <div class="table_price">{{ item.price }} р.</div>
              <div class="table_check icon_plus" @click="addItem(item)"></div>
          </div>
        </div>
        <div
          class="empty-list" 
          v-if="!analyzesAll.length">
          <span class="bold">Ничего не найдено!</span>
        </div>        
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  props: ['analyzesAll'],
  data () {
    return {
      windowWidth: 0,
      busy: false
    }
  },
  methods: {
    handleResize() {
      this.windowWidth = window.innerWidth;
    },
    onScroll() {
      this.busy = true
      this.$emit('loadMoreToEnd')

      setTimeout(() => {
        this.busy = false
      }, 1000)
    },
    addItem(item) {
      this.$store.commit('setVisibillity', { 
        complex: item.complex,
        id: item.id,
        code: item.code,
        visible: false
      })
      this.$emit('addOrders', item)
    }
  },
  computed: {
    isMobile() {
      if (this.windowWidth < 768) {
        return true
      } else {
        return false
      }
    }
  },
  mounted(){
    window.addEventListener('resize', this.handleResize)
    this.handleResize()
  },
  destroyed() {
    window.removeEventListener('resize', this.handleResize)
  }
}
</script> 

<style lang="scss" scoped>
.infinite-scroll {
  height: 400px;
  box-shadow: 0 3px 15px rgba(0, 0, 0, 0.06);
  background-color: #fff;
  overflow-x: hidden!important;
}

.hidden { 
  display: none; 
}

.empty-list {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>

