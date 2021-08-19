<template>
  <Navbar />
</template>

<script>
import Navbar from '/src/components/Navbar.vue'

export default {
  name: 'App',
  components: {
    Navbar
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
