// category.ts
import { defineStore } from 'pinia';
import { reactive } from 'vue';
// Define your own typings.
interface CategoryItem {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  // Add other properties as needed
}
export const useCategoryStore = defineStore('category', {
  state: () => ({
    categories: [] as string[],
    categoryData: reactive([] as CategoryItem[]),
  }),
  getters: {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    getCategoryIcon: (state) => (category: string): string => {
      const iconMapping: Record<string, string> = {
        electronics: 'mdi-fridge-outline',
        jewelery: 'mdi-diamond-stone',
        "men's clothing": 'mdi-hanger',
        "women's clothing": 'mdi-account-tie-woman',
        // Add more mappings as needed
      };

      return iconMapping[category] || 'mdi-help-circle-outline';
    },
  },
  actions: {
    async fetchCategories() {
      try {
        const response = await fetch('https://fakestoreapi.com/products/categories');
        const data = await response.json();
        this.setCategories(data);
      } catch (error) {
        console.error('Error fetching categories:', error);
      }
    },
    setCategories(categories = []) {
      this.categories = categories;
    },
    async fetchCategoryData(categoryName: string) {
      try {
        const response = await fetch(`https://fakestoreapi.com/products/category/${categoryName}`);
        const data = await response.json();
        this.setCategoryData(data);
      } catch (error) {
        console.error(`Error fetching data for category ${categoryName}:`, error);
      }
    },
    setCategoryData(data: CategoryItem[]) {
      this.categoryData = data;
    },
  },
});
