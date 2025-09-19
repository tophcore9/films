import { _ as __nuxt_component_1 } from './GenericCardList.vue.mjs';
import { defineComponent, mergeProps, useSSRContext } from 'vue';
import { u as useFavoritesStore } from './favoritesStore.mjs';
import { ssrRenderAttrs, ssrRenderComponent } from 'vue/server-renderer';
import { _ as _export_sfc } from './server.mjs';
import 'pinia';
import '../_/nitro.mjs';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'node:fs';
import 'node:path';
import 'node:crypto';
import 'node:url';
import 'vue-router';

const _sfc_main = defineComponent({
  name: "favorites",
  components: {
    GenericCardList: __nuxt_component_1
  },
  data() {
    return {
      favoritesStore: useFavoritesStore()
    };
  }
});

function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_GenericCardList = __nuxt_component_1;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "_wrapper" }, _attrs))} data-v-894991e1><div class="favorite-content" data-v-894991e1><h2 class="_title-2" data-v-894991e1>Favorite Movies</h2>`);
  _push(ssrRenderComponent(_component_GenericCardList, {
    movies: _ctx.favoritesStore.favoriteMovies
  }, null, _parent));
  _push(`<h2 class="_title-2" data-v-894991e1>Favorite People</h2>`);
  _push(ssrRenderComponent(_component_GenericCardList, {
    people: _ctx.favoritesStore.favoritePeople
  }, null, _parent));
  _push(`</div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/favorites.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const favorites = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-894991e1"]]);

export { favorites as default };
//# sourceMappingURL=favorites.vue.mjs.map
