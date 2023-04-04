import { defineComponent, onServerPrefetch, onMounted, createVNode, createTextVNode } from "vue";
import Axios from "axios";
import { defineStore } from "pinia";
import { s as ssrRegisterHelper } from "./__vue-jsx-ssr-register-helper-814fdd19.js";
const index = "";
const getFruitList = async () => {
  const { data } = await Axios.get("/justTest/getFruitList");
  if (data.code === 0) {
    return data.data;
  }
  return [];
};
const useMarket = defineStore("market", {
  state() {
    return {
      fruitList: []
    };
  },
  actions: {
    async getList() {
      try {
        const data = await getFruitList();
        this.fruitList = data;
      } catch (error) {
        console.log(error);
      }
    }
  }
});
const __default__ = defineComponent({
  name: "Markets",
  async serverPrefetch() {
  },
  async setup() {
    const marketStore = useMarket();
    onServerPrefetch(async () => {
      await marketStore.getList();
    });
    onMounted(() => {
      marketStore.getList();
    });
    return () => createVNode("div", null, [createVNode("h3", null, [createTextVNode("FruitList")]), createVNode("table", {
      "class": "table"
    }, [createVNode("thead", null, [createVNode("tr", null, [createVNode("th", {
      "class": "c-#67c23a"
    }, [createTextVNode("ID")]), createVNode("th", {
      "class": "c-#e6a23c"
    }, [createTextVNode("Name")]), createVNode("th", {
      "class": "c-#79bbff"
    }, [createTextVNode("Price")])])]), createVNode("tbody", null, [marketStore.fruitList.map((item) => {
      return createVNode("tr", {
        "key": item.id
      }, [createVNode("td", {
        "class": "c-#67c23a"
      }, [item.id]), createVNode("td", {
        "class": "c-#e6a23c"
      }, [item.name]), createVNode("td", {
        "class": "c-#79bbff"
      }, ["$" + item.price])]);
    })])])]);
  }
});
const __moduleId = "src/views/market.tsx";
ssrRegisterHelper(__default__, __moduleId);
export {
  __default__ as default
};
