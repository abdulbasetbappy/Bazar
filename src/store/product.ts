// store/product.ts
import { defineStore } from 'pinia';

interface Product {
    title: string;
    price: number;
    description: string;
    category: string;
    image: string;
    id: number;
    rating: {
      rate: number;
      count: number;
    };
  // Add other product properties as needed
}

export const useProductStore = defineStore('product', {
  state: () => ({
    products: {}, // If you want to keep a list of all products
    productDetails: null as Product | null,
  }),
  actions: {
    async fetchProducts() {
      try {
        const response = await fetch('https://fakestoreapi.com/products');
        const data = await response.json();
        this.setProducts(data);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    },
    async fetchProductDetails(productId: number) {
      try {
        const response = await fetch(`https://fakestoreapi.com/products/${productId}`);
        const data = await response.json();
        this.setProductDetails(data);
      } catch (error) {
        console.error(`Error fetching product details for ID ${productId}:`, error);
      }
    },
    setProducts(products: Product[]) {
      this.products = products;
    },
    setProductDetails(productDetails: Product) {
      this.productDetails = productDetails;
    },
  },
});
