<template>
    <div>
      <h1>All Products</h1>
      <v-row>
        <v-col v-for="(product, index) in productStore.products" :key="index" class="mt-5" cols="12" md="3">
          <v-card class="bg-white pa-5">
            <v-img :src="(product as any).image" height="200px"></v-img>
            <v-card-title>{{ (product as any).title }}</v-card-title>
            <v-card-subtitle class="mb-3">{{ (product as any).price }}</v-card-subtitle>
            <router-link :to="`/product/${(product as any).id}`" class="ml-3">
              <v-btn color="primary text-none">See More</v-btn>
            </router-link>
          </v-card>
        </v-col>
      </v-row>
    </div>
  </template>
  
  <script setup lang="ts">
  import { onMounted } from 'vue';
  import { useProductStore } from '@/store/product';
  
  const productStore = useProductStore();
  
  onMounted(async () => {
    await productStore.fetchProducts();
  });
  </script>
  