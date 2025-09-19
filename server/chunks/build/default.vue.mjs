import { _ as __nuxt_component_0$2 } from './nuxt-link.mjs';
import { _ as __nuxt_component_0$1, a as __nuxt_component_1$1, u as useFavoritesStore } from './favoritesStore.mjs';
import { defineComponent, mergeProps, withCtx, createVNode, createTextVNode, useSSRContext } from 'vue';
import { u as useRoute, _ as _export_sfc } from './server.mjs';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderSlot } from 'vue/server-renderer';
import { u as useMoviesStore } from './moviesStore.mjs';
import '../_/nitro.mjs';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'node:fs';
import 'node:path';
import 'node:crypto';
import 'node:url';
import 'pinia';
import 'vue-router';

const _sfc_main$2 = defineComponent({
  name: "Nav",
  components: {
    Button: __nuxt_component_1$1,
    Icon: __nuxt_component_0$1
  },
  data() {
    return {
      isScrolled: false
    };
  },
  methods: {
    handleScroll() {
      this.isScrolled = (void 0).scrollY > 0;
    },
    handleCurrentPageClass(pageName) {
      var _a;
      if ((_a = useRoute().name) == null ? void 0 : _a.toString().includes(pageName)) {
        return "nav-link nav-link-active";
      }
      return "nav-link";
    }
  },
  computed: {
    handleFavoritesIconUrl() {
      var _a;
      const isPageOpened = (_a = useRoute().name) == null ? void 0 : _a.toString().includes("favorites");
      if (isPageOpened) {
        return "../icons/nav-favorites-active.svg";
      }
      if (this.isScrolled) {
        return "../icons/nav-favorites-white.svg";
      } else {
        return "../icons/nav-favorites.svg";
      }
    }
  },
  mounted() {
    (void 0).addEventListener("scroll", this.handleScroll);
  },
  beforeUnmount() {
    (void 0).removeEventListener("scroll", this.handleScroll);
  }
});

function _sfc_ssrRender$2(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_NuxtLink = __nuxt_component_0$2;
  const _component_Icon = __nuxt_component_0$1;
  const _component_Button = __nuxt_component_1$1;
  _push(`<div${ssrRenderAttrs(mergeProps({
    class: ["nav", _ctx.isScrolled ? "nav-scrolled" : ""]
  }, _attrs))} data-v-c61c0006><div class="_wrapper" data-v-c61c0006><div class="nav-content" data-v-c61c0006><div class="nav-left" data-v-c61c0006>`);
  _push(ssrRenderComponent(_component_NuxtLink, { to: "/movies" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_Icon, {
          url: _ctx.isScrolled ? "../icons/logo-white.png" : "../icons/logo-dark.png",
          width: "156px"
        }, null, _parent2, _scopeId));
      } else {
        return [
          createVNode(_component_Icon, {
            url: _ctx.isScrolled ? "../icons/logo-white.png" : "../icons/logo-dark.png",
            width: "156px"
          }, null, 8, ["url"])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<div class="nav-left-links" data-v-c61c0006>`);
  _push(ssrRenderComponent(_component_NuxtLink, {
    class: _ctx.handleCurrentPageClass("movies"),
    to: "/movies"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Movies`);
      } else {
        return [
          createTextVNode("Movies")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_NuxtLink, {
    class: _ctx.handleCurrentPageClass("tv_shows"),
    to: "/tv_shows"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`TV Shows`);
      } else {
        return [
          createTextVNode("TV Shows")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_NuxtLink, {
    class: _ctx.handleCurrentPageClass("people"),
    to: "/people"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`People`);
      } else {
        return [
          createTextVNode("People")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div></div><div class="nav-right" data-v-c61c0006>`);
  _push(ssrRenderComponent(_component_NuxtLink, { to: "/favorites" }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_Icon, {
          class: "nav-favorites",
          url: _ctx.handleFavoritesIconUrl
        }, null, _parent2, _scopeId));
      } else {
        return [
          createVNode(_component_Icon, {
            class: "nav-favorites",
            url: _ctx.handleFavoritesIconUrl
          }, null, 8, ["url"])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_Button, null, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Login`);
      } else {
        return [
          createTextVNode("Login")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div></div></div></div>`);
}
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Nav.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["ssrRender", _sfc_ssrRender$2], ["__scopeId", "data-v-c61c0006"]]);

const _sfc_main$1 = defineComponent({
  name: "Footer",
  components: {
    Button: __nuxt_component_1$1,
    Icon: __nuxt_component_0$1
  }
});

function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Icon = __nuxt_component_0$1;
  const _component_Button = __nuxt_component_1$1;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "footer" }, _attrs))} data-v-944d3909><div class="_wrapper" data-v-944d3909><div class="footer-content" data-v-944d3909><div class="footer-left" data-v-944d3909>`);
  _push(ssrRenderComponent(_component_Icon, {
    url: "../icons/logo-white.png",
    width: "156px"
  }, null, _parent));
  _push(ssrRenderComponent(_component_Button, null, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Join the community`);
      } else {
        return [
          createTextVNode("Join the community")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div><div class="footer-lists" data-v-944d3909><ul class="footer-list" data-v-944d3909><li class="footer-list__title" data-v-944d3909>The basics</li><li class="footer-list__item" data-v-944d3909>About TMDB</li><li class="footer-list__item" data-v-944d3909>Contact Us</li><li class="footer-list__item" data-v-944d3909>Support Forums</li><li class="footer-list__item" data-v-944d3909>API</li><li class="footer-list__item" data-v-944d3909>System Status</li></ul><ul class="footer-list" data-v-944d3909><li class="footer-list__title" data-v-944d3909>Get involved</li><li class="footer-list__item" data-v-944d3909>Contribution Bible</li><li class="footer-list__item" data-v-944d3909>Add New Movie</li><li class="footer-list__item" data-v-944d3909>Add New TV Show</li></ul><ul class="footer-list" data-v-944d3909><li class="footer-list__title" data-v-944d3909>Community</li><li class="footer-list__item" data-v-944d3909>Guideline</li><li class="footer-list__item" data-v-944d3909>Discussions</li><li class="footer-list__item" data-v-944d3909>Leaderboard</li></ul><ul class="footer-list" data-v-944d3909><li class="footer-list__title" data-v-944d3909>Legal</li><li class="footer-list__item" data-v-944d3909>Terms of Use</li><li class="footer-list__item" data-v-944d3909>API Terms of Use</li><li class="footer-list__item" data-v-944d3909>Privacy Policy</li><li class="footer-list__item" data-v-944d3909>DMCA Policy</li></ul></div></div></div></div>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Footer.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender$1], ["__scopeId", "data-v-944d3909"]]);

const _sfc_main = defineComponent({
  name: "default",
  components: {
    Nav: __nuxt_component_0,
    Footer: __nuxt_component_1
  },
  data() {
    return {
      favoritesStore: useFavoritesStore(),
      moviesStore: useMoviesStore()
    };
  },
  mounted() {
    this.favoritesStore.loadFavoritesFromSessionStorage();
  }
});

function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Nav = __nuxt_component_0;
  const _component_Footer = __nuxt_component_1;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "_container" }, _attrs))}>`);
  _push(ssrRenderComponent(_component_Nav, null, null, _parent));
  _push(`<div class="_content">`);
  ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
  _push(`</div>`);
  _push(ssrRenderComponent(_component_Footer, null, null, _parent));
  _push(`</div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/default.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _default = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { _default as default };
//# sourceMappingURL=default.vue.mjs.map
