<template>
  <div class="main-wrapper">
    <div class="container">
      <ul class="nav justify-content-center">
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

    <div class="container-fluid p-0">

      <section class="resume-section p-3 p-lg-5 d-flex d-column" id="about">
        <div class="my-auto">
          <h1 class="mb-0">{{ firstName }} {{ lastName }}</h1>
          <p class="lead mb-5">{{ about }}</p>
          <div class="subheading mb-4">
            <a href="./cv_201901.pdf" download>Download CV</a>
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

      <section class="resume-section p-3 p-lg-5 d-flex flex-column" id="interests">
        <div class="my-auto">
          <h2 class="mb-5">Interests</h2>
          <p>{{ interest }}</p>
        </div>
      </section>

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
      about: 'Engineering graduate with 3.5+ years of Software Engineering experience. I love problem-solving and turning complicated issues into simplified solutions. I am a logical thinker, diligent, curious, and thrive on teamwork. Now I am looking for a new challenge with an exciting and growing company.',
      linkedinURL: 'https://www.linkedin.com/in/kenta-kudo-6a4b15a8/',
      githubURL: 'https://github.com/KentaKudo',
      twitterURL: 'https://twitter.com/_______K_K_',
      facebookURL: 'https://www.facebook.com/kentakudo.kenta',
      mediumURL: 'https://medium.com/@_______K_K_',
      experiences: [
        {
          position: 'Junior Backend Engineer',
          company: 'Mercari UK',
          description: 'Mercari is an e-commerce buying and selling platform. In my role, I write microservices in Golang and deploy them using GAE, GCE, Kubernetes, and Spinnaker. I also develop large userbase applications written in PHP using OOP and TDD practices. Additionally, I deal with some sysadmin tasks such as running DB migrations and executing batch commands on production.',
          startDate: 'December 2016',
          endDate: 'Present'
        },
        {
          position: 'iOS Engineer',
          company: 'Smart Tech Ventures',
          description: 'I developed the e-commerce app using MVC architecture in Swift and Objective-C. I also wrote and created from scratch a healthcare application introducing MVVM architecture and Reactive Programming',
          startDate: 'May 2015',
          endDate: 'March 2017'
        }
      ],
      interest: 'I embrace a minimalist lifestyle and keeping things in my life simple. I enjoy learning and experiencing new cultures and travelling the world is great fun. I also love developing my skills working on personal projects such as building deep learning models, designing my own website, and implementing original OS, which works on Raspberry Pi.'
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
