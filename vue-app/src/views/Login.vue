<template>
  <div>
    <h2>Login</h2>
    <form @submit.prevent="loginUser">
      <label for="username">Username:</label>
      <input type="text" id="username" v-model="username" required>
      <label for="password">Password:</label>
      <input type="password" id="password" v-model="password" required>
      <button type="submit">Login</button>
      <div>
        <router-link to="/registration">Haven't registered yet?</router-link>
      </div>
    </form>
  </div>
</template>
<script>
import axios from 'axios';
import router from "@/router";
export default {
  name: 'Login-page',
  data() {
    return {
      username: '',
      password: ''
    };
  },
  methods: {
    async loginUser() {
      try {
        if (this.username != null && this.password != null){
          console.log('User logged in successfully!');
          router.push("/home-client");
        }

        const response = await axios.get('https://jsonplaceholder.typicode.com/users', {
          params: {
            username: this.username,
            password: this.password
          }
        });
        if (response.data.length === 1) {
          console.log('User logged in successfully!', response.data[0]);
        } else {
          console.log('Invalid username or password.');
        }
      } catch (error) {
        console.error('Error logging in:', error);
      }
    }
  }
};
</script>