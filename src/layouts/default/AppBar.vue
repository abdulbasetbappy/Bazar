<template>
    <v-app-bar color="primary" density="prominent" class="align-center" tonal >
      <v-container style="height: 100%" >
        <v-row class="d-flex py-1" no-getters>
          <v-col class="pa-0 justify-start align-center"  md="4">
            <v-btn :ripple="false" variant="text" class="text-caption text-none" size="xs">Became a seller</v-btn>
            <v-btn :ripple="false" variant="text" class="ml-3 text-caption text-none" size="xs">Bazar Donates</v-btn>
            <v-btn :ripple="false" variant="text" class="ml-3 text-caption text-none" size="xs">Help & Support</v-btn>
          </v-col>
          <v-col class="pa-0 d-flex justify-end align-center" offset-md="6" md="2">
            <v-btn
            :ripple="false"
             variant="text"  
             class="cursor-pointer text-none text-caption"
             size="xs"
             to="/"
            >
            <v-icon>
              <v-img to="/" src="../../assets/BazarIcon.png"></v-img>
            </v-icon>
              Save More on App
            </v-btn>
          </v-col>
        </v-row>
        <v-row class="pa-0 py-1">
          <v-col class="pa-0" md="2">
              <v-img to="/" class="cursor-pointer" max-height="60" src="../../assets/Bazar.png"></v-img>
          </v-col>
          <v-col class="" md="6">
            <v-row>
              <v-col v-if="showCategories" md="3">
              <v-btn
              
                color="white"
                variant="tonal"
              >
                Categories

                <v-menu activator="parent">
                  <v-list class="bg-success elevation-1">
                    <v-list-item
                      v-for="(item, index) in categories"
                      :key="index"
                      :value="index"
                      :to="{ name: 'Category', params: { categoryName: item } }"
                      class="bg-success"
                    >
                      <v-list-item-title>{{ item }}</v-list-item-title>
                    </v-list-item>
                  </v-list>
                </v-menu>
              </v-btn>
            </v-col>
            <v-col>
              <v-text-field
                placeholder="Search for products, brands and more"
                rounded="xl"
                variant="outlined"
                hide-details
                density="compact"
                bg-color="#F5F5F5"
                color="#F5F5F5"
                append-inner-icon="mdi-magnify"
              >
            </v-text-field>
            </v-col>
            </v-row>
          </v-col>
          <v-col class="pa-0 d-flex align-center justify-end" md="4">
            <v-btn
            v-if="!authStore.isAuthenticated"
            variant="text"
            class="text-subtitle-1 ml-5 text-none"
            prepend-icon="mdi-account-outline"
            to="/Login"
          >
            Login
          </v-btn>
          <v-btn
            v-else
            variant="text"
            class="text-subtitle-1 ml-5 text-none"
            prepend-icon="mdi-account-outline"
            @click="logout"
          >
            Logout
          </v-btn>
            <v-divider :thickness="2" class="my-3 mx-5" vertical></v-divider>
            <v-switch
              class=""
              hide-details
              inset
            ></v-switch>
            <v-btn
              class="text-subtitle-1 text-none"
              prepend-icon="mdi-earth"
              append-icon="mdi-chevron-down"
              :ripple="false"
              variant="text"
            >
              En
            </v-btn>
            <v-btn class="ml-5" icon :ripple="false" to="/Cart" >
              <v-badge :content="cartStore.cartCount">
                <v-icon icon="mdi-cart" size="x-large"></v-icon>
              </v-badge>
            </v-btn>
          </v-col>
        </v-row>
      </v-container>
  </v-app-bar>
</template>

<script lang="ts" setup>
import { ref, watch, onMounted } from 'vue';
import { useRoute } from 'vue-router';

import { useCategoryStore } from '@/store/category';
import { useAuthStore } from '@/store/auth';
import { useCartStore } from '@/store/cart';

const route = useRoute();
const showCategories = ref(true);

onMounted(() => {
if(route.path === '/' || route.path === ''){
  showCategories.value = false;
}
}),
watch(
  () => {
    return route.path;
  },
  (newPath) => {
    showCategories.value = newPath !== '/';
  }
);

const categoryStore = useCategoryStore();
const categories = ref<string[]>([]);
onMounted(async () => {
  await categoryStore.fetchCategories();
  categories.value = categoryStore.categories;
});
const authStore = useAuthStore();
const logout = () => {
  authStore.logout();
};

const cartStore = useCartStore();
onMounted(async () => {
  await cartStore.loadFromLocalStorage();
  console.log('Cart items:', cartStore.cartItems);
});


</script>
<style scoped>
.cursor-pointer{
  cursor: pointer !important;
}
</style>