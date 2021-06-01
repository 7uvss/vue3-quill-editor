<script lang="ts">
  import { defineComponent, onMounted, ref, toRefs, h } from 'vue'
  import Quill from 'quill'
  import 'quill/dist/quill.core.css'
  import 'quill/dist/quill.snow.css'

  export default defineComponent({
    name: 'richTextEditor',
    props: {
      modelValue: String,
      toolBarConfig: Array
    },
    emits: ['update:modelValue'],
    setup: (props, { emit }) => {
      const { modelValue,toolBarConfig } = toRefs(props)
      const editor = ref()
      const editorRef = ref()
      onMounted(() => {
        editor.value = new Quill(editorRef.value, {
          modules: {
            toolbar: toolBarConfig?.value
          },
          theme: 'snow'
        })
        editor.value.root.innerHTML = modelValue?.value
        editor?.value.on('text-change', () => {
          emit('update:modelValue', editor.value.root.innerHTML)
        })
      })
      return () => {
        return h('div', { ref: editorRef })
      }
    }
  })
</script>