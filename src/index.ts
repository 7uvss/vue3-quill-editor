import type { App } from "vue";
import richTextEditor from "./components/richTextEditor.vue";

const components = {
  richTextEditor,
};

const install = (app: App): void => {
  for (const key in components) {
    const item = components[key];
    app.component(item.name || key, item);
  }
};

export default { install };
