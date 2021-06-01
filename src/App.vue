<template>
  <div class="ql-editor" v-html="rawHTML"></div>
  <richTextEditor :toolBarConfig="toolBarConfig" v-model="rawHTML" />
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
    const toolBarConfig = [[{ header: [1, 2, 3, false] }], [{ color: [] }, { background: [] }], ['bold', 'italic', 'underline', 'strike'], [{ align: [] }], ['clean']]
    const rawHTML = ref("");
    return { rawHTML,toolBarConfig };
  },
});
</script>

<style></style>
