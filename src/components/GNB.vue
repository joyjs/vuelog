<template>
  <div class="navbar">
    <div class="navbar-logo">
      <a href="/">
      <img src="../assets/images/logo.svg" alt="">
      </a>
    </div>
    <div class="navbar-hamburger-menu sm-only" >
      <button type="button" class="dropdown-closed" @click="toggleMenu">
        <img src="../assets/images/icon/hamburger-menu.svg" alt="">
      </button>
    </div>
  </div>
  <transition name="dissolve">
    <div class="navbar-dropdown sm-only" v-if="menuOpen == true">
    <a class="navbar-dropdown-menus" href="#" v-for="(a,i) in menus" :key="i">
      {{a}}
    </a>
    <a class="navbar-dropdown-icon-search" href="#">
      <img src="../assets/images/icon/search.svg" alt="">
    </a>
  </div>
  </transition>
</template>

<script>
export default {
    name: 'GNB',
      data() {
        return {
          menuOpen: false,
          menuDropdownOpen: false, 
        }
      },
      props: {
        menus: Array,
      },
      methods: {
        toggleMenu() {
          this.menuOpen = !this.menuOpen
        }
      },
}

</script>

<style lang="scss">
@import '../styles/constants/_typogarphy.scss';
@import '../styles/constants/_colors.scss';
@import '../styles/base/_reset.scss';
@import '../styles/base/_normalize.scss';
@import '../styles/base/_globals.scss';
@import '../styles/mixins/_text-style.scss';
@import '../styles/mixins/_flexbox.scss';


button {
  padding: 0;
  width: 64px;
  height: 64px;
}

/* transitions from here */
.dissolve-enter-from {
  opacity: 0;
  transform: translateY(-20px);
}
.dissolve-enter-active {
  transition: all ease-in-out 450ms;
}
.dissolve-enter-to {
  opacity: 1;
  transform: translateY(0px);
}

.dissolve-leave-from {
  opacity: 1;
  transform: translateY(0px);
}
.dissolve-leave-active {
  transition: all ease-in-out 450ms;
}
.dissolve-leave-to {
  opacity: 0;
  transform: translateY(-20px);
}
/* transitions to here */

.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 64px;
  border-bottom: 1px solid $grey-2b;
}

.navbar-logo {
  margin-left: 24px;
}
.navbar-hamburger-menu {
  width: 64px;
  height: 64px;
  padding: 0;
  background-color: $grey-D3;
  border-left: 1px solid $grey-2b;
  border-bottom: 1px solid $grey-2b;
}

.navbar-dropdown a {
  @include text-style(nav-link, $grey-2b);
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  height: 72px;
  padding: 0 24px;
  border-bottom: 1px solid $grey-2b;
}



</style>