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
import { mapActions } from 'vuex'

export default {
    props: ['tab'],
    data() {
        return {
            formData: {
                name: '',
                email: 'aman@test.com',
                password: '123456'
            }
        }
    },
    methods: {
        ...mapActions('store', ['registerUser', 'loginUser']),

        submitForm() {
            if(this.tab == 'login'){
                this.loginUser(this.formData)
            }
            else{
                this.registerUser(this.formData);
            }
        }
    }
}
</script>