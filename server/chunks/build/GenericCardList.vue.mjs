import { defineComponent, withCtx, createVNode, useSSRContext, resolveComponent } from 'vue';
import { _ as __nuxt_component_0, a as __nuxt_component_1$1, u as useFavoritesStore } from './favoritesStore.mjs';
import { a as useRuntimeConfig, _ as _export_sfc } from './server.mjs';
import { ssrRenderAttr, ssrInterpolate, ssrRenderComponent, ssrRenderList } from 'vue/server-renderer';

const _sfc_main$1 = defineComponent({
  name: "GenericCard",
  components: {
    Button: __nuxt_component_1$1,
    Icon: __nuxt_component_0
  },
  data() {
    return {
      imageWidth: 200,
      favoritesStore: useFavoritesStore(),
      isFavorite: false
    };
  },
  props: {
    movie: {
      type: Object,
      default: void 0
    },
    person: {
      type: Object,
      default: void 0
    },
    castMember: {
      type: Object,
      default: void 0
    },
    crewMember: {
      type: Object,
      default: void 0
    }
  },
  methods: {
    getImageUrl() {
      const config = useRuntimeConfig();
      let path = "";
      if (this.person !== void 0 && this.person.profile_path !== null) path = this.person.profile_path;
      else if (this.movie !== void 0 && this.movie.poster_path !== null) path = this.movie.poster_path;
      else if (this.castMember !== void 0 && this.castMember.profile_path !== null) path = this.castMember.profile_path;
      else if (this.crewMember !== void 0 && this.crewMember.profile_path !== null) path = this.crewMember.profile_path;
      else return "../icons/no_picture.png";
      return `${config.public.imagesUrl}w${this.imageWidth}/${path}`;
    },
    formatDate(apiDate) {
      if (apiDate === "") return "No data";
      const date = new Date(apiDate);
      return new Intl.DateTimeFormat("en-US", {
        month: "short",
        day: "numeric",
        year: "numeric"
      }).format(date);
    }
  }
});

function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Button = __nuxt_component_1$1;
  const _component_Icon = __nuxt_component_0;
  _push(`<!--[-->`);
  if (_ctx.movie !== void 0 && _ctx.movie.poster_path !== null) {
    _push(`<div class="card" data-v-400b6c3b><img class="card-image"${ssrRenderAttr("src", _ctx.getImageUrl())} alt="no" data-v-400b6c3b><div class="card-body" data-v-400b6c3b><h4 class="_title-4" data-v-400b6c3b>${ssrInterpolate(_ctx.movie.title)}</h4><p class="card-text" data-v-400b6c3b>${ssrInterpolate(_ctx.formatDate(_ctx.movie.release_date))}</p>`);
    _push(ssrRenderComponent(_component_Button, {
      onClick: ($event) => _ctx.favoritesStore.toggleMovieInFavorites(_ctx.movie),
      class: "is-favorite",
      rounded: "",
      width: "3rem",
      height: "3rem"
    }, {
      default: withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(ssrRenderComponent(_component_Icon, {
            width: "1.5rem",
            height: "1.5rem",
            url: _ctx.favoritesStore.isMovieInFavorites(_ctx.movie.id) ? "/icons/card-favorite-active.svg" : "/icons/card-favorite.svg"
          }, null, _parent2, _scopeId));
        } else {
          return [
            createVNode(_component_Icon, {
              width: "1.5rem",
              height: "1.5rem",
              url: _ctx.favoritesStore.isMovieInFavorites(_ctx.movie.id) ? "/icons/card-favorite-active.svg" : "/icons/card-favorite.svg"
            }, null, 8, ["url"])
          ];
        }
      }),
      _: 1
    }, _parent));
    _push(`</div></div>`);
  } else {
    _push(`<!---->`);
  }
  if (_ctx.person !== void 0) {
    _push(`<div class="card" data-v-400b6c3b><img class="card-image"${ssrRenderAttr("src", _ctx.getImageUrl())} alt="no" data-v-400b6c3b><div class="card-body" data-v-400b6c3b><h4 class="_title-4" data-v-400b6c3b>${ssrInterpolate(_ctx.person.name)}</h4><p class="card-text" data-v-400b6c3b>${ssrInterpolate(_ctx.person.known_for_department)}</p></div>`);
    _push(ssrRenderComponent(_component_Button, {
      onClick: ($event) => _ctx.favoritesStore.togglePersonInFavorites(_ctx.person),
      class: "is-favorite",
      rounded: "",
      width: "3rem",
      height: "3rem"
    }, {
      default: withCtx((_, _push2, _parent2, _scopeId) => {
        if (_push2) {
          _push2(ssrRenderComponent(_component_Icon, {
            width: "1.5rem",
            height: "1.5rem",
            url: _ctx.favoritesStore.isPersonInFavorites(_ctx.person.id) ? "/icons/card-favorite-active.svg" : "/icons/card-favorite.svg"
          }, null, _parent2, _scopeId));
        } else {
          return [
            createVNode(_component_Icon, {
              width: "1.5rem",
              height: "1.5rem",
              url: _ctx.favoritesStore.isPersonInFavorites(_ctx.person.id) ? "/icons/card-favorite-active.svg" : "/icons/card-favorite.svg"
            }, null, 8, ["url"])
          ];
        }
      }),
      _: 1
    }, _parent));
    _push(`</div>`);
  } else {
    _push(`<!---->`);
  }
  if (_ctx.castMember !== void 0 && _ctx.castMember.profile_path !== null) {
    _push(`<div class="card" data-v-400b6c3b><img class="card-image"${ssrRenderAttr("src", _ctx.getImageUrl())} alt="no" data-v-400b6c3b><div class="card-body" data-v-400b6c3b><h4 class="_title-4" data-v-400b6c3b>${ssrInterpolate(_ctx.castMember.name)}</h4><p class="card-text" data-v-400b6c3b>${ssrInterpolate(_ctx.castMember.character)}</p></div></div>`);
  } else {
    _push(`<!---->`);
  }
  if (_ctx.crewMember !== void 0 && _ctx.crewMember.profile_path !== null) {
    _push(`<div class="card" data-v-400b6c3b><img class="card-image"${ssrRenderAttr("src", _ctx.getImageUrl())} alt="no" data-v-400b6c3b><div class="card-body" data-v-400b6c3b><h4 class="_title-4" data-v-400b6c3b>${ssrInterpolate(_ctx.crewMember.name)}</h4><p class="card-text" data-v-400b6c3b>${ssrInterpolate(_ctx.crewMember.job)}</p></div></div>`);
  } else {
    _push(`<!---->`);
  }
  _push(`<!--]-->`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/GenericCard.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const GenericCard = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender$1], ["__scopeId", "data-v-400b6c3b"]]);

