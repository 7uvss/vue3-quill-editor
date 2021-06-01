import richTextEditor from "./components/richTextEditor.vue";
import Quill from "quill";

richTextEditor.install = function (app) {
  app.component(richTextEditor.name, richTextEditor);
};

const VueQuillEditor = { Quill, richTextEditor };

export default VueQuillEditor;
export { Quill, VueQuillEditor };
