<template>
  <section class="post container">
    <div class="row">
      <div class="column">
        <article class="post-hero">
          <img :src="recentPost[0].image" alt="Post image" />
          <div class="post-hero-texts">
            <div class="post-hero-title-group">
              <h1 class="post-hero-title">
                {{ recentPost[0].title }}
              </h1>
              <h1 class="post-hero-subtitle">
                {{ recentPost[0].subtitle }}
              </h1>
            </div>
            <div class="post-hero-categories">
              <div class="visually-hidden">
                Categories
              </div>
              <a href="#" v-for="(a, i) in recentPost[0].categories" :key="i">
                {{ a }}
              </a>
              Stephanie Szabó
            </div>
          </div>
        </article>
      </div>
      <div class="row">
        <div class="column">
          <article class="post-content">
            <p class="post-content-body">
              When I began my Design career, the barriers to entry were great.
              Education was expensive, portfolios required experience, and
              access to knowledge was inequitable. While some of these hurdles
              have lessened — it’s still hard to grow in your practice once you
              work, because the value of professional development is not widely
              understood. This is precisely why after years of practicing as a
              Designer, I made the transition to Educator; I saw an opportunity
              to positively influence and make systematic changes to adult
              education.
            </p>
            <hr />

            <h2 class="post-content-title">
              Learning at work matters
            </h2>
            <p class="post-content-body">
              Look around and you’ll see that learning as a discipline is
              sprouting all over business. As organizations strive to gain a
              competitive advantage and adapt to the future of hybrid work –
              there’s a greater need to align and develop employees.
              Organizations that value learning will develop an ecosystem of
              educational opportunities such as
              <em>onboarding</em> to ramp-up employees (a fit and retention
              lever), <em>continuous education</em> to improve their managers’
              people leadership skills (an HR lever) or <em>training</em> to
              educate communities on processes or policies (a compliance lever).
              For organizations that require further specialization of their
              workforce, another type of learning is on the rise:
              <em>functional education</em>.
            </p>
            <hr />

            <h2 class="post-content-title">
              Enter functional education
            </h2>
            <p class="post-content-body">
              Functional education focuses on the technical and increasingly
              perishable skills of a discipline. This type of learning is
              imperative for product-related roles in the Tech industry because
              they require constant upskilling to stay current. Most people find
              it sobering to learn that the average shelf life of technical
              skills is quite short. Some research suggests that it is roughly
              less than
              <a
                href="https://www.ibm.com/blogs/ibm-training/skills-transformation-2021-workplace/"
                target="_blank"
                class="post-content-body"
                >two and a half years</a
              >
              and that more durable mindset skills like Design Thinking, have an
              average half life of 3.75 years. What’s more, unlike regulated
              professions such as Law or Medicine, Design is the Wild West:
              there’s very few standards enforcing quality.
            </p>
            <hr />

            <h2 class="post-content-title">
              Design Learning at Airbnb
            </h2>
            <p class="post-content-body">
              We launched the Design Learning program within Airbnb to help our
              team blossom in their creative craft. Cultivating in-house
              expertise is worth the squeeze, because learning within our shared
              context immediately makes education more resonant and applicable
              for Airbnb. Our learning strategy is specifically rooted in craft
              – because it’s ultimately the strongest lever the Design function
              can contribute to the company. But what exactly is craft?
            </p>

            <hr class="post-content-blockquote-divider" />
            <blockquote class="post-content-blockquote">
              <em>Craft</em> is a cliche term that’s hard to explain in a fresh
              way. For Airbnb’s Design Learning program, craft is the 1% of
              details that unlock the remaining 99% of the experience.
            </blockquote>
            <hr class="post-content-blockquote-divider" />
            <p class="post-content-body">
              With less than a year under our belt, we’ve seen a huge appetite
              for the learning of Design – both within and beyond the function.
              Over ⅕ of the entire company across 18 global offices have
              completed at least one course. Open enrollment to all employees
              means we’re not just educating our Design team, we’re educating
              our cross-functional peers on how to make better Design-led
              decisions. Our learners choose from a catalogue of 16 unique
              Design courses and 91% of them agree that “participating in the
              Design Learning program helps me grow at Airbnb”. All of this was
              accomplished in just a few short months, with less than $3K spent,
              amidst a global pandemic and with a Design Learning team of one.
              So how did we do it?
            </p>
            <hr />

            <h2 class="post-content-title">
              Going behind the scenes
            </h2>
            <p class="post-content-body">
              If there’s anything we learned from launching an education program
              from 0-1, it’s that cultivating stakeholder commitment is the
              single most important thing you can do to ensure learning has
              longevity. We recognize there’s a lot to learn about functional
              education and we don’t have all the answers. Our hope is that by
              sharing the behind the scenes we can advance the practice of
              Design. That said, here are the three high-level stakeholder
              challenges we encountered when building our education program and
              how we tackled them.
            </p>

            <ol class="post-content-list">
              <h4 class="post-content-list-title">
                1. Commitment from the organization
              </h4>
              <p class="post-content-body">
                Organizations may say that they want to weave learning into
                their culture, but after that, the details can get hazy. Be
                prepared for stakeholders to have different responses to
                learning, and that some might not care about it at all. While
                developing curriculum is tangible and teaching learners is
                satisfying — all that is irrelevant if you don’t have nuanced
                clarity on two key questions: “What’s the value of learning?”
                and “Who benefits from learning?”
              </p>
            </ol>

            <div class="post-content-image">
              <img
                class="post-content-image-1"
                src="https://airbnb.design/wp-content/uploads/2021/06/Airbnb_DesignLearning02-1.png?resize=2048,679"
                alt="Image of 1. Commitment from the organization"
              />
            </div>
            <p class="post-content-body" aria-label="Image caption">
              <em>Course Impact Reports used for influence</em>
            </p>

            <p class="post-content-body post-content-list">
              <strong>Our Approach.</strong> Find metrics that matter. Then, tie
              your learning offerings to influence these desired outcomes. When
              our program began it was so new that we couldn’t get our
              stakeholders to connect program participation with performance
              reviews. We didn’t have the time, track record or even an LMS
              (Learning Management System). In response to our team’s budding
              learning culture, we designed <em>Course Impact Reports</em> as a
              form of influence. Each report acts as a snapshot of the learning
              experience that describes the course, highlights data like
              behavioral change and sentiment like learner quotes. Two weeks
              before performance review season each report is emailed to
              Managers with a personal message to provide them context and fuel
              for Talent calibrations. Creating these reports is a heavy manual
              lift but they’ve also proven to be one of our most successful and
              scrappy communication tools. Stakeholders can now see the impact
              of our education no matter their level of their involvement.
            </p>

            <ol class="post-content-list">
              <h4 class="post-content-list-title">
                2. Commitment from leaders
              </h4>
              <p class="post-content-body">
                There are so many ways for an organization’s leaders to support
                learning: sponsorship, resourcing, budget and participation are
                just a few. However we learned early on that the most engaged
                program audience would not be leaders, it was Design ICs. This
                makes sense given their responsibilities; ICs are often the ones
                doing the craft and developing new skills is a vehicle for
                growth. We needed Design leadership to be equally engaged.
              </p>
            </ol>

            <div class="post-content-image">
              <img
                class="post-content-image-2"
                src="https://airbnb.design/wp-content/uploads/2021/06/Airbnb_DesignCourses.png?resize=2048,678"
                alt="Image of 2. Commitment from leaders"
              />
            </div>
            <p class="post-content-body" aria-label="Image caption">
              <em>Design Courses created by our Curriculum Steering Teams</em>
            </p>

            <p class="post-content-body post-content-list">
              <strong>Our Approach.</strong> In response to our teams’ mixed
              engagement needs we created <em>Curriculum Steering Teams</em>.
              These rotating teams of 5-7 SMEs (subject matter experts) lead
              seven different focus areas of Design and are curated for diverse
              functional expertise. Each team has a main representative that
              liaises between the group and the Design Learning program, while
              the rotating composition allows for anyone to influence the future
              of their craft. Having learning representatives from all corners
              of the Design function allowed us to amplify unheard voices and
              integrate bigger visions into our trajectory. It also meant that
              we had representation from every leader’s part of the Design
              function. It’s not a perfect solution to get all leaders’
              commitment to learning, but it does scale equity and education
              very well.
            </p>

            <ol class="post-content-list post-content-list">
              <h4 class="post-content-list-title">
                3. Commitment from learners
              </h4>
              <p class="post-content-body">
                From my experience educating graduate students to executives,
                how learning is presented can be just as important as what
                learning is presented. When polling the Design team about their
                preferences, we discovered that 73% of our team wanted learning
                to be like studio time: dedicated practice of hands-on
                application with real-time feedback on their craft from peers.
                This preference contradicted many popular (and frankly more
                scalable) learning formats such as lectures, speaker series and
                pre-recorded videos to watch alone. We also learned that while
                exposure from external perspectives was desired, the ability to
                “work with top talent at Airbnb” was a major catalyst for
                conversion and retention. We don’t yet know the specific reasons
                for these preferences but our hunch is it has to do with
                dialogue. The rapid back and forth of ideas – through oral,
                auditory or visual learning styles – is how subjective work
                often improves and how the culture of critique often works in
                Design. Learning this way has positively contributed to our
                teams’ sense of belonging as we continue to work more remotely.
              </p>
            </ol>

            <div class="post-content-image">
              <img
                src="https://airbnb.design/wp-content/uploads/2021/06/Airbnb_FacilitatingLearning.png?resize=2048,682"
                alt="Image of 3. Commitment from learners"
              />
            </div>
            <p class="post-content-body" aria-label="Image caption">
              <em
                >Our Community of Facilitators complete a workshop on how to
                guide understanding</em
              >
            </p>

            <p class="post-content-body post-content-list">
              <strong>Our Approach.</strong> In response to our Design
              function’s learning format needs, we knew we needed learning to be
              led by other Designers. So, we created a
              <em>Community of Facilitators</em>. Approximately ¼ of the Design
              team are nominated to learn the art form of facilitation and guide
              their peers’ learning. Each Design Course we offer is hosted live
              by a Facilitator and based on a “learn by doing” approach to
              craft. Reflection also plays an important role to encourage
              communal learning. We aim for an 80/20 model of lean-in
              (contribute) vs lean-back (reflect) learner engagement. We
              designed our language to promote inclusivity; avoiding terms like
              <em>Faculty</em> or <em>Non-Designer</em> and instead use terms
              like <em>Facilitator</em> and <em>Design for Everyone</em>. We
              even have Facilitators from Engineering and Product Management
              co-host courses on cross-functional topics like Inclusive Design
              and Service Design. To date we’ve seen an overall facilitation
              effectiveness rate of 91% given to our community of 50+
              Facilitators. We’re clear that our learners love this approach to
              experiential learning, however it requires well-designed
              incentives to effectively scale this model of peer facilitation.
            </p>

            <hr />

            <h2 class="post-content-title">
              Commit to Learning
            </h2>
            <p class="post-content-body">
              Where most learning programs fail – is a lack of commitment.
              Organizations need to commit to the culture of learning. Leaders
              need to commit to backing learning programs, and learners need to
              commit to learning. Functional education programs like ours may
              have started as corporate upskilling mechanisms, but they’re
              quickly becoming a mainstream staple of adult education. While
              conferences, certificates and degrees will always have a place in
              professional development – the unique value of learning directly
              from a company is that it occurs at the pace of their intellectual
              property and in our case, from and with the craft-based expertise
              of the Airbnb Design team.
            </p>
            <hr />

            <p class="post-content-body">
              We’d love to hear how you’re approaching the learning of Design –
              whether you’re a leader or learner. Feel free to
              <a class="post-content-body" href="mailto:#">reach out to us</a>
              with your creative critique.
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
      <div class="row">
        <div class="author">
          <div class="author-image">
            <img
              src="https://airbnb.design/wp-content/uploads/2021/06/StephanieSzabo-1.png"
              alt=""
            />
          </div>
          <div class="author-desc">
            Stephanie Szabó is Head of Design Learning at Airbnb. She’s a former
            Design Teaching Fellow at the Stanford d.school and alumni of CCA.
          </div>
        </div>
      </div>
      <hr />
      <div class="next">
        <div class="row next-title">
          <h4>Up next</h4>
        </div>
        <div class="row infinite-posts">
          <div class="column">
            <div class="infinite-post-1">
              <a href="#" class="infinite-post-image">
                <router-link to="/a-home-between-places">
                  <img :src="infinitePost[4].image" alt="" />
                </router-link>
              </a>
              <a href="#" class="infinite-post-texts">
                <router-link to="/a-home-between-places">
                  <div class="infinite-post-title-group">
                    <h2 class="infinite-post-title">
                      {{ infinitePost[4].title }}
                    </h2>
                    <h2 class="infinite-post-subtitle">
                      {{ infinitePost[4].subtitle }}
                    </h2>
                  </div>
                </router-link>
                <div class="infinite-post-categories">
                  <a
                    href="#"
                    v-for="(a, i) in infinitePost[4].categories"
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
              <a href="#" class="infinite-post-image">
                <img :src="infinitePost[5].image" alt="" />
              </a>
              <a href="#" class="infinite-post-texts">
                <div class="infinite-post-title-group">
                  <h2 class="infinite-post-title">
                    {{ infinitePost[5].title }}
                  </h2>
                  <h2 class="infinite-post-subtitle">
                    {{ infinitePost[5].subtitle }}
                  </h2>
                </div>
                <div class="infinite-post-categories">
                  <a
                    href="#"
                    v-for="(a, i) in infinitePost[5].categories"
                    :key="i"
                  >
                    {{ a }}
                  </a>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Post0',
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
  content: ' — ';
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
  text-decoration: underline $green solid 2px;
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
}

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

  .author {
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
  }

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
