# Vue 3 Quill RichTextEditor

## Usage

Install:

```javascript
npm i vue3-quill-editor
```

Global Registration:

```javascript
// vue - main.js
import Quill from "vue3-quill-editor";
import "vue3-quill-editor/lib/style.css";

app.use(Quill);
```

In .vue

```html
<template>
  <richTextEditor v-model="rawHTML"></richTextEditor>
</template>

<script setup lang="ts">
  import { ref } from "vue";
  const rawHTML = ref("");
</script>
```
