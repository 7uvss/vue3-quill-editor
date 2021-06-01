<template>
  <div class="background">
    <div class="title">raw HTML:</div>
    <div>{{ rawHTML }}</div>
    <div class="title">HTML preview:</div>
    <div class="ql-editor content" v-html="rawHTML"></div>
    <div class="title">Editor:</div>
    <richTextEditor :toolBarConfig="toolBarConfig" v-model="rawHTML" />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import richTextEditor from "./components/richTextEditor/index.vue";

export default defineComponent({
  name: "App",
  components: {
    richTextEditor,
  },
  setup() {
    const toolBarConfig = [
      [{ header: [1, 2, 3, false] }],
      [{ color: [] }, { background: [] }],
      ["bold", "italic", "underline", "strike"],
      [{ align: [] }],
      ["clean"],
    ];
    const rawHTML = ref("");
    return { rawHTML, toolBarConfig };
  },
});
</script>

<style>
.content {
  border: 1px solid #ccc;
}
.title {
  margin-top: 10px;
  margin-bottom: 10px;
}
.background {
  padding: 40px;
}
</style>