const _sfc_main = defineComponent({
  name: "CardList",
  components: {
    Card: GenericCard
  },
  props: {
    movies: {
      type: Array,
      default: []
    },
    people: {
      type: Array,
      default: []
    },
    castMembers: {
      type: Array,
      default: []
    },
    crewMembers: {
      type: Array,
      default: []
    },
    nextPageHandler: {
      type: Function
    }
  },
  mounted() {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        if (this.nextPageHandler) {
          this.nextPageHandler();
        }
      }
    });
    const endOfList = (void 0).querySelector("#end-of-list");
    if (endOfList) {
      observer.observe(endOfList);
    }
  }
});

function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Card = resolveComponent("Card");
  _push(`<!--[--><div class="card-list" data-v-bcb6ad47>`);
  if (_ctx.movies.length > 0) {
    _push(`<!--[-->`);
    ssrRenderList(_ctx.movies, (movie) => {
      _push(ssrRenderComponent(_component_Card, {
        movie,
        key: movie.id
      }, null, _parent));
    });
    _push(`<!--]-->`);
  } else if (_ctx.people.length > 0) {
    _push(`<!--[-->`);
    ssrRenderList(_ctx.people, (person) => {
      _push(ssrRenderComponent(_component_Card, {
        person,
        key: person.id
      }, null, _parent));
    });
    _push(`<!--]-->`);
  } else if (_ctx.castMembers.length > 0) {
    _push(`<!--[-->`);
    ssrRenderList(_ctx.castMembers, (castMember) => {
      _push(ssrRenderComponent(_component_Card, {
        "cast-member": castMember,
        key: castMember.id
      }, null, _parent));
    });
    _push(`<!--]-->`);
  } else if (_ctx.crewMembers.length > 0) {
    _push(`<!--[-->`);
    ssrRenderList(_ctx.crewMembers, (crewMember) => {
      _push(ssrRenderComponent(_component_Card, {
        "crew-member": crewMember,
        key: crewMember.id
      }, null, _parent));
    });
    _push(`<!--]-->`);
  } else {
    _push(`<!---->`);
  }
  _push(`</div><div id="end-of-list" data-v-bcb6ad47></div><!--]-->`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/GenericCardList.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-bcb6ad47"]]);

export { __nuxt_component_1 as _ };
//# sourceMappingURL=GenericCardList.vue.mjs.map
