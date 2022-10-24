<template>
 <div>
 <div class="fixed w-full"><Navbar/></div>
  <Header/>
  <Products/>
  <ProductsCard/>
  <features/>
 </div>
</template>

<script setup lang="ts">
import Header from './Header.vue'
import Navbar from './Navbar.vue'
import  Products from './Products.vue'
import ProductsCard from './ProductsCard.vue'
import features from "./Features.vue"

</script>
