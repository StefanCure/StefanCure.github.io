const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelectorAll('.nav-link');
const faders = document.querySelectorAll(".fade-in");
const sliders = document.querySelectorAll(".slide");

navToggle.addEventListener('click', () => {
  if(document.body.classList.contains('nav-open')) {
    document.body.classList.remove('nav-open');

    document.body.classList.add('nav-closed');
  } else {
    document.body.classList.remove('nav-closed');
    document.body.classList.add('nav-open');
  }

});

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        document.body.classList.remove('nav-open');
    })
})

const appearOptions = {
    threshold: 0,
    rootMargin: "0px 0px -150px 0px"
  };
  
  const appearOnScroll = new IntersectionObserver(function(
    entries,
    appearOnScroll
  ) {
    entries.forEach(entry => {
      if (!entry.isIntersecting) {
        return;
      } else {
        entry.target.classList.add("appear");
        appearOnScroll.unobserve(entry.target);
      }
    });
  },
  appearOptions);
  faders.forEach(fader => {
    appearOnScroll.observe(fader);
  });

  sliders.forEach(slider => {
    appearOnScroll.observe(slider);
  });
  
  