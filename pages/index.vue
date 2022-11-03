<template>
 <div>
 <div class="fixed w-full z-50 shadow-lg shadow-black-300"><Navbar/></div>
  <Header/>
  <div class="mt-[-3px]"><Products/></div>
  <div class="mt-[-5px]"><ProductsCard/></div>
  <features/>
  <pricingMain/>
  <Blog/>
  <Testimonials/>
  <Footer/>
  <MiniFooter></MiniFooter>
 </div>
</template>

<script setup lang="ts">
import Header from './Header.vue'
import Navbar from './Navbar.vue'
import  Products from './Products.vue'
import ProductsCard from './ProductsCard.vue'
import features from "./Features.vue"
import pricingMain from './pricingMain.vue'
import Blog from './Blog.vue'
import Testimonials from "./Testimonials.vue"
import Footer from './Footer.vue'
import MiniFooter from '@/components/MiniFooter.vue'
</script>
