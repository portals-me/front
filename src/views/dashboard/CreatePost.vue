<template>
  <div id="create-post">
    <div style="text-align: center;">
      <icon-button
        icon="share"
        label="共有"
        slot="trigger"
        aria-controls="contentIdForAlly1"
        style="margin: 10px"
        @click="open('share')"
        :active="openTab == 'share'"
      />
      <icon-button
        icon="image"
        label="画像"
        slot="trigger"
        aria-controls="contentIdForAlly1"
        style="margin: 10px"
        @click="open('image')"
        :active="openTab == 'image'"
      />
      <icon-button
        icon="notebook"
        label="記事"
        slot="trigger"
        aria-controls="contentIdForAlly1"
        style="margin: 10px"
        @click="open('text')"
        :active="openTab == 'text'"
        data-cy="open-article"
      />
    </div>

    <b-collapse :open.sync="isShareOpen" aria-id="contentIdForA11y1">
      <div class="content">
        <create-share @posted="$emit('reload')" />
      </div>
    </b-collapse>

    <b-collapse :open.sync="isImageOpen" aria-id="contentIdForA11y1">
      <div class="content">
        <create-image @posted="$emit('reload')" />
      </div>
    </b-collapse>

    <b-collapse :open.sync="isTextOpen" aria-id="contentIdForA11y1">
      <div class="content">
        <create-text @posted="$emit('reload')" />
      </div>
    </b-collapse>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import CreateShare from "./CreateShare.vue";
import CreateImage from "./CreateImage.vue";
import CreateText from "./CreateText.vue";
import * as API from "../../API";
import * as mutations from "../../graphql/mutations";
import * as queries from "../../graphql/queries";
import IconButton from "../../components/IconButton.vue";

export default Vue.extend({
  components: {
    CreateShare,
    CreateImage,
    CreateText,
    IconButton
  },

  data() {
    return {
      activeTab: 0,
      shareArg: null,
      openTab: null
    };
  },

  computed: {
    isShareOpen() {
      return this.openTab == "share";
    },
    isImageOpen() {
      return this.openTab == "image";
    },
    isTextOpen() {
      return this.openTab == "text";
    }
  },

  methods: {
    onCreateFinished(type: string) {
      console.log(`${type} created!`);
    },

    open(tabName: string) {
      this.openTab = this.openTab == tabName ? null : tabName;
    }
  }
});
</script>
