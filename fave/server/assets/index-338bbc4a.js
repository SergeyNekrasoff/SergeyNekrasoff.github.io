import { defineComponent, ref, createVNode, createTextVNode } from "vue";
import { ElSwitch } from "element-plus";
import { s as ssrRegisterHelper } from "./__vue-jsx-ssr-register-helper-814fdd19.js";
const elSwitch = "";
const __default__ = defineComponent({
  name: "Index",
  setup() {
    const isActive = ref(false);
    return () => createVNode("div", {
      "class": "index"
    }, [createVNode(ElSwitch, {
      "modelValue": isActive.value,
      "onUpdate:modelValue": ($event) => isActive.value = $event,
      "active-color": "#13ce66",
      "inactive-color": "#ff4949"
    }, {
      default: () => [createTextVNode("switch")]
    })]);
  }
});
const __moduleId = "src/views/index.tsx";
ssrRegisterHelper(__default__, __moduleId);
export {
  __default__ as default
};
