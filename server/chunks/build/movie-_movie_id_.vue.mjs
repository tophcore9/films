import { _ as __nuxt_component_0, a as __nuxt_component_1, u as useFavoritesStore } from './favoritesStore.mjs';
import { _ as __nuxt_component_1$1 } from './GenericCardList.vue.mjs';
import { defineComponent, mergeProps, withCtx, createTextVNode, toDisplayString, useSSRContext } from 'vue';
import { u as useMoviesStore } from './moviesStore.mjs';
import { u as usePeopleStore } from './peopleStore.mjs';
import { u as useRoute, a as useRuntimeConfig, _ as _export_sfc } from './server.mjs';
import { ssrRenderAttrs, ssrRenderStyle, ssrRenderAttr, ssrInterpolate, ssrRenderComponent, ssrRenderList } from 'vue/server-renderer';
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
  name: "movie-[movie_id]",
  components: {
    GenericCardList: __nuxt_component_1$1,
    Button: __nuxt_component_1,
    Icon: __nuxt_component_0
  },
  data() {
    return {
      moviesStore: useMoviesStore(),
      peopleStore: usePeopleStore(),
      favoritesStore: useFavoritesStore(),
      movie: {},
      moviePeople: {},
      movieKeywords: [],
      isInFavorites: false,
      movieReleaseDate: /* @__PURE__ */ new Date(),
      movieLanguage: "",
      userScore: ""
    };
  },
  methods: {
    getImageUrl(path, resolution = "original") {
      const config = useRuntimeConfig();
      return `${config.public.imagesUrl}${resolution}/${path}`;
    },
    handleFavoriteToggling() {
      this.favoritesStore.toggleMovieInFavorites(this.movie);
      this.isInFavorites = !this.isInFavorites;
    },
    findPersonByJob(job) {
      const foundPerson = this.moviePeople.crew.find((person) => person.job === job);
      if (foundPerson) {
        return foundPerson;
      }
      return void 0;
    },
    formatRuntime(minutes) {
      const hours = Math.floor(minutes / 60);
      const mins = minutes % 60;
      return `${hours}h ${mins}m`;
    }
  },
  async mounted() {
    const route = useRoute();
    const movieId = Number(route.params.movie_id);
    this.movie = await this.moviesStore.getMovieDetails(movieId);
    this.moviePeople = await this.peopleStore.getMoviePeople(movieId);
    this.movieKeywords = await this.moviesStore.getMovieKeywords(movieId);
    this.isInFavorites = this.favoritesStore.isMovieInFavorites(movieId);
    this.movieReleaseDate = new Date(this.movie.release_date);
    this.movieLanguage = await this.moviesStore.getLanguageNameByISO(this.movie.original_language);
    this.userScore = this.movie.vote_average.toFixed(1);
  }
});

