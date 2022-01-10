import loadImages from "~/plugins/loadImages/loadImages.vue";

const Plugin = {
  install(Vue, options = {}) {
    /**
     * Makes sure that plugin can be installed only once
     */
    if (this.installed) {
      return;
    }
    this.installed = true;

    /**
     * Create event bus
     */

    this.event = new Vue();

    /**
     * Plugin methods
     */
    Vue.prototype.$loadImages = {
      show(options = {}) {
        Plugin.event.$emit("show", options, true);
      }
    };

    /**
     * Registration of <loadImages/> component
     */
    Vue.component("loadImages", loadImages);
  }
};

export default Plugin;