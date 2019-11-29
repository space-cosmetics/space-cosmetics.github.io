<template>
  <MainLayout :classNames="['space-cosmetics']">
    <transition name="fade" mode="out-in">
      <router-view/>
    </transition>
  </MainLayout>
</template>

<script>
import MainLayout from '@/layouts/MainLayout'
import greeting from '@/utils/greeting'

export default {
  name: 'app',
  mounted: greeting,
  components: { MainLayout }
}
</script>

<style></style>
