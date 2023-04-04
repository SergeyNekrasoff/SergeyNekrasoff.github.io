import { ssrRenderAttr, ssrInterpolate, ssrRenderComponent, ssrRenderSuspense, ssrRenderVNode, renderToString } from "vue/server-renderer";
import { createPinia } from "pinia";
import { defineComponent, useSSRContext, resolveComponent, withCtx, createTextVNode, createVNode, resolveDynamicComponent, openBlock, createBlock, Suspense, createSSRApp } from "vue";
import { createMemoryHistory, createRouter as createRouter$1 } from "vue-router";
import { ID_INJECTION_KEY } from "element-plus";
const __uno = "";
const _sfc_main = defineComponent({
  name: "App",
  data() {
    return {
      time: ""
    };
  },
  mounted() {
    window.setInterval(() => {
      this.time = new Date().toLocaleString();
    }, 1e3);
  }
});
const _imports_0 = "/assets/logo-03d6d6da.png";
const app_vue_vue_type_style_index_0_scoped_f61995d8_lang = "";
const _export_sfc = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props) {
    target[key] = val;
  }
  return target;
};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_router_link = resolveComponent("router-link");
  const _component_router_view = resolveComponent("router-view");
  _push(`<!--[--><div class="logo" data-v-f61995d8><img alt="Vue logo"${ssrRenderAttr("src", _imports_0)} data-v-f61995d8><h3 data-v-f61995d8>Vue3.0 Typescript Eslint SSR Starter</h3><p class="c-#DB752D" data-v-f61995d8>${ssrInterpolate(_ctx.time)}</p></div><nav data-v-f61995d8>`);
  _push(ssrRenderComponent(_component_router_link, { to: { name: "index" } }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Go to Home`);
      } else {
        return [
          createTextVNode("Go to Home")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_router_link, { to: { name: "user" } }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Go to User`);
      } else {
        return [
          createTextVNode("Go to User")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_router_link, { to: { name: "market" } }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Go to Market`);
      } else {
        return [
          createTextVNode("Go to Market")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</nav><hr data-v-f61995d8><div class="container pt-12px pb-12px" data-v-f61995d8>`);
  _push(ssrRenderComponent(_component_router_view, null, {
    default: withCtx(({ Component }, _push2, _parent2, _scopeId) => {
      if (_push2) {
        ssrRenderSuspense(_push2, {
          default: () => {
            ssrRenderVNode(_push2, createVNode(resolveDynamicComponent(Component), null, null), _parent2, _scopeId);
          },
          _: 2
        });
      } else {
        return [
          (openBlock(), createBlock(Suspense, null, {
            default: withCtx(() => [
              (openBlock(), createBlock(resolveDynamicComponent(Component)))
            ]),
            _: 2
          }, 1024))
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div><!--]-->`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/app.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const App = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-f61995d8"]]);
function createRouter() {
  const routerHistory = createMemoryHistory();
  return createRouter$1({
    history: routerHistory,
    routes: [
      {
        path: "/",
        name: "index",
        component: () => import("./assets/index-338bbc4a.js")
      },
      {
        path: "/user",
        name: "user",
        component: () => import("./assets/user-23a2d532.js")
      },
      {
        path: "/market",
        name: "market",
        component: () => import("./assets/market-7e603197.js")
      }
    ]
  });
}
function createApp() {
  const app = createSSRApp(App);
  const store = createPinia();
  app.use(store);
  const router = createRouter();
  app.use(router);
  return { app, router, store };
}
function renderPreloadLinks(modules, manifest) {
  let links = "";
  const seen = /* @__PURE__ */ new Set();
  modules.forEach((id) => {
    const files = manifest[id];
    if (files) {
      files.forEach((file) => {
        if (!seen.has(file)) {
          seen.add(file);
          links += renderPreloadLink(file);
        }
      });
    }
  });
  return links;
}
function renderPreloadLink(file) {
  if (file.endsWith(".js")) {
    return `<link rel="modulepreload" crossorigin href="${file}">`;
  } else if (file.endsWith(".css")) {
    return `<link rel="stylesheet" href="${file}">`;
  } else {
    return "";
  }
}
function renderTeleports(teleports) {
  if (!teleports)
    return "";
  return Object.entries(teleports).reduce((all, [key, value]) => {
    if (key.startsWith("#el-popper-container-")) {
      return `${all}<div id="${key.slice(1)}">${value}</div>`;
    }
    return all;
  }, teleports.body || "");
}
async function render(url, manifest) {
  const { app, router, store } = createApp();
  app.provide(ID_INJECTION_KEY, {
    prefix: 1024,
    current: 0
  });
  try {
    await router.push(url);
    await router.isReady();
    const ctx = {};
    const html = await renderToString(app, ctx);
    const preloadLinks = renderPreloadLinks(ctx.modules, manifest);
    const teleports = renderTeleports(ctx.teleports);
    const state = JSON.stringify(store.state.value);
    return [html, state, preloadLinks, teleports];
  } catch (error) {
    console.log(error);
  }
}
export {
  _export_sfc as _,
  render
};
