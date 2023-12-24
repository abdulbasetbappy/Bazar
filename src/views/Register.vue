<template>
    <v-container class="mt-10 mx-16">
        <v-row class="d-flex justify-center align-center mb-4 ml-16">
            <v-text class="text-h5">Create your Daraz Account</v-text>
            <v-spacer></v-spacer>
            <v-text class="d-inline text-subtitle-2 mr-16">Already member? 
            <router-link to="/login">Login</router-link>    
            here.</v-text>
        </v-row>
        <v-row class="mx-16 my-5 pa-4 bg-success">
            <v-col class="ml-16">
                <v-responsive
                >
                <v-text-field
                    hide-details="auto"
                    label="Mobile Number"
                    placeholder="+8801_ _ _ _ _ _"
                    type="Number"
                    class="my-5"
                >
                <template v-slot:append>
                    <v-btn color="transparent" class="text-none" elevation="0" size="x-large" text>Send</v-btn>
                </template>
                </v-text-field>
                <v-text class="text-subtitle-2">Verify OTP:</v-text>
                <v-otp-input></v-otp-input>


    
                </v-responsive>
            </v-col>
            <v-col class="mr-1 mt-6 ">
                <v-text-field
                    label="Name"
                    type="input"
                    hint="Enter Your Name"
                    class=""
                ></v-text-field>
                <v-btn block class="bg-primary mt-5" size="x-large" variant="tonal">Login</v-btn>
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
        </v-row>
        
    </v-container>
</template>

<script>

export default {
    data() {
    return {
      menu: false,
      selectedDate: null,
    };
  },
};
</script>

<style lang="scss" scoped>

</style>