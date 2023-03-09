<template>
  <q-page class="row items-center justify-evenly">
    <!-- <p>Home - {{ store.name }}</p> -->
    <q-input color="orange" filled bottom-slots v-model="projectName" label="Project Name">
      <template v-slot:prepend>
        <q-icon name="place" />
      </template>
    </q-input>

    <q-file filled bottom-slots v-model="projectDirectory" label="Project Directory">
      <template v-slot:before>
        <q-icon name="folder_open" />
      </template>
    </q-file>

  </q-page>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import projectStore from 'src/pinia';

export default defineComponent({
  name: 'PageHome',
  data() {
    return {
      projectName: 'New Project',
      projectDirectory: null
    }
  },
  setup() {
    const store = projectStore()
    // this.projectName = 'asda'
    return { store }
  },
  created() {
    this.projectName = 'in-created'
  }
});
</script>
