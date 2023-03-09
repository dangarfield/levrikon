<template>
  <!-- <div class="q-pa-md"> -->
    <q-layout view="lHh LpR lFf"  class="shadow-2 rounded-borders">
      <q-header elevated class="bg-black">
        <q-toolbar>
          <!-- <q-btn flat @click="drawer = !drawer" round dense icon="menu" /> -->
          <q-toolbar-title>Header</q-toolbar-title>
        </q-toolbar>
      </q-header>

      <q-drawer
        v-model="drawer"
        show-if-above

        :mini="miniState"
        @mouseover="miniState = false"
        @mouseout="miniState = true"
        mini-to-overlay

        :width="200"
        :breakpoint="500"
        bordered
        class="bg-grey-3"
      >
        <q-scroll-area class="fit" :horizontal-thumb-style="{ opacity: 0 }">
          <q-list padding>

            <q-item clickable v-ripple :to="'/'">
              <q-item-section avatar>
                <q-icon name="fa-solid fa-house" />
              </q-item-section>
              <q-item-section>
                Home / Load
              </q-item-section>
            </q-item>

            <q-item clickable v-ripple :to="'/settings'">
              <q-item-section avatar>
                <q-icon name="fa-solid fa-screwdriver-wrench" />
              </q-item-section>
              <q-item-section>
                Settings
              </q-item-section>
            </q-item>

            <q-item clickable v-ripple :to="'/notes'">
              <q-item-section avatar>
                <q-icon name="fa-solid fa-inbox" />
              </q-item-section>
              <q-item-section>
                Notes
              </q-item-section>
            </q-item>

            <q-separator />

            <q-item clickable v-ripple :to="'/database'">
              <q-item-section avatar>
                <q-icon name="fa-solid fa-database" />
              </q-item-section>
              <q-item-section>
                Database
              </q-item-section>
            </q-item>


            <q-item clickable v-ripple :to="'/assets'">
              <q-item-section avatar>
                <q-icon name="fa-solid fa-file-zipper" />
              </q-item-section>
              <q-item-section>
                Assets
              </q-item-section>
            </q-item>

            <q-item clickable v-ripple :to="'/fields'">
              <q-item-section avatar>
                <q-icon name="fa-solid fa-map" />
              </q-item-section>
              <q-item-section>
                Fields
              </q-item-section>
            </q-item>

            <q-item clickable v-ripple :to="'/menus'">
              <q-item-section avatar>
                <q-icon name="fa-solid fa-ellipsis-vertical" />
              </q-item-section>
              <q-item-section>
                Menus
              </q-item-section>
            </q-item>

            <q-item clickable v-ripple :to="'/plugins'">
              <q-item-section avatar>
                <q-icon name="fa-solid fa-plug" />
              </q-item-section>
              <q-item-section>
                Plugins
              </q-item-section>
            </q-item>


          </q-list>
        </q-scroll-area>
      </q-drawer>

      <q-page-container>
        <router-view />
        <!-- <q-page padding>
          <p v-for="n in 15" :key="n">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit nihil praesentium molestias a adipisci, dolore vitae odit, quidem consequatur optio voluptates asperiores pariatur eos numquam rerum delectus commodi perferendis voluptate?
          </p>
        </q-page> -->
      </q-page-container>
    </q-layout>
  <!-- </div> -->
</template>

<script>
import { defineComponent, ref } from 'vue'

export default defineComponent({
  name: 'AppLayout',
  setup () {
    return {
      drawer: ref(true),
      miniState: ref(true)
    }
  }
})
</script>
