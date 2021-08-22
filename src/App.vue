<template>
  <GNB :menus="menus"/>
  <Footer />
  <newsletter />
</template>

<script>
import GNB from '/src/components/GNB.vue';
import Footer from '/src/components/Footer.vue';
import Newsletter from './components/Newsletter.vue';


export default {
  name: 'App',
  components: {
    GNB,
    Footer,
    Newsletter
  },
  data() {
    return {
      menus: ['Articles', 'Events', 'Videos', 'Projects'],
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
