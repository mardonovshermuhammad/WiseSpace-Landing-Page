<template>
 <div>
 <div class="fixed w-full z-50"><Navbar/></div>
  <Header/>
  <Products/>
  <ProductsCard/>
  <features/>
  <pricingMain/>
  <Blog/>
  <Testimonials/>
  <Footer/>
  <MiniFooter></MiniFooter>
   <scroll class='absolute bottom-0' />
 </div>
</template>

<script setup lang="ts">
import scroll from '../components/ScrollToTop/scroll.vue'
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
