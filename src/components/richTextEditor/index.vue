<script lang="ts">
  import { defineComponent, onMounted, ref, toRefs, h } from 'vue'
  import Quill from 'quill'
  import 'quill/dist/quill.core.css'
  import 'quill/dist/quill.snow.css'
  import 'quill/dist/quill.bubble.css'
  export default defineComponent({
    name: 'richTextEditor',
    props: {
      modelValue: String
    },
    emits: ['update:modelValue'],
    setup: (props, { emit }) => {
      const { modelValue } = toRefs(props)
      const editor = ref()
      const editorRef = ref()
      onMounted(() => {
        editor.value = new Quill(editorRef.value, {
          modules: {
            toolbar: [[{ header: [1, 2, 3, false] }], [{ color: [] }, { background: [] }], ['bold', 'italic', 'underline', 'strike'], [{ align: [] }], ['clean']]
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