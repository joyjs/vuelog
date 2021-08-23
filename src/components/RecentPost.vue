<template>
  <section class="recent-posts">
    <div class="recent-post">
      <div class="recent-post-thumblink">
        <img :src="recentPost.image" alt="Recent post image" />
      </div>
      <div class="recent-post-texts">
        <div class="recent-post-title-group">
          <h1 class="recent-post-title">
            {{ recentPost.title }}
          </h1>
          <h1 class="recent-post-subtitle">
            {{ recentPost.subtitle }}
          </h1>
        </div>
        <div class="recent-post-categories">
          <div class="visually-hidden">
            Categories
          </div>
          <a href="#" v-for="(a, i) in recentPost.categories" :key="i">
            {{ a }}
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'RecentPost',
  props: {
    recentPost: Object
  }
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

.recent-posts {
  @include column-flexbox();
  padding: 0 24px;
}

.recent-post {
  @include column-flexbox();
  margin-bottom: 48px;
  width: 100%;
  border: 1px solid $grey-2b;
}

.recent-post img {
  width: auto;
  height: 168px;
}

.recent-post-thumblink {
  @include flexbox();
  width: 100%;
  margin-bottom: 32px;
  overflow: hidden;
}

.recent-post-texts {
  padding: 0 8px;
}

.recent-post-title-group {
  margin-bottom: 32px;
}

.recent-post-title {
  @include text-style(h1, $grey-2b);
  display: inline;
  margin: 0 10px 0 0;
}

.recent-post-subtitle {
  @include text-style(h1-subtitle, $grey-76);
  display: inline;
  margin: 0;
}

.recent-post-categories {
  margin-bottom: 24px;
}

.recent-post-categories a::after {
  content: ',';
}

.recent-post-categories a:last-child:after {
  content: '';
}
</style>
