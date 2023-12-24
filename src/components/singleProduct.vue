<template>
  <v-container v-if="product">
    <v-row>
      <v-col md="4">
        <v-img :src="product.image" :alt="product.title" height="250px" class="pa-5"></v-img>
      </v-col>
      <v-col md="6">
        <v-card-title class="text-h6">{{ product.title }}</v-card-title>
        <v-card-subtitle class="text-subtitle-1">ID: {{ product.id }}</v-card-subtitle>
        <v-card-subtitle class="text-subtitle-1">Category: {{ product.category }}</v-card-subtitle>
        <v-card-subtitle class="text-h5"> $ {{ product.price }}</v-card-subtitle>
        <v-card-subtitle class="text-subtitle-1">Rating: {{ product.rating.rate }}</v-card-subtitle>
        <v-card-subtitle class="text-subtitle-1">Total Reviews: {{ product.rating.count }}</v-card-subtitle>
        <v-btn class="mt-5" color="primary" @click="addToCart">Add to Cart</v-btn>
      </v-col>
    </v-row>
    <v-row>
      <v-col md="12">
        <v-text class="text-body-1">{{ product.description }}</v-text>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup lang="ts">
import { ref, onMounted, watch } from 'vue';
import { useProductStore } from '@/store/product';
import { useCartStore } from '@/store/cart';
import { useRoute } from 'vue-router';

interface Product {
  id: number;
  title: string;
  price: number;
  category: string;
  description: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
}

const productStore = useProductStore();
const route = useRoute();
const productId = ref<number>(Number(route.params.id));
const product = ref<Product | null>(null);
const cartStore = useCartStore();

// Watch for changes in product details
watch(() => productStore.productDetails, (newProductDetails) => {
  product.value = newProductDetails;
});

onMounted(async () => {
  await productStore.fetchProductDetails(productId.value);
});

const addToCart = () => {
  if (product.value) {
    const productToAdd = {
      id: product.value.id,
      title: product.value.title,
      price: product.value.price,
      category: product.value.category,
      image: product.value.image,
    };
    cartStore.addToCart({ ...productToAdd, quantity: 1 });
  }
};
</script>
