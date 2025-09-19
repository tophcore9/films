import { _ as __nuxt_component_1 } from './GenericCardList.vue.mjs';
import { defineComponent, mergeProps, useSSRContext } from 'vue';
import { u as usePeopleStore } from './peopleStore.mjs';
import { ssrRenderAttrs, ssrRenderComponent } from 'vue/server-renderer';
import { _ as _export_sfc } from './server.mjs';
import './favoritesStore.mjs';
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
  name: "people",
  data() {
    return {
      peopleStore: usePeopleStore()
    };
  },
  async mounted() {
    await this.peopleStore.fetchPeople();
  }
});

function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_GenericCardList = __nuxt_component_1;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "_wrapper" }, _attrs))} data-v-88d6cfce><div class="people-content" data-v-88d6cfce>`);
  _push(ssrRenderComponent(_component_GenericCardList, {
    people: _ctx.peopleStore.people,
    "next-page-handler": _ctx.peopleStore.fetchNextPage
  }, null, _parent));
  _push(`</div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/people/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-88d6cfce"]]);

export { index as default };
//# sourceMappingURL=index.vue2.mjs.map
