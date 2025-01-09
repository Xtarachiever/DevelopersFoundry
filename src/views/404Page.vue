<template>
  <AuthLayout :404="404">
     <div>
      <img src="/404.png" alt="404"/>
      <p class="text-center">Go Back to 
        <RouterLink to="/dashboard">
          <span class="text-green">Dashboard</span>
        </RouterLink>
      </p>
     </div>
  </AuthLayout>
</template>

<script>
import AuthLayout from '@/components/layouts/AuthLayout.vue'
export default {
  components:{
    AuthLayout
  },
  props:['404']
}
</script>

<style>

</style>