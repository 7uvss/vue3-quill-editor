<template>
  <div class="background">
    <div class="title">raw HTML:</div>
    <div>{{ rawHTML }}</div>
    <div class="title">HTML preview:</div>
    <div class="ql-editor content" v-html="rawHTML"></div>
    <div class="title">Editor:</div>
    <div v-if="show">
      <richTextEditor :toolBarConfig="toolBarProp" v-model="rawHTML" />
    </div>
    <div class="title">toolBarConfig:</div>
    <textarea
      name="toolBarConfig"
      class="toolBarConfig"
      cols="100"
      rows="10"
      v-model="toolBarInput"
    ></textarea>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref, watch } from "vue";
import richTextEditor from "./components/richTextEditor/index.vue";

export default defineComponent({
  name: "App",
  components: {
    richTextEditor,
  },
  setup() {
    const new_eval = (str) => {
      let fn = Function;
      return new fn("return " + str)();
    };
    const toolBarInput = ref(`[
  ['bold', 'italic', 'underline', 'strike'],
  ['blockquote', 'code-block'],
  [{ 'header': 1 }, { 'header': 2 }],
  [{ 'list': 'ordered'}, { 'list': 'bullet' }],
  [{ 'script': 'sub'}, { 'script': 'super' }],
  [{ 'indent': '-1'}, { 'indent': '+1' }],
  [{ 'direction': 'rtl' }],
  [{ 'size': ['small', false, 'large', 'huge'] }],
  [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
  [{ 'color': [] }, { 'background': [] }],
  [{ 'font': [] }],
  [{ 'align': [] }],
  ['clean']
]`);
    const toolBarProp = ref([
      ["bold", "italic", "underline", "strike"],
      ["blockquote", "code-block"],
      [{ header: 1 }, { header: 2 }],
      [{ list: "ordered" }, { list: "bullet" }],
      [{ script: "sub" }, { script: "super" }],
      [{ indent: "-1" }, { indent: "+1" }],
      [{ direction: "rtl" }],
      [{ size: ["small", false, "large", "huge"] }],
      [{ header: [1, 2, 3, 4, 5, 6, false] }],
      [{ color: [] }, { background: [] }],
      [{ font: [] }],
      [{ align: [] }],
      ["clean"],
    ]);

    const rawHTML = ref("");
    const show = ref(true);

    watch(toolBarInput, (q) => {
      try {
        show.value = false;
        toolBarProp.value = new_eval(q);
        setTimeout(() => {
          show.value = true;
        }, 500);
      } catch (error) {
        console.log(error);
      }
    });

    return { rawHTML, toolBarInput, toolBarProp, show };
  },
});
</script>

<style>
.content {
  border: 1px solid #ccc;
}
.toolBarConfig {
  width: 70%
}
.title {
  margin-top: 10px;
  margin-bottom: 10px;
}
.background {
  padding: 40px;
}
</style>
