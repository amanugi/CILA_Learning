<template>
  <q-layout view="lHh Lpr lFf">
    <q-header>
      <q-toolbar>
        
        <q-toolbar-title>
          <q-img src="../statics/logo.png" alt="logo" style="width: 60px"> </q-img> 
        </q-toolbar-title>

        <div class="gt-sm">
          <q-btn 
          outline
          squared
          label="Courses"
          class="q-mr-sm"
          >
          </q-btn>

          <q-btn 
          outline
          rounded
          label="Sign up"
          class="q-mr-sm"
          >
          </q-btn>
          
          <q-btn 
          outline
          rounded
          label="Sign in"
          >
          </q-btn>
        </div>

        <div class="lt-md">
          <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="leftDrawerOpen = !leftDrawerOpen"
          />
        </div>
        
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      bordered
      content-class="bg-grey-2"
    >
      <q-list>
        <q-item-label
          header
          class="text-grey-8"
        >
          <!-- Essential Links -->
        </q-item-label>
        <EssentialLink
          v-for="link in essentialLinks"
          :key="link.title"
          v-bind="link"
          style="color:green"
        />
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
    <q-footer elevated style="z-index: -1">
        <q-toolbar>
          <q-space />
            Copyright &copy; 2021
          <q-space />
        </q-toolbar>
      </q-footer>
  </q-layout>
</template>

<script>
import EssentialLink from 'components/EssentialLink.vue'

const linksData = [
  {
    title: 'Sign Up',
    caption: '',
    icon: '',
    link: ''
  },
  {
    title: 'Sign In',
    caption: '',
    icon: '',
    link: ''
  },
  {
    title: 'Courses',
    caption: '',
    icon: '',
    link: ''
  },
];

export default {
  name: 'MainLayout',
  components: { EssentialLink },
  data() {
    return {
      leftDrawerOpen: false,
      essentialLinks: linksData
    }
  }
}
</script>

<style scoped>

</style>