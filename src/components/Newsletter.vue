<template>
  <section class="newsletter">
    <div class="newsletter-content">
      <h1 class="newsletter-title">
        Keep up to date with Vuerbnb’s creative team — <br />
        sign up for our newsletter and stay informed
      </h1>
      <div class="newsletter-input-group">
        <input
          type="email"
          placeholder="your@email.com"
          class="newsletter-input"
        />
        <button type="submit" class="newsletter-button">
          <img src="../assets/images/icon/mail.svg" alt="" />
          Keep in touch
        </button>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Newsletter'
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

.newsletter {
  @include column-flexbox();
  padding: 60px 24px 84px;
  text-align: center;
}

.newsletter-content {
  padding: 24px;
}

.newsletter-title {
  @include text-style(newsletter-title, $grey-2b);
  margin-bottom: 40px;
}

.newsletter-input-group {
  @include column-flexbox();
}

.newsletter-input {
  @include text-style(newsletter-input, $grey-2b);
  margin-bottom: 12px;
  width: 100%;
  height: 54px;
  border: 1px solid $grey-2b;
  text-align: center;
}

.newsletter-button {
  @include flexbox();
  @include text-style(button, $white);
  width: 100%;
  height: 56px;
  text-align: left;
  background-color: $grey-2b;
}

.newsletter-button img {
  margin-right: 12px;
}

@media screen and (min-width: 768px) {
  br {
    display: none;
  }

  .newsletter {
    padding: 84px 0;
  }

  .newsletter-title {
    margin-bottom: 40px;
  }

  .newsletter-input-group {
    flex-direction: row;
    padding: 0 60px;
  }

  .newsletter-input {
    padding-left: 40px;
    margin-right: 12px;
    margin-bottom: 0;
    width: 362px;
    text-align: left;
  }

  .newsletter-button {
    width: 224px;
  }
}
</style>
