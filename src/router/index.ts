// Composables
import { createRouter, createWebHistory } from 'vue-router'
import { useAuthStore } from '@/store/auth';


import HomeComponent from '@/views/Home.vue';
import AboutComponent from '@/views/About.vue';
import LoginComponent from '@/views/Login.vue';
import RegisterComponent from '@/views/Register.vue';
import CategoryComponent from '@/views/Category.vue';
import AllProductsComponent from '@/views/AllProducts.vue';
import SingleProductComponent from '@/views/SingleProduct.vue';
import CartComponent from '@/views/Cart.vue';

const routes = [
  {
    path: '/',
    component: () => import('@/layouts/default/Default.vue'),
    children: [
      {
        path: '',
        name: 'Home',
        component: HomeComponent,
        meta: { transition: 'fade' },
      },
      {
        path: '/About',
        name: 'About',
        component: AboutComponent,
        meta: { transition: 'slide-left' }, 
      },
      {
        path: '/Login',
        name: 'Login',
        component: LoginComponent,
        meta: { requiresAuth: false },
      },
      {
        path: '/Register',
        name: 'Register',
        component: RegisterComponent,
        meta: { requiresAuth: false }, 
      },
      {
        path: '/Category/:categoryName',
        name: 'Category',
        component: CategoryComponent,
      },
      {
        path: '/AllProducts',
        name: 'AllProducts',
        component: AllProductsComponent,
      },
      {
        path: '/product/:id', 
        name: 'SingleProduct',
        component: SingleProductComponent,
      },
      {
        path: '/Cart', 
        name: 'Cart',
        component: CartComponent,
      },
    ],
  },
]
const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

// Navigation guard
router.beforeEach((to, from, next) => {
  const authStore = useAuthStore();

  // Check if the route requires authentication
  const requiresAuth = to.matched.some((record) => record.meta.requiresAuth);

  // If the user is authenticated and trying to access the login or register page,
  // redirect to the home page
  if (authStore.isAuthenticated && (to.name === 'Login' || to.name === 'Register')) {
    next({ name: 'Home' });
  } else if (requiresAuth && !authStore.isAuthenticated) {
    // If the route requires authentication and the user is not authenticated,
    // redirect to the login page
    next({ name: 'Login' });
  } else {
    // Continue with the navigation
    next();
  }
});

export default router