function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  var _a, _b, _c, _d;
  const _component_Icon = __nuxt_component_0;
  const _component_GenericCardList = __nuxt_component_1$1;
  const _component_Button = __nuxt_component_1;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "_wrapper" }, _attrs))} data-v-534dd200><div class="movie-container" data-v-534dd200><div class="movie-banner" data-v-534dd200><div class="movie-banner__image" style="${ssrRenderStyle({ backgroundImage: `url(${_ctx.getImageUrl(_ctx.movie.backdrop_path)}` })}" data-v-534dd200></div><img class="movie-banner__poster" width="275"${ssrRenderAttr("src", _ctx.getImageUrl(_ctx.movie.poster_path, "w300"))} alt="NO" data-v-534dd200><div class="banner-content" data-v-534dd200><h1 class="_title-1" data-v-534dd200>${ssrInterpolate(_ctx.movie.title)} <span class="movie-year" data-v-534dd200>(${ssrInterpolate(_ctx.movieReleaseDate.getFullYear())})</span></h1><div class="movie-keys" data-v-534dd200><div class="movie-key" data-v-534dd200>`);
  _push(ssrRenderComponent(_component_Icon, {
    height: "1rem",
    width: "1rem",
    url: "../icons/film-publishing-date.svg"
  }, null, _parent));
  if (_ctx.movie.origin_country !== void 0) {
    _push(`<div data-v-534dd200>${ssrInterpolate(_ctx.movie.release_date)} (${ssrInterpolate(_ctx.movie.origin_country[0])}) </div>`);
  } else {
    _push(`<!---->`);
  }
  _push(`</div><div class="separator" data-v-534dd200></div><div class="movie-key" data-v-534dd200>`);
  _push(ssrRenderComponent(_component_Icon, {
    height: "1rem",
    width: "1rem",
    url: "../icons/film-timeline.svg"
  }, null, _parent));
  _push(`<div data-v-534dd200>${ssrInterpolate(_ctx.formatRuntime(_ctx.movie.runtime))}</div></div><div class="separator" data-v-534dd200></div><div class="movie-key" data-v-534dd200>`);
  _push(ssrRenderComponent(_component_Icon, {
    height: "1rem",
    width: "1rem",
    url: "../icons/film-genres.svg"
  }, null, _parent));
  _push(`<!--[-->`);
  ssrRenderList(_ctx.movie.genres, (genre) => {
    _push(`<div data-v-534dd200>${ssrInterpolate(genre.name)}</div>`);
  });
  _push(`<!--]--></div></div><div class="movie-quote" data-v-534dd200>${ssrInterpolate(_ctx.movie.tagline)}</div><div data-v-534dd200><h3 class="_title-3" data-v-534dd200>Overview</h3><div class="movie-overview" data-v-534dd200>${ssrInterpolate(_ctx.movie.overview)}</div></div><div class="movie-statistics" data-v-534dd200>`);
  if (_ctx.moviePeople.crew !== void 0) {
    _push(`<div class="clue-person__block" data-v-534dd200><div class="_title-3" data-v-534dd200>${ssrInterpolate((_a = _ctx.findPersonByJob("Director")) == null ? void 0 : _a.name)}</div><div class="clue-person__job" data-v-534dd200>${ssrInterpolate((_b = _ctx.findPersonByJob("Director")) == null ? void 0 : _b.job)}</div></div>`);
  } else {
    _push(`<!---->`);
  }
  _push(`<div class="separator" data-v-534dd200></div>`);
  if (_ctx.moviePeople.crew !== void 0) {
    _push(`<div class="clue-person__block" data-v-534dd200><div class="_title-3" data-v-534dd200>${ssrInterpolate((_c = _ctx.findPersonByJob("Producer")) == null ? void 0 : _c.name)}</div><div class="clue-person__job" data-v-534dd200>${ssrInterpolate((_d = _ctx.findPersonByJob("Producer")) == null ? void 0 : _d.job)}</div></div>`);
  } else {
    _push(`<!---->`);
  }
  _push(`<div class="separator" data-v-534dd200></div><div class="user-score" data-v-534dd200><div class="user-score-circle" data-v-534dd200><div class="user-score-value" data-v-534dd200>${ssrInterpolate(_ctx.userScore)}</div></div><p data-v-534dd200>User Score</p></div></div></div></div><div class="movie-info" data-v-534dd200><div class="movie-people__block" data-v-534dd200><h2 class="_title-2" data-v-534dd200>Top Billed Cast</h2><div data-v-534dd200>`);
  _push(ssrRenderComponent(_component_GenericCardList, {
    "cast-members": _ctx.moviePeople.cast
  }, null, _parent));
  _push(`</div><h2 class="_title-2" data-v-534dd200>Crew</h2><div data-v-534dd200>`);
  _push(ssrRenderComponent(_component_GenericCardList, {
    "crew-members": _ctx.moviePeople.crew
  }, null, _parent));
  _push(`</div></div><div class="movie-details" data-v-534dd200><div class="details-block" data-v-534dd200><h3 class="_title-3" data-v-534dd200>Status</h3><p data-v-534dd200>${ssrInterpolate(_ctx.movie.status)}</p></div><div class="details-block" data-v-534dd200><h3 class="_title-3" data-v-534dd200>Original Language</h3><p data-v-534dd200>${ssrInterpolate(_ctx.movieLanguage)}</p></div><div class="details-block" data-v-534dd200><h3 class="_title-3" data-v-534dd200>Budget</h3><p data-v-534dd200>$${ssrInterpolate(_ctx.movie.budget)}</p></div><div class="details-block" data-v-534dd200><h3 class="_title-3" data-v-534dd200>Revenue</h3><p data-v-534dd200>$${ssrInterpolate(_ctx.movie.revenue)}</p></div><div class="details-block" data-v-534dd200><h3 class="_title-3" data-v-534dd200>Keywords</h3><div class="keywords" data-v-534dd200><!--[-->`);
  ssrRenderList(_ctx.movieKeywords, (keyword) => {
    _push(`<div class="keyword" data-v-534dd200>${ssrInterpolate(keyword.name)}</div>`);
  });
  _push(`<!--]--></div></div>`);
  _push(ssrRenderComponent(_component_Button, { onClick: _ctx.handleFavoriteToggling }, {
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
  _push(`</div></div></div></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/movies/movie-[movie_id].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const movie__movie_id_ = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-534dd200"]]);

export { movie__movie_id_ as default };
//# sourceMappingURL=movie-_movie_id_.vue.mjs.map
