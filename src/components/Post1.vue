<template>
  <section class="post container">
    <div class="row">
      <div class="column">
        <article class="post-hero">
          <img :src="infinitePost[4].image" alt="Post image" />
          <div class="post-hero-texts">
            <div class="post-hero-title-group">
              <h1 class="post-hero-title">
                {{ infinitePost[4].title }}
              </h1>
              <h1 class="post-hero-subtitle">
                {{ infinitePost[4].subtitle }}
              </h1>
            </div>
            <div class="post-hero-categories">
              <div class="visually-hidden">
                Categories
              </div>
              <a href="#" v-for="(a, i) in infinitePost[4].categories" :key="i">
                {{ a }}
              </a>
            </div>
          </div>
        </article>
      </div>
      <div class="row">
        <div class="column">
          <article class="post-content">
            <p class="post-content-body">
              Anyone not allowed in America is welcome on Airbnb. We are
              providing free housing to refugees and anyone affected by the new
              travel ban. If you or someone you know is in need of accommodation
              as a result of this new policy, please contact
              <a href="mailto:#">brian.chesky@airbnb.com</a> with details
              regarding your situation. If you are able to host these
              communities in need via Airbnb, you can sign up
              <a href="#">here</a>. For more information regarding our long term
              efforts <a href="#">go here</a>.
            </p>
          </article>
        </div>
      </div>
      <div class="row">
        <div class="column">
          <div class="button-group">
            <button type="button" class="button-share">
              <a href="#" class="button-share-instagram">
                <img
                  src="../assets/images/icon/instagram-lined-dark.svg"
                  alt=""
                />
                <h3 class="button">
                  Share
                </h3>
              </a>
            </button>
            <button type="button" class="button-share">
              <a href="#" class="button-share-twitter">
                <img
                  src="../assets/images/icon/twitter-lined-dark.svg"
                  alt=""
                />
                <h3 class="button">
                  Tweet
                </h3>
              </a>
            </button>
          </div>
        </div>
      </div>
      <!-- <div class="row">
        <div class="author">
          <div class="author-image">
            <img src="#" alt="" />
          </div>
          <div class="author-desc"></div>
        </div>
      </div> -->
      <hr />
      <div class="next">
        <div class="row next-title">
          <h4>Up next</h4>
        </div>
        <div class="row infinite-posts">
          <div class="column">
            <div class="infinite-post-1">
              <a href="#" class="infinite-post-image">
                <img :src="infinitePost[7].image" alt="" />
              </a>

              <a href="#" class="infinite-post-texts">
                <div class="infinite-post-title-group">
                  <h2 class="infinite-post-title">
                    {{ infinitePost[7].title }}
                  </h2>
                  <h2 class="infinite-post-subtitle">
                    {{ infinitePost[7].subtitle }}
                  </h2>
                </div>
                <div class="infinite-post-categories">
                  <a
                    href="#"
                    v-for="(a, i) in infinitePost[7].categories"
                    :key="i"
                  >
                    {{ a }}
                  </a>
                </div>
              </a>
            </div>
          </div>
          <div class="column">
            <div class="infinite-post-2">
              <a href="#" class="infinite-post-image" target="_blank">
                <img :src="infinitePost[8].image" alt="" />
              </a>

              <div class="infinite-post-texts">
                <div class="infinite-post-title-group">
                  <h2 class="infinite-post-title">
                    {{ infinitePost[8].title }}
                  </h2>
                  <h2 class="infinite-post-subtitle ">
                    {{ infinitePost[8].subtitle }}
                  </h2>
                </div>

                <div class="infinite-post-categories">
                  <a
                    href="#"
                    v-for="(a, i) in infinitePost[8].categories"
                    :key="i"
                  >
                    {{ a }}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Post1',
  props: {
    recentPost: Object,
    infinitePost: Object
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

/* global */

em {
  font-family: inherit;
  font-weight: inherit;
  font-size: inherit;
  line-height: inherit;
  letter-spacing: inherit;
  font-style: italic;
}

hr {
  margin-bottom: 32px;
  box-sizing: border-box;
  width: 100%;
  border: 1px solid $grey-d3;
  overflow: hidden;
}

/* layout */

.container {
  @include column-flexbox();
}

.row {
  @include flexbox();
  flex-wrap: wrap;
  width: 100%;
  background-color: $white;
}

.column {
  @include column-flexbox();
  width: 100%;
  flex-basis: 100%;
  background-color: $white;
}

/* post hero */

.post-hero img {
  width: 100vw;
  height: auto;
}
.post-hero-texts {
  @include column-flexbox(between, start);
  padding: 32px 24px;
  min-height: 248px;
  background-color: $white;
}

.post-hero-title-group {
  margin-bottom: 32px;
}

.post-hero-title {
  @include text-style(h1, $grey-2b);
  display: inline;
}

.post-hero-subtitle {
  @include text-style(h1-subtitle, $grey-76);
  margin: 0;
}

.post-hero-categories {
  @include text-style(categories, $grey-4a);
  width: 75%;
  margin-left: 0;
}

.post-hero-categories a::after {
  content: ', ';
}

.post-hero-categories a:last-child::after {
  content: '';
}

/* post content */

.post-content {
  overflow: hidden;
}

.post-content-title {
  margin-bottom: 32px;
}

.post-content-body {
  @include text-style(body, $grey-2b);
  width: 100%;
  margin-bottom: 32px;
}

.post-content-body a {
  text-decoration: underline $green solid 1px;
  transition: 250ms ease-in-out;
}
.post-content-body a:hover {
  color: $green;
}

.post-content-blockquote-divider {
  width: 25%;
  margin: 60px 0;
  border: 1px solid $green;
}

.post-content-blockquote {
  @include text-style(blockquote, $grey-2b);
  color: $green;
}

.post-content-list {
  padding-left: 40px;
}

.post-content-body strong {
  @include text-style(body, $grey-2b);
  font-weight: 700;
}

.post-content-list-title {
  @include text-style(list-title, $grey-2b);
}

.post-content-image img {
  margin-bottom: 32px;
  width: 100%;
  height: auto;
}

/* buttons */

.button-group {
  @include column-flexbox();
  margin: 48px 0;
  gap: 24px;
}

.button-share a {
  @include flexbox();
  max-width: 163px;
  height: 54px;
  padding: 15px 40px;
  border: 1px solid $grey-76;
  background-color: $grey-ef;
}

.button-share img {
  margin-right: 12px;
}

.button-share h3 {
  @include text-style(button, $grey-2b);
}

/* author */
/* 
.author {
  @include column-flexbox();
  margin: 96px 0;
}

.author-image img {
  margin-bottom: 32px;
  width: 100px;
  height: 100px;
  border-radius: 100px;
}

.author-desc {
  @include text-style(h3-subtitle, $grey-2b);
} */

/* up next */
.next {
  @include column-flexbox(start);
  margin: 72px 0 24px;
}

.next h4 {
  @include text-style(h4, $grey-2b);
  margin-bottom: 32px;
}

.next-title {
  @include flexbox(start);
}

.infinite-posts {
  gap: 48px;
}

.infinite-post-1,
.infinite-post-2 {
  @include column-flexbox(start);
  max-width: 272px;
  overflow: hidden;
  border: 1px solid $grey-2b;
}

.infinite-post-image {
  @include flexbox();
  width: auto;
  max-height: 168px;
  overflow: hidden;
  margin-bottom: 32px;
}

.infinite-post-image img {
  width: auto;
  height: 30vh;
}

.infinite-post-texts {
  @include column-flexbox(between, start);
  height: 168px;
  padding: 0 8px 24px 8px;
}

.infinite-post-title {
  @include text-style(h2, $grey-2b);
  display: inline;
  margin-right: 4px;
}

.infinite-post-subtitle {
  @include text-style(h2-subtitle, $grey-76);
  display: inline;
}

.infinite-post-categories {
  @include inline-flexbox();
}

.infinite-post-categories a::after {
  content: ', ';
}

.infinite-post-categories a:last-child::after {
  content: '';
}

@media screen and (min-width: 768px) {
  /* layout */
  .column {
    flex: 1;
  }
  /* post hero */

  .post-hero-texts {
    padding: 24px;
    margin-left: 96px;
    width: 50%;
    max-height: 208px;
    transform: translateY(-73px);
    border: 1px solid $grey-2b;
    background-color: $white;
  }

  /* post content */

  .post-content {
    padding: 0 240px;
  }

  .post-content-body {
    @include text-style(body-desktop);
  }

  .post-content-list-title {
    @include text-style(list-title-desktop);
  }

  /* buttons */

  .button-group {
    flex-direction: row;
    margin: 84px 0;
    gap: 48px;
  }

  /* author */

  /* .author {
    @include flexbox();
    flex-direction: row;
    padding: 48px 240px;
  }

  .author-image {
    margin-right: 48px;
  }

  .author-image img {
    margin: 0;
  }

  .author-desc {
    max-width: 580px;
  } */

  /* next */
  .infinite-posts {
    @include flexbox();
    gap: 48px;
  }

  .infinite-post-1,
  .infinite-post-2 {
    max-width: 432px;
    max-height: 392px;
  }

  .infinite-post-image {
    @include flexbox();
    margin-bottom: 32px;
    width: auto;
    max-height: 216px;
    overflow: hidden;
  }

  .infinite-post-image img {
    width: auto;
    height: 50vh;
  }

  .infinite-post-texts {
    max-height: 144px;
  }
}
</style>
