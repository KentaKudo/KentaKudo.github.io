<template>
  <div class="main-wrapper">
    <nav class="navbar navbar-expand-lg navbar-dark bg-primary fixed-top" id="sideNav">
      <a class="navbar-brand js-scroll-trigger" href="#page-top">
        <span class="d-block d-lg-none">{{ firstName }} {{ lastName }}</span>
        <span class="d-none d-lg-block">
          <img class="img-fluid img-profile rounded-circle mx-auto mb-2" src="./assets/profile.jpeg" alt="">
        </span>
      </a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav">
          <li class="nav-item">
            <a class="nav-link js-scroll-trigger" href="#about">About</a>
          </li>
          <li class="nav-item">
            <a class="nav-link js-scroll-trigger" href="#experience">Experience</a>
          </li>
          <li class="nav-item">
            <a class="nav-link js-scroll-trigger" href="#education">Education</a>
          </li>
          <li class="nav-item">
            <a class="nav-link js-scroll-trigger" href="#skills">Skills</a>
          </li>
          <li class="nav-item">
            <a class="nav-link js-scroll-trigger" href="#interests">Interests</a>
          </li>
          <li class="nav-item">
            <a class="nav-link js-scroll-trigger" href="#awards">Awards</a>
          </li>
        </ul>
      </div>
    </nav>

    <div class="container-fluid p-0">

      <section class="resume-section p-3 p-lg-5 d-flex d-column" id="about">
        <div class="my-auto">
          <h1 class="mb-0">{{ firstName }}
            <span class="text-primary">{{ lastName }}</span>
          </h1>
          <p class="lead mb-5">{{ about }}</p>
          <div class="subheading mb-4">
            <a href="./cv_201812.pdf" download>Download CV</a>
          </div>
          <ul class="list-inline list-social-icons mb-0">
            <li class="list-inline-item">
              <a v-bind:href="facebookURL" target="_blank">
                <span class="fa-stack fa-lg">
                  <i class="fa fa-circle fa-stack-2x"></i>
                  <i class="fa fa-facebook fa-stack-1x fa-inverse"></i>
                </span>
              </a>
            </li>
            <li class="list-inline-item">
              <a v-bind:href="twitterURL" target="_blank">
                <span class="fa-stack fa-lg">
                  <i class="fa fa-circle fa-stack-2x"></i>
                  <i class="fa fa-twitter fa-stack-1x fa-inverse"></i>
                </span>
              </a>
            </li>
            <li class="list-inline-item">
              <a v-bind:href="linkedinURL" target="_blank">
                <span class="fa-stack fa-lg">
                  <i class="fa fa-circle fa-stack-2x"></i>
                  <i class="fa fa-linkedin fa-stack-1x fa-inverse"></i>
                </span>
              </a>
            </li>
            <li class="list-inline-item">
              <a v-bind:href="githubURL" target="_blank">
                <span class="fa-stack fa-lg">
                  <i class="fa fa-circle fa-stack-2x"></i>
                  <i class="fa fa-github fa-stack-1x fa-inverse"></i>
                </span>
              </a>
            </li>
            <li class="list-inline-item">
              <a v-bind:href="mediumURL" target="_blank">
                <span class="fa-stack fa-lg">
                  <i class="fa fa-circle fa-stack-2x"></i>
                  <i class="fa fa-medium fa-stack-1x fa-inverse"></i>
                </span>
              </a>
            </li>
            <li class="list-inline-item">
              <a v-bind:href="mailto" target="_blank">
                <span class="fa-stack fa-lg">
                  <i class="fa fa-circle fa-stack-2x"></i>
                  <i class="fa fa-envelope-o fa-stack-1x fa-inverse"></i>
                </span>
              </a>
            </li>
          </ul>
        </div>
      </section>

      <hr class="m-0">

      <section class="resume-section p-3 p-lg-5 d-flex flex-column" id="experience">
        <div class="my-auto">
          <h2 class="mb-5">Experience</h2>

          <div class="resume-item d-flex flex-column flex-md-row mb-5" v-for="job in experiences" :key="job.description">
            <div class="resume-content mr-auto">
              <h3 class="mb-0">{{ job.position }}</h3>
              <div class="subheading mb-3">{{ job.company }}</div>
              <p>{{ job.description }}</p>
            </div>
            <div class="resume-date text-md-right">
              <span class="text-primary">{{ job.startDate }} - {{ job.endDate }}</span>
            </div>
          </div>

        </div>

      </section>

      <hr class="m-0">

      <section class="resume-section p-3 p-lg-5 d-flex flex-column" id="education">
        <div class="my-auto">
          <h2 class="mb-5">Education</h2>

          <div class="resume-item d-flex flex-column flex-md-row mb-5">
            <div class="resume-content mr-auto">
              <h3 class="mb-0">University of Tokyo</h3>
              <div class="subheading mb-3">Bachelor of Engineering</div>
              <div>Aeronautical and Astronautical Engineering</div>
            </div>
            <div class="resume-date text-md-right">
              <span class="text-primary">April 2011 - March 2015</span>
            </div>
          </div>

        </div>
      </section>

      <hr class="m-0">

      <section class="resume-section p-3 p-lg-5 d-flex flex-column" id="skills">
        <div class="my-auto">
          <h2 class="mb-5">Skills</h2>

          <div class="subheading mb-3">Infrastructure</div>
          <ul class="fa-ul mb-3">
            <li><i class="fa-li fa fa-check"></i>MySQL</li>
            <li><i class="fa-li fa fa-check"></i>GCP</li>
            <li><i class="fa-li fa fa-check"></i>Docker</li>
            <li><i class="fa-li fa fa-check"></i>Kubernetes</li>
            <li><i class="fa-li fa fa-check"></i>Ansible</li>
            <li><i class="fa-li fa fa-check"></i>Terraform</li>
          </ul>

          <div class="subheading mb-3">Backend</div>
          <ul class="fa-ul mb-3">
            <li><i class="fa-li fa fa-check"></i>PHP</li>
            <li><i class="fa-li fa fa-check"></i>Golang</li>
            <li><i class="fa-li fa fa-check"></i>Python</li>
            <li><i class="fa-li fa fa-check"></i>Object Oriented Programming</li>
            <li><i class="fa-li fa fa-check"></i>Test Driven Development</li>
            <li><i class="fa-li fa fa-check"></i>Design Pattern</li>
            <li><i class="fa-li fa fa-check"></i>SQL</li>
          </ul>

          <div class="subheading mb-3">Mobile</div>
          <ul class="fa-ul mb-3">
            <li><i class="fa-li fa fa-check"></i>iOS</li>
            <li><i class="fa-li fa fa-check"></i>Swift</li>
            <li><i class="fa-li fa fa-check"></i>Objective-C</li>
            <li><i class="fa-li fa fa-check"></i>Reactive Programming</li>
            <li><i class="fa-li fa fa-check"></i>MVVM architecture</li>
          </ul>

          <div class="subheading mb-3">Frontend</div>
          <ul class="fa-ul mb-3">
            <li><i class="fa-li fa fa-check"></i>JavaScript</li>
            <li><i class="fa-li fa fa-check"></i>Knockout JS</li>
          </ul>

          <div class="subheading mb-3">Others</div>
          <ul class="fa-ul mb-3">
            <li><i class="fa-li fa fa-check"></i>Machine Learning</li>
            <li><i class="fa-li fa fa-check"></i>System Programming</li>
            <li><i class="fa-li fa fa-check"></i>Raspberry Pi</li>
            <li><i class="fa-li fa fa-check"></i>Design</li>
            <li><i class="fa-li fa fa-check"></i>Agile</li>
          </ul>

        </div>
      </section>

      <hr class="m-0">

      <section class="resume-section p-3 p-lg-5 d-flex flex-column" id="interests">
        <div class="my-auto">
          <h2 class="mb-5">Interests</h2>
          <p>{{ interest }}</p>
        </div>
      </section>

      <hr class="m-0">

      <section class="resume-section p-3 p-lg-5 d-flex flex-column" id="awards">
        <div class="my-auto">
          <h2 class="mb-5">Awards &amp; Certifications</h2>
          <ul class="fa-ul mb-0">
            <li>
              <i class="fa-li fa fa-trophy text-warning"></i>
              Coursera: Machine Learning</li>
            <li>
              <i class="fa-li fa fa-trophy text-warning"></i>
              Diploma: Project <a href="http://dl4us.com/" target="_blank">DL4US (Deep Learning for All of Us)</a></li>
            <li>
              <i class="fa-li fa fa-trophy text-warning"></i>
              Design Lab: <a href="https://trydesignlab.com/certificates/design-101/KentaKudo/" target="_blank">Design 101</a></li>
          </ul>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      firstName: 'Kenta',
      lastName: 'Kudo',
      title: 'My portfolio',
      mailto: 'mailto:yd37574@gmail.com',
      about: 'Self-disciplined software engineer with a passion for solving critical issues with high focus on the true nature of the problems and engineering expertise. An engineer with wide range of experience who is addicted to simple solutions which solves difficult problems with high eciency. Punctual practitioner, logical thinker, and diligent learner who enjoys leading organisations to success coping with team.',
      linkedinURL: 'https://www.linkedin.com/in/kenta-kudo-6a4b15a8/',
      githubURL: 'https://github.com/KentaKudo',
      twitterURL: 'https://twitter.com/_______K_K_',
      facebookURL: 'https://www.facebook.com/kentakudo.kenta',
      mediumURL: 'https://medium.com/@_______K_K_',
      experiences: [
        {
          position: 'Junior Backend Engineer',
          company: 'Mercari UK',
          description: 'Mercari is the most successful e-commerce ex-unicorn in Japan. I, as a backend engineer, have wide range of responsibilities. I write micro-services in Golang and congure deployment using GAE, GCE, Kubernetes and Spinnaker. I also develop large userbase application written in PHP using OOP and TDD practices. If needed, I run DB migrations and batch commands on production as well.',
          startDate: 'December 2016',
          endDate: 'Present'
        },
        {
          position: 'iOS Engineer',
          company: 'Smart Tech Ventures',
          description: 'Coping with the team of six, I, as an iOS engineer, developed e-commerce client app using MVC architecture in Swift and Objective-C. In the other project, I wrote health care application from scratch alone introducing MVVM architecture and Reactive Programming.',
          startDate: 'May 2015',
          endDate: 'March 2017'
        }
      ],
      interest: 'I embrace minimal life style, and love watching movies (40+/yr), reading books (80+/yr), exercising (6days/w), and traveling (20+ countries so far). Developing my skills is a great fun for me, and worked on personal projects such as building ML models that categorise fashion items from images and implementing original OS which works on Raspberry Pi.'
    }
  },
  mounted () {
    const $ = this.jquery
    this.$nextTick(() => {
      // Smooth scrolling using jQuery easing
      $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function () {
        if (location.pathname.replace(/^\//, '') === this.pathname.replace(/^\//, '') && location.hostname === this.hostname) {
          var target = $(this.hash)
          target = target.length ? target : $('[name=' + this.hash.slice(1) + ']')
          if (target.length) {
            $('html, body').animate({
              scrollTop: (target.offset().top)
            }, 1000, 'easeInOutExpo')
            return false
          }
        }
      })

      // Closes responsive menu when a scroll trigger link is clicked
      $('.js-scroll-trigger').click(function () {
        $('.navbar-collapse').collapse('hide')
      })

      // Activate scrollspy to add active class to navbar items on scroll
      $('body').scrollspy({
        target: '#sideNav'
      })
    })
  }
}
</script>

