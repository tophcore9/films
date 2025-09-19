import { defineComponent, mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderSlot } from 'vue/server-renderer';
import { _ as _export_sfc } from './server.mjs';
import { defineStore } from 'pinia';

const _sfc_main$1 = defineComponent({
  name: "Button",
  props: {
    backgroundColor: {
      type: String,
      default: "var(--primary-color)"
    },
    width: {
      type: String,
      default: "auto"
    },
    height: {
      type: String,
      default: "3rem"
    },
    rounded: {
      type: Boolean,
      default: false
    }
  }
});

function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<button${ssrRenderAttrs(mergeProps({
    class: ["button", _ctx.rounded ? "rounded" : ""],
    style: {
      backgroundColor: _ctx.backgroundColor,
      width: _ctx.width,
      height: _ctx.height
    }
  }, _attrs))} data-v-7cf54641>`);
  ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
  _push(`</button>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Button.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender$1], ["__scopeId", "data-v-7cf54641"]]);

const _sfc_main = defineComponent({
  name: "Icon",
  props: {
    url: {
      type: String,
      required: true
    },
    width: {
      type: String,
      default: "2rem"
    },
    height: {
      type: String,
      default: "2rem"
    }
  }
});

function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<div${ssrRenderAttrs(mergeProps({
    class: "icon",
    style: {
      backgroundImage: `url(${_ctx.url})`,
      minWidth: _ctx.width,
      minHeight: _ctx.height
    }
  }, _attrs))} data-v-5d1ae503></div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Icon.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const __nuxt_component_0 = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender], ["__scopeId", "data-v-5d1ae503"]]);

var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j;
const __vite_import_meta_env__ = { "BASE_URL": "/", "DEV": false, "MODE": "production", "PROD": true, "SSR": true };
const r = /* @__PURE__ */ Object.create(null), i = (e) => {
  var _a2, _b2;
  return ((_a2 = globalThis.process) == null ? void 0 : _a2.env) || __vite_import_meta_env__ || ((_b2 = globalThis.Deno) == null ? void 0 : _b2.env.toObject()) || globalThis.__env__ || (e ? r : globalThis);
}, o = new Proxy(r, { get(e, s) {
  return i()[s] ?? r[s];
}, has(e, s) {
  const E = i();
  return s in E || s in r;
}, set(e, s, E) {
  const B = i(true);
  return B[s] = E, true;
}, deleteProperty(e, s) {
  if (!s) return false;
  const E = i(true);
  return delete E[s], true;
}, ownKeys() {
  const e = i(true);
  return Object.keys(e);
} }), t = typeof process < "u" && process.env && "production" || "", f = [["APPVEYOR"], ["AWS_AMPLIFY", "AWS_APP_ID", { ci: true }], ["AZURE_PIPELINES", "SYSTEM_TEAMFOUNDATIONCOLLECTIONURI"], ["AZURE_STATIC", "INPUT_AZURE_STATIC_WEB_APPS_API_TOKEN"], ["APPCIRCLE", "AC_APPCIRCLE"], ["BAMBOO", "bamboo_planKey"], ["BITBUCKET", "BITBUCKET_COMMIT"], ["BITRISE", "BITRISE_IO"], ["BUDDY", "BUDDY_WORKSPACE_ID"], ["BUILDKITE"], ["CIRCLE", "CIRCLECI"], ["CIRRUS", "CIRRUS_CI"], ["CLOUDFLARE_PAGES", "CF_PAGES", { ci: true }], ["CODEBUILD", "CODEBUILD_BUILD_ARN"], ["CODEFRESH", "CF_BUILD_ID"], ["DRONE"], ["DRONE", "DRONE_BUILD_EVENT"], ["DSARI"], ["GITHUB_ACTIONS"], ["GITLAB", "GITLAB_CI"], ["GITLAB", "CI_MERGE_REQUEST_ID"], ["GOCD", "GO_PIPELINE_LABEL"], ["LAYERCI"], ["HUDSON", "HUDSON_URL"], ["JENKINS", "JENKINS_URL"], ["MAGNUM"], ["NETLIFY"], ["NETLIFY", "NETLIFY_LOCAL", { ci: false }], ["NEVERCODE"], ["RENDER"], ["SAIL", "SAILCI"], ["SEMAPHORE"], ["SCREWDRIVER"], ["SHIPPABLE"], ["SOLANO", "TDDIUM"], ["STRIDER"], ["TEAMCITY", "TEAMCITY_VERSION"], ["TRAVIS"], ["VERCEL", "NOW_BUILDER"], ["VERCEL", "VERCEL", { ci: false }], ["VERCEL", "VERCEL_ENV", { ci: false }], ["APPCENTER", "APPCENTER_BUILD_ID"], ["CODESANDBOX", "CODESANDBOX_SSE", { ci: false }], ["CODESANDBOX", "CODESANDBOX_HOST", { ci: false }], ["STACKBLITZ"], ["STORMKIT"], ["CLEAVR"], ["ZEABUR"], ["CODESPHERE", "CODESPHERE_APP_ID", { ci: true }], ["RAILWAY", "RAILWAY_PROJECT_ID"], ["RAILWAY", "RAILWAY_SERVICE_ID"], ["DENO-DEPLOY", "DENO_DEPLOYMENT_ID"], ["FIREBASE_APP_HOSTING", "FIREBASE_APP_HOSTING", { ci: true }]];
function b() {
  var _a2, _b2, _c2, _d2, _e2, _f2;
  if ((_a2 = globalThis.process) == null ? void 0 : _a2.env) for (const e of f) {
    const s = e[1] || e[0];
    if ((_b2 = globalThis.process) == null ? void 0 : _b2.env[s]) return { name: e[0].toLowerCase(), ...e[2] };
  }
  return ((_d2 = (_c2 = globalThis.process) == null ? void 0 : _c2.env) == null ? void 0 : _d2.SHELL) === "/bin/jsh" && ((_f2 = (_e2 = globalThis.process) == null ? void 0 : _e2.versions) == null ? void 0 : _f2.webcontainer) ? { name: "stackblitz", ci: false } : { name: "", ci: false };
}
const l = b();
l.name;
function n(e) {
  return e ? e !== "false" : false;
}
const I = ((_a = globalThis.process) == null ? void 0 : _a.platform) || "", T = n(o.CI) || l.ci !== false, a = n(((_b = globalThis.process) == null ? void 0 : _b.stdout) && ((_c = globalThis.process) == null ? void 0 : _c.stdout.isTTY));
n(o.DEBUG);
const R = t === "test" || n(o.TEST);
n(o.MINIMAL) || T || R || !a;
const A = /^win/i.test(I);
!n(o.NO_COLOR) && (n(o.FORCE_COLOR) || (a || A) && o.TERM !== "dumb" || T);
const C = (((_e = (_d = globalThis.process) == null ? void 0 : _d.versions) == null ? void 0 : _e.node) || "").replace(/^v/, "") || null;
Number(C == null ? void 0 : C.split(".")[0]) || null;
const y = globalThis.process || /* @__PURE__ */ Object.create(null), _ = { versions: {} }, W = new Proxy(y, { get(e, s) {
  if (s === "env") return o;
  if (s in e) return e[s];
  if (s in _) return _[s];
} }), c = ((_g = (_f = globalThis.process) == null ? void 0 : _f.release) == null ? void 0 : _g.name) === "node", O = !!globalThis.Bun || !!((_i = (_h = globalThis.process) == null ? void 0 : _h.versions) == null ? void 0 : _i.bun), D = !!globalThis.Deno, L = !!globalThis.fastly, S = !!globalThis.Netlify, u = !!globalThis.EdgeRuntime, N = ((_j = globalThis.navigator) == null ? void 0 : _j.userAgent) === "Cloudflare-Workers", F = [[S, "netlify"], [u, "edge-light"], [N, "workerd"], [L, "fastly"], [D, "deno"], [O, "bun"], [c, "node"]];
function G() {
  const e = F.find((s) => s[0]);
  if (e) return { name: e[1] };
}
const P = G();
(P == null ? void 0 : P.name) || "";

