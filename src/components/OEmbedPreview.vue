<template>
  <div ref="preview" class="preview"></div>
</template>

<style>
.preview > .twitter-tweet {
  margin: auto;
}
</style>

<script lang="ts">
import Vue from "vue";
import fetchJsonp from "fetch-jsonp";

export default Vue.extend({
  props: ["url"],

  methods: {
    async previewOEmbed(elem: HTMLElement, url_raw: string) {
      const getProvider = (url: string) => {
        if (/https:\/\/twitter\.com\/.*\/status\/.*/.test(url)) {
          return `https://publish.twitter.com/oembed?format=json&url=${encodeURIComponent(
            url
          )}`;
        }
      };

      const url = getProvider(url_raw);

      if (!url) {
        elem.innerText =
          url_raw == "" ? "ここにプレビューが表示されます…" : url_raw;
        return;
      }

      const response = await fetchJsonp(url);
      const card_json = await response.json();

      const replaceHTML = (element: any, html: string) => {
        element.innerHTML = html;
        element.querySelectorAll("script").forEach((scriptElement: any) => {
          const se: HTMLScriptElement = document.createElement("script");
          se.src = scriptElement.src;
          scriptElement.replaceWith(se);
        });
      };

      replaceHTML(elem, card_json.html);
    }
  },

  watch: {
    url(newUrl, _) {
      this.previewOEmbed(this.$refs.preview, newUrl);
    }
  },

  mounted() {
    // workaround for first-open
    this.previewOEmbed(this.$refs.preview, this.$props.url);
  }
});
</script>
