import { _ as __nuxt_component_0$1, a as __nuxt_component_1$2 } from './favoritesStore.mjs';
import { defineComponent, useSSRContext, mergeProps, withCtx, createVNode, withDirectives, vModelText, createBlock, openBlock, Fragment, renderList, toDisplayString, createTextVNode } from 'vue';
import { ssrRenderAttrs, ssrInterpolate, ssrRenderComponent, ssrRenderSlot, ssrRenderAttr, ssrRenderList } from 'vue/server-renderer';
import { _ as _export_sfc } from './server.mjs';
import { _ as __nuxt_component_1$1 } from './GenericCardList.vue.mjs';
import { u as useMoviesStore } from './moviesStore.mjs';
import { u as usePeopleStore } from './peopleStore.mjs';
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

const _sfc_main$2 = defineComponent({
  name: "Select",
  components: {
    Icon: __nuxt_component_0$1
  },
  data() {
    return {
      isExpanded: this.isOpened
    };
  },
  props: {
    title: {
      type: String,
      required: true
    },
    isOpened: {
      type: Boolean,
      required: false,
      default: false
    }
  },
  methods: {
    toggleState() {
      this.isExpanded = !this.isExpanded;
    }
  }
});

function _sfc_ssrRender$2(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Icon = __nuxt_component_0$1;
  _push(`<div${ssrRenderAttrs(_attrs)} data-v-33f9a445><div class="drop-title" data-v-33f9a445><h2 class="_title-3" data-v-33f9a445>${ssrInterpolate(_ctx.title)}</h2>`);
  _push(ssrRenderComponent(_component_Icon, {
    class: ["arrow-icon", _ctx.isExpanded ? "arrow-icon-rotated" : ""],
    url: "../icons/dropdown-arrow.svg",
    width: "16px",
    height: "16px"
  }, null, _parent));
  _push(`</div>`);
  if (_ctx.isExpanded) {
    _push(`<div class="drop-content" data-v-33f9a445>`);
    ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
    _push(`</div>`);
  } else {
    _push(`<!---->`);
  }
  _push(`</div>`);
}
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/DropDown.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["ssrRender", _sfc_ssrRender$2], ["__scopeId", "data-v-33f9a445"]]);

const _sfc_main$1 = {
  props: {
    options: {
      type: Array,
      required: true
    },
    placeholder: {
      type: String,
      default: "Popularity Descending"
    },
    modelValue: {
      type: String,
      required: true
    },
    searchable: {
      type: Boolean,
      default: false
    }
  },
  emits: ["update:modelValue"],
  data() {
    return {
      isOpen: false,
      selectedOption: "",
      searchQuery: ""
    };
  },
  methods: {
    toggleDropdown() {
      this.isOpen = !this.isOpen;
    },
    selectOption(option) {
      this.selectedOption = option.label;
      this.$emit("update:modelValue", option.value);
      this.isOpen = false;
    }
  }
};

