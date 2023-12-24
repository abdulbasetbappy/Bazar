<template>
    <v-container>
        <v-row>
            <v-col cols="12" md="3">
                <v-card elevation="1" class="mt-5">
                  <v-list class=" bg-success">
                    <v-list-item
                      v-for="(item, index) in categories"
                      :key="index"
                      :value="index"
                      class="bg-success"
                      :to="{ name: 'Category', params: { categoryName: item.category } }"
                    >
                      <v-list-item-title>{{ item.label }}</v-list-item-title>
                    </v-list-item>
                  </v-list>
                </v-card>
            </v-col>
            <v-col cols="12" md="9">
                <v-carousel show-arrows="hover" 
                cycle
                height="350"
                >
                    <v-carousel-item cover>
                        <v-img
                            src="@/assets/banner/banner1.jpg"
                            height="350"
                        ></v-img>
                    </v-carousel-item>
                    <v-carousel-item cover>
                        <v-img
                            src="@/assets/banner/banner2.jpg"
                            height="350"
                        ></v-img>
                    </v-carousel-item>
                    <v-carousel-item cover>
                        <v-img
                            src="@/assets/banner/banner-3.jpg"
                            height="350"
                        ></v-img>
                    </v-carousel-item>
                    <v-carousel-item cover>
                        <v-img
                            src="@/assets/banner/banner-4.jpg"
                            height="350"
                        ></v-img>
                    </v-carousel-item>
                    <v-carousel-item cover>
                        <v-img
                            src="@/assets/banner/banner-5.jpg"
                            height="350"
                        ></v-img>
                    </v-carousel-item>
                    <v-carousel-item cover>
                        <v-img
                            src="@/assets/banner/banner-6.jpg"
                            height="350"
                        ></v-img>
                    </v-carousel-item>
                </v-carousel>
            </v-col>
        </v-row>
        <v-row>
            <v-img src="../assets/banner/banner-22.gif"></v-img>
        </v-row>
        <v-row>
            <v-col class="d-flex my-5 justify-center align-center" >
                <v-btn 
                prepend-icon="mdi-shield-star"
                size="x-large"
                color="orange-darken-4"
                elevation="0"
                variant="tonal"
                class="text-none"
                rounded="0"
                >
                Safe Payment
                </v-btn>
                <v-btn 
                prepend-icon="mdi-truck-delivery-outline"
                size="x-large"
                color="orange-darken-4"
                elevation="0"
                variant="tonal"
                class="text-none"
                rounded="0"
                >
                Nationwide Delivery
                </v-btn>
                <v-btn 
                prepend-icon="mdi-bank"
                size="x-large"
                color="orange-darken-4"
                elevation="0"
                variant="tonal"
                class="text-none"
                rounded="0"
                >
                Free & Easy Returns
                </v-btn>
                <v-btn 
                prepend-icon="mdi-sale-outline"
                size="x-large"
                color="orange-darken-4"
                elevation="0"
                variant="tonal"
                class="text-none"
                rounded="0"
                >
                100% Authentic Products
                </v-btn>
                <v-btn 
                prepend-icon="mdi-check-decagram-outline"
                size="x-large"
                color="orange-darken-4"
                elevation="0"
                variant="tonal"
                class="text-none"
                rounded="0"
                >
                Daraz Verified
                </v-btn>
            </v-col>
        </v-row>
        <v-row>
            <v-text class="text-h4 font-weight-bold">Categories</v-text>
            <v-col cols="12" class="d-flex justify-center align-center">
                <v-list width="800" class="bg-transparent">
                    <v-btn 
                    v-for="(item, index) in categories" 
                    :key="index" 
                    :value="index" 
                    stacked 
                    class="ml-5 bg-transparent text-none" 
                    size="x-large" 
                    :to="{ name: 'Category', params: { categoryName: item.category } }">
                        <v-list-item>
                        <v-list-item-avatar>
                            <v-icon>{{ categoryStore.getCategoryIcon(item.category) }}</v-icon>
                        </v-list-item-avatar>
                        <v-list-item-title>{{ item.label }}</v-list-item-title>
                        </v-list-item>
                    </v-btn>
                </v-list>
            </v-col>
        </v-row>
        <v-row v-if="jeweleryCategoryData.length > 0">
            <v-text class="text-h4 font-weight-bold my-5">Jewelery</v-text>
            <v-row>
                <v-col 
                v-for="(item, index) in jeweleryCategoryData.slice(0, 4)" 
                :key="index" 
                cols="12" 
                md="3">
                    <v-card
                    class="bg-white pa-5" >
                    <v-card-img>
                            <v-img :src="item.image" height="200"></v-img>
                        </v-card-img>
                    <v-card-title>{{ item.title }}</v-card-title>
                    <v-card-subtitle class="mb-3">$ {{ item.price }}</v-card-subtitle>
                    <router-link :to="`/product/${(item as any).id}`" class="ml-3">
                        <v-btn color="primary text-none">See More</v-btn>
                    </router-link>
                    </v-card>
                </v-col>
            </v-row>
        </v-row>
        <v-row v-if="electronicsCategoryData.length > 0">
            <v-text class="text-h4 font-weight-bold my-5">Electronics</v-text>
            <v-row>
                <v-col v-for="(item, index) in electronicsCategoryData.slice(0, 4)" :key="index" cols="12" md="3">
                    <v-card class="bg-white pa-5">
                        <v-card-img>
                            <v-img :src="item.image" height="200"></v-img>
                        </v-card-img>
                    <v-card-title>{{ item.title }}</v-card-title>
                    <v-card-subtitle class="mb-3">$ {{ item.price }}</v-card-subtitle>
                    <router-link :to="`/product/${(item as any).id}`" class="ml-3">
                        <v-btn color="primary text-none">See More</v-btn>
                    </router-link>
                    </v-card>
                </v-col>
            </v-row>
        </v-row>
        <v-row v-if="mensClothingCategoryData.length > 0">
            <v-text class="text-h4 font-weight-bold my-5">Men's Clothing</v-text>
            <v-row>
                <v-col v-for="(item, index) in mensClothingCategoryData.slice(0, 4)" :key="index" cols="12" md="3">
                    <v-card class="bg-white pa-5">
                        <v-card-img>
                            <v-img :src="item.image" height="200"></v-img>
                        </v-card-img>
                    <v-card-title>{{ item.title }}</v-card-title>
                    <v-card-subtitle class="mb-3">$ {{ item.price }}</v-card-subtitle>
                    <router-link :to="`/product/${(item as any).id}`" class="ml-3">
                        <v-btn color="primary text-none">See More</v-btn>
                    </router-link>
                    </v-card>
                </v-col>
            </v-row>
        </v-row>
        <v-row v-if="womensClothingCategoryData.length > 0">
            <v-text class="text-h4 font-weight-bold my-5">Women's Clothing</v-text>
            <v-row>
                <v-col v-for="(item, index) in womensClothingCategoryData.slice(0, 4)" :key="index" cols="12" md="3">
                    <v-card class="bg-white pa-5">
                        <v-card-img>
                            <v-img :src="item.image" height="200"></v-img>
                        </v-card-img>
                    <v-card-title>{{ item.title }}</v-card-title>
                    <v-card-subtitle class="mb-3">$ {{ item.price }}</v-card-subtitle>
                    <router-link :to="`/product/${(item as any).id}`" class="ml-3">
                        <v-btn color="primary text-none">See More</v-btn>
                    </router-link>
                    </v-card>
                </v-col>
            </v-row>
        </v-row>
        <v-row class="d-flex justify-center align-center">
            <v-btn to="/AllProducts" class="my-5">See All Products</v-btn>
        </v-row>
    </v-container>