<style>
body {
  font-family: 'Open Sans', serif;
  padding-top: 54px;
  color: #868e96;
}

@media (min-width: 992px) {
  body {
    padding-top: 0;
    padding-left: 17rem;
  }
}

h1,
h2,
h3,
h4,
h5,
h6 {
  font-family: 'Saira Extra Condensed', serif;
  font-weight: 700;
  text-transform: uppercase;
  color: #343a40;
}

h1 {
  font-size: 6rem;
  line-height: 5.5rem;
}

h2 {
  font-size: 3.5rem;
}

.subheading {
  text-transform: uppercase;
  font-weight: 500;
  font-family: 'Saira Extra Condensed', serif;
  font-size: 1.35rem;
}

.list-social-icons a {
  color: #495057;
}

.list-social-icons a:hover {
  color: #BD5D38;
}

.list-social-icons a .fa-lg {
  font-size: 1.75rem;
}

.list-icons {
  font-size: 3rem;
}

.list-icons .list-inline-item i:hover {
  color: #BD5D38;
}

#sideNav .navbar-nav .nav-item .nav-link {
  font-weight: 600;
  text-transform: uppercase;
}

@media (min-width: 992px) {
  #sideNav {
    text-align: center;
    position: fixed;
    top: 0;
    left: 0;
    display: flex;
    flex-direction: column;
    width: 17rem;
    height: 100vh;
  }
  #sideNav .navbar-brand {
    display: flex;
    margin: auto auto 0;
    padding: 0.5rem;
  }
  #sideNav .navbar-brand .img-profile {
    max-width: 10rem;
    max-height: 10rem;
    border: 0.5rem solid rgba(255, 255, 255, 0.2);
  }
  #sideNav .navbar-collapse {
    display: flex;
    align-items: flex-start;
    flex-grow: 0;
    width: 100%;
    margin-bottom: auto;
  }
  #sideNav .navbar-collapse .navbar-nav {
    flex-direction: column;
    width: 100%;
  }
  #sideNav .navbar-collapse .navbar-nav .nav-item {
    display: block;
  }
  #sideNav .navbar-collapse .navbar-nav .nav-item .nav-link {
    display: block;
  }
}

section.resume-section {
  border-bottom: 1px solid #dee2e6;
  padding-top: 5rem !important;
  padding-bottom: 5rem !important;
}

section.resume-section .resume-item .resume-date {
  min-width: none;
}

@media (min-width: 768px) {
  section.resume-section {
    min-height: 100vh;
  }
  section.resume-section .resume-item .resume-date {
    min-width: 18rem;
  }
}

@media (min-width: 992px) {
  section.resume-section {
    padding-top: 3rem !important;
    padding-bottom: 3rem !important;
  }
}

.bg-primary {
  background-color: #BD5D38 !important;
}

.text-primary {
  color: #BD5D38 !important;
}

a {
  color: #BD5D38;
}

a:hover, a:focus, a:active {
  color: #824027;
}
</style>