const useFavoritesStore = defineStore("favorites", {
  state: () => {
    return {
      favoriteMovies: [],
      favoritePeople: []
    };
  },
  actions: {
    isMovieInFavorites(movieId) {
      const index = this.favoriteMovies.findIndex((movie) => movie.id === movieId);
      return index >= 0;
    },
    isPersonInFavorites(personId) {
      const index = this.favoritePeople.findIndex((person) => person.id === personId);
      return index >= 0;
    },
    toggleMovieInFavorites(movie) {
      if (this.isMovieInFavorites(movie.id)) {
        this.removeMovieFromFavorites(movie.id);
      } else {
        this.addMovieInFavorites(movie);
      }
    },
    togglePersonInFavorites(person) {
      if (this.isPersonInFavorites(person.id)) {
        this.removePersonFromFavorites(person.id);
      } else {
        this.addPersonInFavorites(person);
      }
    },
    addMovieInFavorites(movie) {
      this.favoriteMovies.push(movie);
      this.saveFavoritesToSessionStorage();
    },
    addPersonInFavorites(person) {
      this.favoritePeople.push(person);
      this.saveFavoritesToSessionStorage();
    },
    removeMovieFromFavorites(movieId) {
      const index = this.favoriteMovies.findIndex((movie) => movie.id === movieId);
      this.favoriteMovies.splice(index, 1);
      this.saveFavoritesToSessionStorage();
    },
    removePersonFromFavorites(personId) {
      const index = this.favoritePeople.findIndex((person) => person.id === personId);
      this.favoritePeople.splice(index, 1);
      this.saveFavoritesToSessionStorage();
    },
    saveFavoritesToSessionStorage() {
      if (W.client) {
        sessionStorage.setItem("favoriteMovies", JSON.stringify(this.favoriteMovies));
        sessionStorage.setItem("favoritePeople", JSON.stringify(this.favoritePeople));
      }
    },
    loadFavoritesFromSessionStorage() {
      if (W.client) {
        const savedFavoriteMovies = sessionStorage.getItem("favoriteMovies");
        const savedFavoritePeople = sessionStorage.getItem("favoritePeople");
        if (savedFavoriteMovies) {
          this.favoriteMovies = JSON.parse(savedFavoriteMovies);
        }
        if (savedFavoritePeople) {
          this.favoritePeople = JSON.parse(savedFavoritePeople);
        }
      }
    }
  }
});

export { __nuxt_component_0 as _, __nuxt_component_1 as a, useFavoritesStore as u };
//# sourceMappingURL=favoritesStore.mjs.map
