<template>
    <div>
        <h1> Child Component </h1>
        <li v-for="user in users" :key="user.name">{{user.name}}</li>
    </div>
    
</template>

<script>
export default {
    name: 'Child',
    props: ['users']                // array of users
}
</script>