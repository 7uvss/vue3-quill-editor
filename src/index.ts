import richTextEditor from "./components/richTextEditor.vue";

richTextEditor.install = function(app) {
  app.component(richTextEditor.name, richTextEditor)
}

const VueQuillEditor = { richTextEditor }

export default { VueQuillEditor };
