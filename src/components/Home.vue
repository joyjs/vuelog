<template>
  <RecentPost />
  <!-- <InfinitePost
    :infinitePost="infinitePost[i]"
    v-for="(a, i) in infinitePost"
    :key="i"
  /> -->
</template>

<script>
import RecentPost from './RecentPost.vue'
// import InfinitePost from './components/InfinitePost.vue'
export default {
  name: 'Home',
  components: {
    RecentPost
    // InfinitePost
  }
}
</script>

<style></style>
