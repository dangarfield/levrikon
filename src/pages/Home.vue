<template>
  <q-page class="row items-center justify-evenly">
    <!-- <p>Home - {{ store.name }}</p> -->
    <q-btn @click="openProjectFolderDialog">Select Project Directory</q-btn>

    <q-input color="orange" filled bottom-slots v-model="projectName" label="Project Name">
      <template v-slot:prepend>
        <q-icon name="place" />
      </template>
    </q-input>
    <q-input color="orange" filled bottom-slots v-model="projectDirectory" label="Project Directory" readonly="readonly">
      <template v-slot:prepend>
        <q-icon name="folder_open" />
      </template>
    </q-input>

    <q-dialog v-model="isConfirmOpen" persistent>
      <q-card>
        <q-card-section class="row items-center">
          <q-avatar icon="signal_wifi_off" color="primary" text-color="white" />
          <span class="q-ml-sm">You are currently not connected to any network.</span>
        </q-card-section>

        <q-card-actions align="right">
          <q-btn flat label="Cancel" color="primary" v-close-popup />
          <q-btn flat label="Turn on Wifi" color="primary" v-close-popup />
        </q-card-actions>
      </q-card>
    </q-dialog>

    <!-- <q-file filled bottom-slots v-model="projectDirectory" label="Project Directory">
      <template v-slot:before>
        <q-icon name="folder_open" />
      </template>
    </q-file> -->

  </q-page>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import projectStore from 'src/pinia';
import { electronApi } from 'src/api/electron-api';
import { doesProjectExistForPath } from 'src/services/projectService'
export default defineComponent({
  name: 'PageHome',
  data() {
    return {
      projectName: 'New Project',
      projectDirectory: '',
      showConfirmNewProject: false,
      isConfirmOpen: false
    }
  },
  setup() {
    const store = projectStore()
    // this.showConfirmNewProject = ref(false)
    // const confirm = ref(false)
    // isConfirmOpen.value = false
    return { store}
  },
  created() {
    this.projectName = 'in-created'
  },
  methods: {
            openProjectFolderDialog: async function () {
              const dialogResult = await electronApi.openFolderDialog('AHA', 'folder', { name: 'images', extensions: ['jpg'] });
      console.log('dialogResult', dialogResult)
      if (dialogResult.length > 0) {
        this.projectDirectory = dialogResult[0];
        this.isConfirmOpen = true
                console.log('projectService', doesProjectExistForPath(this.projectDirectory))
      } else {
                this.projectDirectory = '';
              }


            }
        }
});
</script>
