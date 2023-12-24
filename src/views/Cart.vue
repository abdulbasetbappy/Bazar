<template>
  <v-container>
    <v-row>
      <v-list-item-group v-if="cartStore.cartItems.length">
        <v-list-item v-for="(item, index) in cartStore.cartItems" :key="item.id">
          <v-list-item-content>
            <v-row>
              <v-col>{{ item.title }} - ${{ item.price }} - Category: {{ item.category }} - Quantity: {{ item.quantity }}</v-col>
            </v-row>
          </v-list-item-content>
          <v-list-item-action>
            <v-btn @click="decrementQuantity(index)" icon>
              <v-icon>mdi-minus</v-icon>
            </v-btn>
            <v-btn @click="incrementQuantity(index)" icon>
              <v-icon>mdi-plus</v-icon>
            </v-btn>
            <v-btn @click="removeFromCart(index)" icon>
              <v-icon>mdi-delete</v-icon>
            </v-btn>
          </v-list-item-action>
        </v-list-item>
      </v-list-item-group>
      <v-row v-else>
        <v-col class="text-h5">Your cart is empty</v-col>
      </v-row>
    </v-row>
    <v-row>
      <v-col class="text-h5">Total Price: ${{ calculateTotalPrice() }}</v-col>
    </v-row>
  </v-container>
</template>

<script setup lang="ts">
import { useCartStore } from '@/store/cart';
import { onMounted } from 'vue';

const cartStore = useCartStore();

const removeFromCart = (index: number) => {
  cartStore.removeFromCart(index);
};

const incrementQuantity = (index: number) => {
  cartStore.incrementQuantity(index);
};

const decrementQuantity = (index: number) => {
  cartStore.decrementQuantity(index);
};

const calculateTotalPrice = (): string => {
  return cartStore.cartItems.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);
};

onMounted(() => {
  // Load cart data from local storage when the component is mounted
  cartStore.loadFromLocalStorage();
});
</script>