</template>

<script setup lang="ts">
import { ref, onMounted  } from 'vue';
import { useCategoryStore } from '@/store/category';

interface Category {
  label: string;
  category: string;
}
interface CategoryData {
    id: number;
    title: string;
    price: number;
    description: string;
    category: string;
    image: string;
}


const categoryStore = useCategoryStore();
const categories = ref<Category[]>([]);
const jeweleryCategoryData = ref<CategoryData[]>([]);
const electronicsCategoryData = ref<CategoryData[]>([]);
const mensClothingCategoryData = ref<CategoryData[]>([]);
const womensClothingCategoryData = ref<CategoryData[]>([]);

onMounted(async () => {
  // Fetch categories   
  await categoryStore.fetchCategories();
  categories.value = categoryStore.categories.map((category: any) => ({
    label: category,
    category: category,
  }));

  // Fetch categoryData for a specific category (e.g., 'jewelery')
  await categoryStore.fetchCategoryData('jewelery');
  jeweleryCategoryData.value = categoryStore.categoryData;

    // Fetch categoryData for 'electronics'
    await categoryStore.fetchCategoryData('electronics');
  electronicsCategoryData.value = categoryStore.categoryData;

      // Fetch categoryData for 'men's clothing'
      await categoryStore.fetchCategoryData("men's clothing");
  mensClothingCategoryData.value = categoryStore.categoryData;

        // Fetch categoryData for 'men's clothing'
        await categoryStore.fetchCategoryData("women's clothing");
  womensClothingCategoryData.value = categoryStore.categoryData;
});
</script>

<style lang="scss" scoped>

</style>