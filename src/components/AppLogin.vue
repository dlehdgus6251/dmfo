<template>
  <v-app id="inspire">
    <v-main class="blue-grey lighten-4">
      <!-- Login Component -->
      <v-container style="max-width: 450px" fill-height>
        <v-layout align-center row wrap>
          <v-flex xs12>
            <v-card>
              <div class="pa-10">
                <h1 style="text-align: center" class="mb-10">Login</h1>
                <form v-on:submit.prevent="submitForm">
                  <v-text-field
                      label="ID"
                      prepend-inner-icon="mdi-account"
                      v-model="username"
                  ></v-text-field>
                  <v-text-field
                      prepend-inner-icon="mdi-lock"
                      type="password"
                      label="Password"
                      v-model="password"
                  >
                  </v-text-field>
                  <v-btn
                      type="submit"
                      color="blue lighten-1 text-capitalize"
                      depressed
                      large
                      block
                      dark
                      class="mb-3"
                  >
                    Login
                  </v-btn>
                  <v-btn
                      v-on:click="addUserShow"
                      color="blue lighten-1 text-capitalize"
                      depressed
                      large
                      block
                      dark
                  >
                    Sign Up
                  </v-btn>
                </form>
              </div>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import axios from 'axios';
export default {
  data() {
    return {
      username:'',
      password:''
    };
  },
  components: {},
  computed: {},
  methods: {
    submitForm: function(){
      console.log(this.username+"        "+ this.password)
      let url = '/login'
      let data ={
        userId: this.username,
        password: this.password
      }
      axios.post(url, data)
          .then(function (response){
            console.log(response.data.token)
            axios.create({
              baseURL : process.env.VUE_APP_API_URL,
              headers:{
                Authorization: response.data.token,
              }
            })
          })
          .catch(function (error){
            alert(error.response.data)
          })

    },
    addUserShow:function (){

    }
  },
};
</script>

<style scoped>

</style>