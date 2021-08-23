<template>
  <section class="recent-posts">
    <div class="recent-post-1">
      <div class="recent-post-thumblink">
        <img
          src="https://airbnb.design/wp-content/uploads/2021/06/WebHeaderLarge.png"
          alt="Recent post image"
        />
      </div>
      <div class="recent-post-texts">
        <div class="recent-post-title-group">
          <h1 class="recent-post-title">
            Learning Lessons
          </h1>
          <h1 class="recent-post-subtitle">
            How to build a Design education program for creative work
          </h1>
        </div>
        <div class="recent-post-categories">
          <div class="visually-hidden">
            Categories
          </div>
          <a href="#">
            Behind the scenes
          </a>
          <a href="#">
            Perspectives
          </a>
        </div>
      </div>
    </div>
    <div class="recent-post-2">
      <div class="recent-post-thumblink">
        <img
          src="https://airbnb.design/wp-content/uploads/2021/06/Leadership-archetypes-blog-header.png"
          alt="Recent post image"
        />
      </div>
      <div class="recent-post-texts">
        <div class="recent-post-title-group">
          <h1 class="recent-post-title">
            Archetypes for creative leadership
          </h1>
          <h1 class="recent-post-subtitle">
            How to define the behaviors you value
          </h1>
        </div>
        <div class="recent-post-categories">
          <div class="visually-hidden">
            Categories
          </div>
          <a href="#">
            Behind the scenes
          </a>
          <a href="#">
            Perspectives
          </a>
        </div>
      </div>
    </div>
    <div class="recent-post-3">
      <div class="recent-post-thumblink">
        <img
          src="https://airbnb.design/wp-content/uploads/2021/01/Header_Trauma-Informed-Design.jpg"
          alt="Recent post image"
        />
      </div>
      <div class="recent-post-texts">
        <div class="recent-post-title-group">
          <h1 class="recent-post-title">
            Designing for crisis
          </h1>
          <h1 class="recent-post-subtitle">
            5 learnings from developing trauma-informed products
          </h1>
        </div>
        <div class="recent-post-categories">
          <div class="visually-hidden">
            Categories
          </div>
          <a href="#">
            Behind the scenes
          </a>
          <a href="#">
            Case Study
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

.recent-post-1,
.recent-post-2,
.recent-post-3 {
  @include column-flexbox();
  margin-bottom: 48px;
  width: 100%;
  border: 1px solid $grey-2b;
}

.recent-post-1 img {
  width: auto;
  height: 30vh;
}

.recent-post-2 img {
  width: auto;
  height: 30vh;
}

.recent-post-3 img {
  width: auto;
  height: 30vh;
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
  margin-right: 10px;
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
