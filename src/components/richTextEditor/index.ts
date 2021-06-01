import type { App } from 'vue'
import richTextEditor from './index.vue'

richTextEditor.install = (app: App) => {
  app.component(richTextEditor.name, richTextEditor)
}

export default richTextEditor
