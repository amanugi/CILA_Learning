<template>
    <div>
        <q-form @submit="submitForm">
            <q-input 
                v-if="tab == 'register'" 
                v-model="formData.name" 
                class="q-mb-md" 
                outlined 
                required
                label="Name" />
            <q-input 
                class="q-mb-md" 
                v-model="formData.email" 
                outlined 
                type="email"
                required
                label="Email" />
            <q-input 
                class="q-mb-md" 
                v-model="formData.password"
                outlined 
                type="password" 
                required
                label="Password" />
            <div class="row">
                <q-space />
                <q-btn 
                 type="submit"
                 color="primary" 
                :label='tab' />
            </div>
        </q-form>
    </div>
    
</template>

<script>
export default {
    props: ['tab'],
    data() {
        return {
            formData: {
                name: '',
                email: '',
                password: ''
            }
        }
    },
    methods: {
        submitForm() {
            if(this.tab == 'login'){
                console.log("User is logged in");
            }
            else{
                console.log("Register the user");
            }
        }
    }
}
</script>