function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_Icon = __nuxt_component_0$1;
  _push(`<div${ssrRenderAttrs(mergeProps({
    class: ["custom-select", { "is-open": $data.isOpen }]
  }, _attrs))} data-v-c613fee5><div class="selected-option _input" data-v-c613fee5>${ssrInterpolate($data.selectedOption || $props.placeholder)} `);
  _push(ssrRenderComponent(_component_Icon, {
    class: ["arrow-icon", $data.isOpen ? "arrow-icon-rotated" : ""],
    height: "16px",
    width: "16px",
    url: "../icons/select-arrow.svg"
  }, null, _parent));
  _push(`</div>`);
  if ($data.isOpen) {
    _push(`<div class="dropdown" data-v-c613fee5>`);
    if ($props.searchable) {
      _push(`<input${ssrRenderAttr("value", $data.searchQuery)} type="text" placeholder="Search..." class="search-input" data-v-c613fee5>`);
    } else {
      _push(`<!---->`);
    }
    _push(`<!--[-->`);
    ssrRenderList($props.options, (option) => {
      _push(`<div class="dropdown-item" data-v-c613fee5>${ssrInterpolate(option.label)}</div>`);
    });
    _push(`<!--]--></div>`);
  } else {
    _push(`<!---->`);
  }
  _push(`</div>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Select.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender$1], ["__scopeId", "data-v-c613fee5"]]);

const _sfc_main = defineComponent({
  name: "index",
  components: {
    Button: __nuxt_component_1$2,
    GenericCardList: __nuxt_component_1$1,
    DropDown: __nuxt_component_0,
    Select: __nuxt_component_1
  },
  data() {
    return {
      moviesStore: useMoviesStore(),
      peopleStore: usePeopleStore(),
      selectedSort: "popularity.desc",
      selectedGenres: [],
      selectedKeyword: "",
      genres: [],
      sorts: [
        { label: "Title Ascending", value: "title.asc" },
        { label: "Title Descending", value: "title.desc" },
        { label: "Popularity Ascending", value: "popularity.asc" },
        { label: "Popularity Descending", value: "popularity.desc" },
        { label: "Revenue Ascending", value: "revenue.asc" },
        { label: "Revenue Descending", value: "revenue.desc" },
        { label: "Rating Ascending", value: "vote_average.asc" },
        { label: "Rating Descending", value: "vote_average.desc" }
      ]
    };
  },
  methods: {
    toggleGenre(genreId) {
      const genre = this.genres.find((genre2) => genre2.id === genreId);
      if (genre) {
        if (this.selectedGenres.find((item) => item === genreId)) {
          const index = this.selectedGenres.findIndex((genre2) => Number(genre2) === genreId);
          if (index >= 0) {
            this.selectedGenres.splice(index, 1);
          }
        } else {
          this.selectedGenres.push(genre.id);
        }
      }
    },
    handleFilters() {
      this.moviesStore.genresQuery = this.selectedGenres.toString();
      this.moviesStore.setKeywordsByQuery(this.selectedKeyword);
      this.moviesStore.sortQuery = this.selectedSort;
      this.moviesStore.fetchMovies();
    }
  },
  async mounted() {
    await this.moviesStore.fetchMovies();
    await this.peopleStore.fetchPeople();
    this.genres = await this.moviesStore.getGenres();
  },
  created() {
    this.moviesStore.sortQuery = "popularity.desc";
    this.moviesStore.genresQuery = "";
    this.moviesStore.genresQuery = "";
  }
});

function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_DropDown = __nuxt_component_0;
  const _component_Select = __nuxt_component_1;
  const _component_Button = __nuxt_component_1$2;
  const _component_GenericCardList = __nuxt_component_1$1;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "_wrapper" }, _attrs))} data-v-3f251c6e><div class="movies-container" data-v-3f251c6e><div class="movies-options" data-v-3f251c6e>`);
  _push(ssrRenderComponent(_component_DropDown, {
    "is-opened": true,
    title: "Sort"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(ssrRenderComponent(_component_Select, {
          options: _ctx.sorts,
          modelValue: _ctx.selectedSort,
          "onUpdate:modelValue": ($event) => _ctx.selectedSort = $event
        }, null, _parent2, _scopeId));
      } else {
        return [
          createVNode(_component_Select, {
            options: _ctx.sorts,
            modelValue: _ctx.selectedSort,
            "onUpdate:modelValue": ($event) => _ctx.selectedSort = $event
          }, null, 8, ["options", "modelValue", "onUpdate:modelValue"])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_DropDown, {
    "is-opened": true,
    title: "Filters"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<div class="filters" data-v-3f251c6e${_scopeId}><div data-v-3f251c6e${_scopeId}>Keywords</div><input${ssrRenderAttr("value", _ctx.selectedKeyword)} class="_input" type="text" placeholder="Filter by keywords..." data-v-3f251c6e${_scopeId}><div class="horizontal-separator" data-v-3f251c6e${_scopeId}></div><div data-v-3f251c6e${_scopeId}>Genres</div><div class="genres" data-v-3f251c6e${_scopeId}><!--[-->`);
        ssrRenderList(_ctx.genres, (genre) => {
          _push2(`<div class="genre" data-v-3f251c6e${_scopeId}><label class="genre-label"${ssrRenderAttr("for", genre.name)} data-v-3f251c6e${_scopeId}>${ssrInterpolate(genre.name)}</label><input class="genre-input" type="checkbox"${ssrRenderAttr("id", genre.name)} data-v-3f251c6e${_scopeId}></div>`);
        });
        _push2(`<!--]--></div></div>`);
      } else {
        return [
          createVNode("div", { class: "filters" }, [
            createVNode("div", null, "Keywords"),
            withDirectives(createVNode("input", {
              "onUpdate:modelValue": ($event) => _ctx.selectedKeyword = $event,
              onChange: ($event) => _ctx.moviesStore.setKeywordsByQuery(_ctx.selectedKeyword),
              class: "_input",
              type: "text",
              placeholder: "Filter by keywords..."
            }, null, 40, ["onUpdate:modelValue", "onChange"]), [
              [vModelText, _ctx.selectedKeyword]
            ]),
            createVNode("div", { class: "horizontal-separator" }),
            createVNode("div", null, "Genres"),
            createVNode("div", { class: "genres" }, [
              (openBlock(true), createBlock(Fragment, null, renderList(_ctx.genres, (genre) => {
                return openBlock(), createBlock("div", { class: "genre" }, [
                  createVNode("label", {
                    class: "genre-label",
                    for: genre.name
                  }, toDisplayString(genre.name), 9, ["for"]),
                  createVNode("input", {
                    onChange: ($event) => _ctx.toggleGenre(genre.id),
                    class: "genre-input",
                    type: "checkbox",
                    id: genre.name
                  }, null, 40, ["onChange", "id"])
                ]);
              }), 256))
            ])
          ])
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(ssrRenderComponent(_component_Button, {
    onClick: _ctx.handleFilters,
    width: "100%"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Search`);
      } else {
        return [
          createTextVNode("Search")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</div><div class="movies-content" data-v-3f251c6e>`);
  _push(ssrRenderComponent(_component_GenericCardList, {
    movies: _ctx.moviesStore.movies,
    "next-page-handler": _ctx.moviesStore.fetchNextPage
  }, null, _parent));
  _push(`</div></div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/movies/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const index = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-3f251c6e"]]);

export { index as default };
//# sourceMappingURL=index.vue.mjs.map
