<template>
  <div class="footer">
      <div class="footer-logo">
          <h1 class="visually-hidden">Footer logo</h1>
          © Vuerbnb, Inc.
      </div>
      <div class="footer-links">
          <div class="footer-text-links">
          <h1 class="visually-hidden">Footer links</h1>
          <a href="#" v-for="(a,i) in footerLinks" :key="i">
              {{a}}
          </a> 
      </div>
      <div class="footer-social-links">
            <h1 class="visually-hidden">Footer social links</h1>
            <a href="#">
              <img src="../assets/images/icon/instagram-light.svg" alt="Instagram" />
          </a>
          <a href="#">
              <img src="../assets/images/icon/twitter-light.svg" alt="Twitter" />
          </a>
      </div>
      </div>
  </div>
</template>

<script>
export default {
    name: 'Footer',
    data() {
        return {
            footerLinks: ['Our website', 'About', 'Careers'],
        }
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

.footer {
    @include column-flexbox();
    padding: 24px;
    background-color: $grey-2b;
}

.footer-links {
    @include column-flexbox();
}

.footer-text-links {
    @include column-flexbox();
}

.footer-logo {
    @include text-style(footer-logo, $white);
    @include flexbox();
    height: 100px;
    margin-bottom: 12px;
}

.footer-text-links {
    @include text-style(footer-links, $white);
}

.footer-text-links a{
    margin-bottom: 32px;
}

.footer-text-links a:last-child{
    margin-bottom: 12px;
}

.footer-social-links {
    padding: 32px 0;
}

.footer-social-links a{
    margin-right: 48px;
}

.footer-social-links a:last-child{
    margin-right: 0;
}

@media screen and (min-width: 768px) {
    .footer {
        @include flexbox(between);
        flex-direction: row;
        height: 64px;
    }

    .footer-logo {
        margin-left: 64px;
        margin-bottom: 0;
    }

    .footer-links{
        flex-direction: row;
    }

    .footer-text-links {
        flex-direction: row;
    }

    .footer-text-links a{
        margin-bottom: 0;
        margin-right: 48px;
    }

    .footer-text-links a:last-child{
        margin-bottom: 0;
        margin-right: 40px;
    }

    .footer-social-links {
        padding: 40px 0;
    }

    .footer-social-links a{
        margin-right: 32px;
    }

    .footer-social-links a:last-child{
        margin-right: 64px;
    }
}

</style>