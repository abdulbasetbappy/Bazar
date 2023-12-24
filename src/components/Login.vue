<template>
    <v-container class="mt-10 mx-16">
        <v-row class="d-flex justify-center align-center mb-4 ml-16">
            <v-text class="text-h5">Welcome to Daraz! Please login.</v-text>
            <v-spacer></v-spacer>
            <v-text class="d-inline text-subtitle-2 mr-16">New member? 
            <router-link to="/Register">Register</router-link>    
            here.</v-text>
        </v-row>
        <v-row class="mx-16 my-5 pa-4 bg-success">
            <v-form @submit.prevent="onSubmit">
                <v-col class="ml-16">
                    <v-responsive
                    >
                    <v-text-field
                        v-model="username"
                        hide-details="auto"
                        label="Username"
                        placeholder="mor_2314"
                        hint="Enter your Username"
                        type="text"
                        class="my-5"
                    ></v-text-field>
                    <v-text-field
                        v-model="password"
                        :type="showPassword ? 'text' : 'password'"
                        label="Password"
                        hint="Enter your password "
                        class=""
                    >
                        <template v-slot:append>
                            <v-icon @click="PasswordVisibility" color="grey">
                            {{ showPassword ? "mdi-eye-off" : "mdi-eye" }}
                            </v-icon>
                        </template>
                    </v-text-field>
                    <v-checkbox
                        v-model="Remember"
                        color="secondary"
                        label="Remember ?"
                        class="d-flex justify-start align-center"
                    ></v-checkbox>
                    <v-card-text class="d-flex align-start justify-end pa-0">
                            <router-link to="/Recover">Reset Your Password</router-link> 
                    </v-card-text>
                    </v-responsive>
                </v-col>
                <v-col class="mr-16 ">
                    <v-btn block class="bg-primary mt-5" size="x-large" type="submit" :loading="loading" variant="tonal">Login</v-btn>
                    <v-row class="d-flex align-center justify-start">
                            <v-col>
                                <v-divider :thickness="1"></v-divider>
                            </v-col>
                            <v-col class="text-center" md="2">
                                <h3 >Or</h3>
                            </v-col>
                            <v-col>
                                <v-divider :thickness="2"></v-divider>
                            </v-col>
                        </v-row>
                        
                        <v-btn block class="bg-red-darken-4 mb-3 mt-2" prepend-icon="mdi-google" variant="tonal">Login With Google</v-btn>
                        <v-btn block class="bg-blue-darken-4 mb-3" prepend-icon="mdi-facebook" variant="tonal">Login With Facebook</v-btn>
                </v-col>
            </v-form>
        </v-row>
    </v-container>
</template>

<script lang="ts" setup>
import { ref, onMounted } from 'vue';
import { useAuthStore } from '@/store/auth';
import router from '@/router'; 

const showPassword = ref(false);
const username = ref('');
const password = ref('');
const Remember = ref(false);
const loading = ref(false);

const authStore = useAuthStore();

const onSubmit = async () => {
  loading.value = true;
  try {
    await authStore.login(username.value, password.value);
    loading.value = false;

    // Redirect to the home route upon successful login
// Import the 'router' object from the appropriate package

    router.push('/');
  } catch (error) {
    // Handle login error if needed
    console.error('Login failed:', error);
    loading.value = false;
  }
  if (Remember.value) {
    localStorage.setItem('rememberedUsername', username.value);
    localStorage.setItem('rememberedPassword', password.value);
  } else {
    localStorage.removeItem('rememberedEmail');
  }
};

const checkRememberedEmail = () => {
  const rememberedUsername = localStorage.getItem('rememberedUsername');
  const rememberedPassword = localStorage.getItem('rememberedPassword');
  if (rememberedUsername && rememberedPassword) {
    username.value = rememberedUsername;
    password.value = rememberedPassword;
    Remember.value = true;
  }
};

const PasswordVisibility = () => {
  showPassword.value = !showPassword.value;
};

onMounted(() => {
  checkRememberedEmail();
});
</script>

<style lang="scss" scoped>

</style>