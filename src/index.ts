import type { App } from 'vue'
import richTextEditor from "./components/richTextEditor/index";

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

export { richTextEditor }