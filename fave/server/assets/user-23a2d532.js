import { ElCard as ElCard$1, ElForm as ElForm$1, ElFormItem as ElFormItem$1, ElInput as ElInput$1, ElButton as ElButton$1 } from "element-plus/lib";
import { ElCard, ElForm, ElButton, ElFormItem, ElInput, ElNotification } from "element-plus";
import { defineStore } from "pinia";
import { defineComponent, reactive, ref, computed, mergeProps, withCtx, createVNode, createTextVNode, toDisplayString, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate } from "vue/server-renderer";
import { _ as _export_sfc } from "../entry-server.js";
import "vue-router";
const base = "";
const elButton = "";
const elInput = "";
const elFormItem = "";
const elForm = "";
const elCard = "";
const useUser = defineStore("user", {
  state() {
    return {
      userInfo: {
        name: "",
        userId: "",
        token: ""
      }
    };
  },
  actions: {
    updateUser(info) {
      this.userInfo = info;
    },
    updateToken(token) {
      this.userInfo.token = token;
    }
  }
});
const _sfc_main = defineComponent({
  name: "User",
  components: {
    ElCard,
    ElForm,
    ElButton,
    ElFormItem,
    ElInput
  },
  setup() {
    const params = reactive({
      userName: "",
      password: ""
    });
    const userStore = useUser();
    const loading = ref(false);
    const isLogin = computed(() => !!userStore.userInfo.token);
    const userInfo = computed(() => userStore.userInfo);
    const submitHandle = () => {
      const { userName, password } = params;
      if (!userName) {
        ElNotification({
          type: "error",
          title: "Error",
          message: "Username is required"
        });
        return;
      }
      if (!password) {
        ElNotification({
          type: "error",
          title: "Error",
          message: "Password is required"
        });
        return;
      }
      loading.value = true;
      window.setTimeout(() => {
        userStore.updateUser({
          name: userName,
          userId: "1",
          token: Math.random().toString(36).slice(-8)
        });
        loading.value = false;
      }, 1500);
    };
    return { params, loading, submitHandle, userInfo, isLogin };
  }
});
const user_vue_vue_type_style_index_0_lang = "";
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_el_card = ElCard$1;
  const _component_el_form = ElForm$1;
  const _component_el_form_item = ElFormItem$1;
  const _component_el_input = ElInput$1;
  const _component_el_button = ElButton$1;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "user" }, _attrs))}><h3 class="mb-8px">User Page</h3>`);
  if (_ctx.isLogin) {
    _push(`<div class="info">`);
    _push(ssrRenderComponent(_component_el_card, { class: "box-card" }, {
      default: withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(`<div class="mb-12px c-red"${_scopeId}>User logged in</div><div${_scopeId}>UserName: <span class="c-#00f"${_scopeId}>${ssrInterpolate(_ctx.userInfo.name)}</span></div>`);
        } else {
          return [
            createVNode("div", { class: "mb-12px c-red" }, "User logged in"),
            createVNode("div", null, [
              createTextVNode("UserName: "),
              createVNode("span", { class: "c-#00f" }, toDisplayString(_ctx.userInfo.name), 1)
            ])
          ];
        }
      }),
      _: 1
    }, _parent));
    _push(`</div>`);
  } else {
    _push(ssrRenderComponent(_component_el_form, {
      "label-position": "top",
      class: "form"
    }, {
      default: withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(ssrRenderComponent(_component_el_form_item, { label: "UserName" }, {
            default: withCtx((_2, _push3, _parent3, _scopeId2) => {
              if (_push3) {
                _push3(ssrRenderComponent(_component_el_input, {
                  modelValue: _ctx.params.userName,
                  "onUpdate:modelValue": ($event) => _ctx.params.userName = $event
                }, null, _parent3, _scopeId2));
              } else {
                return [
                  createVNode(_component_el_input, {
                    modelValue: _ctx.params.userName,
                    "onUpdate:modelValue": ($event) => _ctx.params.userName = $event
                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                ];
              }
            }),
            _: 1
          }, _parent2, _scopeId));
          _push2(ssrRenderComponent(_component_el_form_item, { label: "Password" }, {
            default: withCtx((_2, _push3, _parent3, _scopeId2) => {
              if (_push3) {
                _push3(ssrRenderComponent(_component_el_input, {
                  modelValue: _ctx.params.password,
                  "onUpdate:modelValue": ($event) => _ctx.params.password = $event,
                  type: "password"
                }, null, _parent3, _scopeId2));
              } else {
                return [
                  createVNode(_component_el_input, {
                    modelValue: _ctx.params.password,
                    "onUpdate:modelValue": ($event) => _ctx.params.password = $event,
                    type: "password"
                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                ];
              }
            }),
            _: 1
          }, _parent2, _scopeId));
          _push2(ssrRenderComponent(_component_el_form_item, null, {
            default: withCtx((_2, _push3, _parent3, _scopeId2) => {
              if (_push3) {
                _push3(ssrRenderComponent(_component_el_button, {
                  loading: _ctx.loading,
                  type: "success",
                  onClick: _ctx.submitHandle
                }, {
                  default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                    if (_push4) {
                      _push4(` Submit `);
                    } else {
                      return [
                        createTextVNode(" Submit ")
                      ];
                    }
                  }),
                  _: 1
                }, _parent3, _scopeId2));
              } else {
                return [
                  createVNode(_component_el_button, {
                    loading: _ctx.loading,
                    type: "success",
                    onClick: _ctx.submitHandle
                  }, {
                    default: withCtx(() => [
                      createTextVNode(" Submit ")
                    ]),
                    _: 1
                  }, 8, ["loading", "onClick"])
                ];
              }
            }),
            _: 1
          }, _parent2, _scopeId));
        } else {
          return [
            createVNode(_component_el_form_item, { label: "UserName" }, {
              default: withCtx(() => [
                createVNode(_component_el_input, {
                  modelValue: _ctx.params.userName,
                  "onUpdate:modelValue": ($event) => _ctx.params.userName = $event
                }, null, 8, ["modelValue", "onUpdate:modelValue"])
              ]),
              _: 1
            }),
            createVNode(_component_el_form_item, { label: "Password" }, {
              default: withCtx(() => [
                createVNode(_component_el_input, {
                  modelValue: _ctx.params.password,
                  "onUpdate:modelValue": ($event) => _ctx.params.password = $event,
                  type: "password"
                }, null, 8, ["modelValue", "onUpdate:modelValue"])
              ]),
              _: 1
            }),
            createVNode(_component_el_form_item, null, {
              default: withCtx(() => [
                createVNode(_component_el_button, {
                  loading: _ctx.loading,
                  type: "success",
                  onClick: _ctx.submitHandle
                }, {
                  default: withCtx(() => [
                    createTextVNode(" Submit ")
                  ]),
                  _: 1
                }, 8, ["loading", "onClick"])
              ]),
              _: 1
            })
          ];
        }
      }),
      _: 1
    }, _parent));
  }
  _push(`</div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/views/user.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const user = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);
export {
  user as default
};
