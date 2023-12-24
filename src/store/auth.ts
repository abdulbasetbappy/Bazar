// src/store/auth.ts
import { defineStore } from 'pinia';

export const useAuthStore = defineStore({
  id: 'auth',
  state: () => ({
    token: '',
    isAuthenticated: false,
  }),
  getters: {

  },
  actions: {
    async login(username: string, password: string) {
      try {
        const response = await fetch( 'https://fakestoreapi.com/auth/login', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ username, password }),
        });

        if (!response.ok) {
          console.error(`Login failed with status: ${response.status}`);
          if (response.status === 401) {
            console.log('Unauthorized: Check your credentials');
          }
          return;
        }
        const data = await response.json();
        this.token = data.token;
        this.isAuthenticated = true;
        // Save the token to local storage
        localStorage.setItem('token', data.token);
      } catch (error) {
        console.error('Error during login:', error);
      }
    },
    async logout() {
      // Remove the token from local storage
      localStorage.removeItem('token');
      this.isAuthenticated = false;
    },
    
    checkAuth() {
      const token = localStorage.getItem('token');
      this.isAuthenticated = token !== null;
    }
  },  
});
