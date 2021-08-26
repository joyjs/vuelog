<template>
  <section class="recent-posts container">
    <div class="row">
      <div class="column">
        <article class="recent-post-1">
          <a class="recent-post-thumblink" />
          <div class="recent-post-texts">
            <a class="recent-post-title-group">
              <h1 class="recent-post-title">
                Learning Lessons
              </h1>
              <h1 class="recent-post-subtitle">
                How to build a Design education program for creative work
              </h1>
            </a>
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
        </article>
      </div>
    </div>

    <div class="row sub-posts">
      <div class="column">
        <article class="recent-post-2">
          <a class="recent-post-thumblink" />

          <div class="recent-post-texts">
            <a class="recent-post-title-group">
              <h1 class="recent-post-title">
                Archetypes for creative leadership
              </h1>
              <h1 class="recent-post-subtitle">
                How to define the behaviors you value
              </h1>
            </a>
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
        </article>
      </div>
      <div class="column">
        <article class="recent-post-3">
          <a class="recent-post-thumblink" />
          <div class="recent-post-texts">
            <a class="recent-post-title-group">
              <h1 class="recent-post-title">
                Designing for crisis
              </h1>
              <h1 class="recent-post-subtitle">
                5 learnings from developing trauma-informed products
              </h1>
            </a>
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
        </article>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'RecentPost'
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

.container {
  @include column-flexbox();
}

.recent-posts {
  margin-top: 96px;
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

.recent-post-1,
.recent-post-2,
.recent-post-3 {
  width: 100%;
  height: auto;
  margin-bottom: 48px;
  border: 1px solid $grey-2b;
}

.recent-post-thumblink {
  @include flexbox();
  width: 100%;
  height: 30vh;
  overflow: hidden;
  margin-bottom: 32px;
}

.recent-post-1 .recent-post-thumblink {
  background-image: url('https://airbnb.design/wp-content/uploads/2021/06/WebHeaderLarge.png');
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
.recent-post-2 .recent-post-thumblink {
  background-image: url('https://airbnb.design/wp-content/uploads/2021/06/Leadership-archetypes-blog-header.png');
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
.recent-post-3 .recent-post-thumblink {
  background-image: url('https://airbnb.design/wp-content/uploads/2021/01/Header_Trauma-Informed-Design.jpg');
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}

.recent-post-texts {
  @include column-flexbox(between, start);
  padding: 0 8px 24px;
  min-height: 312px;
}

.recent-post-title {
  @include text-style(h1, $grey-2b);
  display: inline;
}

.recent-post-subtitle {
  @include text-style(h1-subtitle, $grey-76);
  display: inline;
}

.recent-post-categories {
  @include text-style(categories, $grey-4a);
  margin-left: 0;
}

.recent-post-categories a::after {
  content: ',';
}

.recent-post-categories a:last-child::after {
  content: '';
}

@media screen and (min-width: 768px) {
  .column {
    flex: 1;
  }

  .recent-post-texts {
    min-height: 0;
  }

  .recent-post-1 {
    border: none;
    margin-bottom: 64px;
  }

  .recent-post-1 .recent-post-thumblink {
    height: 592px;
    overflow: visible;
    margin-bottom: 0;
  }

  .recent-post-1 .recent-post-title-group {
    margin-bottom: 32px;
  }

  .recent-post-1 .recent-post-texts {
    padding: 24px 4px;
    width: 50%;
    transform: translateY(-73px);
    border: 1px solid $grey-2b;
    background-color: $white;
  }

  .sub-posts {
    gap: 64px;
  }

  .recent-post-2,
  .recent-post-3 {
    width: 100%;
    height: auto;
  }

  .recent-post-2 .recent-post-thumblink {
    max-height: 420px;
    width: 100%;
  }

  .recent-post-2 .recent-post-texts {
    min-height: 152px;
  }

  .recent-post-2 .recent-post-title-group {
    margin-bottom: 32px;
  }

  .recent-post-3 .recent-post-thumblink {
    max-height: 420px;
    width: 100%;
  }

  .recent-post-3 .recent-post-texts {
    min-height: 152px;
  }
  .recent-post-3 .recent-post-title-group {
    margin-bottom: 32px;
  }
}
</style>
