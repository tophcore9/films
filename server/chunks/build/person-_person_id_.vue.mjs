import { a as __nuxt_component_1, u as useFavoritesStore } from './favoritesStore.mjs';
import { _ as __nuxt_component_1$1 } from './GenericCardList.vue.mjs';
import { defineComponent, mergeProps, withCtx, createTextVNode, toDisplayString, useSSRContext } from 'vue';
import { u as usePeopleStore } from './peopleStore.mjs';
import { u as useRoute, a as useRuntimeConfig, _ as _export_sfc } from './server.mjs';
import { ssrRenderAttrs, ssrRenderAttr, ssrInterpolate, ssrRenderComponent } from 'vue/server-renderer';
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
  name: "person-[person_id]",
  components: {
    GenericCardList: __nuxt_component_1$1,
    Button: __nuxt_component_1
  },
  data() {
    return {
      peopleStore: usePeopleStore(),
      favoritesStore: useFavoritesStore(),
      isInFavorites: false,
      person: {},
      movies: {}
    };
  },
  methods: {
    getImageUrl() {
      const config = useRuntimeConfig();
      let path = "";
      if (this.person !== void 0 && this.person.profile_path !== null) path = this.person.profile_path;
      else return "../icons/no_picture.png";
      return `${config.public.imagesUrl}w500/${path}`;
    },
    handleFavoriteToggling() {
      this.favoritesStore.togglePersonInFavorites(this.person);
      this.isInFavorites = !this.isInFavorites;
    }
  },
  async mounted() {
    const route = useRoute();
    const personId = Number(route.params.person_id);
    this.person = await this.peopleStore.getPersonDetails(personId);
    this.isInFavorites = this.favoritesStore.isPersonInFavorites(personId);
    this.movies = await this.peopleStore.getMoviesByPerson(personId);
  }
});

function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Button = __nuxt_component_1;
  const _component_GenericCardList = __nuxt_component_1$1;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "_wrapper" }, _attrs))} data-v-ffd88eea><div class="container" data-v-ffd88eea><div class="header" data-v-ffd88eea><img class="image"${ssrRenderAttr("src", _ctx.getImageUrl())} alt="no" data-v-ffd88eea><div class="info" data-v-ffd88eea><div class="header-content" data-v-ffd88eea><h1 class="_title-1" data-v-ffd88eea>${ssrInterpolate(_ctx.person.name)} `);
  if (_ctx.person.original_name !== void 0) {
    _push(`<span data-v-ffd88eea>(${ssrInterpolate(_ctx.person.original_name)})</span>`);
  } else {
    _push(`<!---->`);
  }
  _push(`</h1>`);
  _push(ssrRenderComponent(_component_Button, {
    class: "favorites-button",
    onClick: _ctx.handleFavoriteToggling
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`${ssrInterpolate(_ctx.isInFavorites ? "Remove from favorites" : "Add to favorites")}`);
      } else {
        return [
          createTextVNode(toDisplayString(_ctx.isInFavorites ? "Remove from favorites" : "Add to favorites"), 1)
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div><div class="info-block" data-v-ffd88eea><p data-v-ffd88eea>${ssrInterpolate(_ctx.person.known_for_department)}</p></div><div class="info-block" data-v-ffd88eea><h3 class="_title-3" data-v-ffd88eea>Birthday</h3><p data-v-ffd88eea>${ssrInterpolate(_ctx.person.birthday)}</p></div><div class="info-block" data-v-ffd88eea><h3 class="_title-3" data-v-ffd88eea>Place of Birth</h3><p data-v-ffd88eea>${ssrInterpolate(_ctx.person.place_of_birth)}</p></div>`);
  if (_ctx.person.deathday !== null) {
    _push(`<div class="info-block" data-v-ffd88eea><h3 class="_title-3" data-v-ffd88eea>Date of Death</h3><p data-v-ffd88eea>${ssrInterpolate(_ctx.person.deathday)}</p></div>`);
  } else {
    _push(`<!---->`);
  }
  _push(`</div></div><div class="info-block" data-v-ffd88eea><h3 class="_title-3" data-v-ffd88eea>Biography</h3><p class="biography-text" data-v-ffd88eea>${ssrInterpolate(_ctx.person.biography)}</p></div><div class="films" data-v-ffd88eea><div class="films-block" data-v-ffd88eea><h3 class="_title-2" data-v-ffd88eea>Acting</h3>`);
  _push(ssrRenderComponent(_component_GenericCardList, {
    movies: _ctx.movies.cast
  }, null, _parent));
  _push(`</div><div class="films-block" data-v-ffd88eea><h3 class="_title-2" data-v-ffd88eea>Crew</h3>`);
  _push(ssrRenderComponent(_component_GenericCardList, {
    movies: _ctx.movies.crew
  }, null, _parent));
  _push(`</div></div></div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/people/person-[person_id].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const person__person_id_ = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-ffd88eea"]]);

export { person__person_id_ as default };
//# sourceMappingURL=person-_person_id_.vue.mjs.map
