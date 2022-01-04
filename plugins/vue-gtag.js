import Vue from "vue";
import VueGtag from "vue-gtag";

export default ({ app }) =>
  Vue.use(
    VueGtag,
    {
      config: { id: "UA-130239932-1" },
      pageTrackerScreenviewEnabled: true
    },
    app.router
  );
