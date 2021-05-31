<template>
  <div class="ql-editor" v-html="rawHTML"></div>
  <richTextEditor v-model="rawHTML" />
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import richTextEditor from "./components/richTextEditor.vue";

export default defineComponent({
  name: "App",
  components: {
    richTextEditor,
  },
  setup() {
    const rawHTML = ref("");
    return { rawHTML };
  },
});
</script>

<style></style>
