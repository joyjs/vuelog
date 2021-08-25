<template>
  <GNB :menus="menus" />
  <RecentPost />
  <!-- <InfinitePost
    :infinitePost="infinitePost[i]"
    v-for="(a, i) in infinitePost"
    :key="i"
  /> -->
  <Newsletter />
  <Footer />
</template>

<script>
import recentPost from './assets/recent-post'
import infinitePost from './assets/infinite-post'
import GNB from './components/GNB.vue'
import RecentPost from './components/RecentPost.vue'
// import InfinitePost from './components/InfinitePost.vue'
import Newsletter from './components/Newsletter.vue'
import Footer from './components/Footer.vue'

export default {
  name: 'App',
  components: {
    GNB,
    RecentPost,
    // InfinitePost,
    Newsletter,
    Footer
  },
  data() {
    return {
      menus: ['Articles', 'Events', 'Videos', 'Projects'],
      recentPost: recentPost,
      infinitePost: infinitePost
    }
  }
}
</script>

<style lang="scss">
@import './styles/constants/_typogarphy.scss';
@import './styles/constants/_colors.scss';
@import './styles/base/_reset.scss';
@import './styles/base/_normalize.scss';
@import './styles/base/_globals.scss';
@import './styles/mixins/_text-style.scss';
@import './styles/mixins/_flexbox.scss';

.container {
  margin: 0 24px;
  background-color: $green;
}
</style>
