<template>
  <q-page class="flex q-pa-md">
    <q-list 
      class="full-width"
      separator
      clickable
      v-ripple
    >
      <q-item 
        v-for="user in users" 
        :key="user.id"
        to="/chat"
      >
        <q-item-section avatar>
          <q-avatar color="primary" text-color="white">
            {{ user.name.charAt(0) }}
          </q-avatar>
        </q-item-section>

        <q-item-section>
          <q-item-label>{{ user.name }}</q-item-label>
        </q-item-section>

        <q-item-section side>
          <q-badge 
            :color="user.online ? 'light-green-5' : 'grey-5' ">
            {{ user.online ? 'online' : 'offline' }}
          </q-badge>
        </q-item-section>
      </q-item>

      <q-separator />
    </q-list>
  </q-page>
</template>

<script>
  export default {
    data() {
      return {
        users: [ {
            id: 1,
            name: 'Aman',
            online: true
          }, 
          {
            id: 2,
            name: 'Parikh',
            online: false
          }, 
          {
            id: 3,
            name: 'Ankush',
            online: true
          }, 
        ]
      }
    }
  }
</script>
