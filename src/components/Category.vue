<template>
    <v-container>
      <v-text class="text-h4 font-weight-bold"> {{ ($route.params.categoryName as string).toUpperCase() }}</v-text>
      <v-row>
        <v-col v-for="(product, index) in categoryData" :key="index" class="mt-5" cols="12" md="3">
          <v-card class="bg-white pa-5">
            <v-img :src="product.image" height="200px"></v-img>
            <v-card-title >{{ product.title }}</v-card-title>
            <v-card-subtitle class="mb-3"> $ {{ product.price }}</v-card-subtitle>
            <router-link :to="`/product/${(product as any).id}`" class="ml-3">
              <v-btn color="primary text-none">See More</v-btn>
            </router-link>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </template>
  
  <script setup lang="ts">
  import { ref, onMounted, watch } from 'vue';
  import { useCategoryStore } from '@/store/category';
  import { useRoute } from 'vue-router';
  
  const categoryStore = useCategoryStore();
  const categoryData = ref<{ title: string; price: number, image:string }[]>([]);
  const route = useRoute();
  
  const fetchCategoryData = async () => {
    const categoryName = route.params.categoryName;
    await categoryStore.fetchCategoryData(categoryName as string);
    categoryData.value = categoryStore.categoryData;
  };
  
  onMounted(fetchCategoryData);
  
  watch(() => route.params.categoryName, fetchCategoryData);
  </script>
  