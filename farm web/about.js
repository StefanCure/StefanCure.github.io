const fadereds = document.querySelectorAll(".fade-in");
const slidereds = document.querySelectorAll(".slide-in");

const appear1Options = {
    threshold: 0,
    rootMargin: "0px 0px -250px 0px"
  };
  
  const appear1OnScroll = new IntersectionObserver(function(
    entries,
    appear1OnScroll
  ) {
    entries.forEach(entry => {
      if (!entry.isIntersecting) {
        return;
      } else {
        entry.target.classList.add("appear");
        appear1OnScroll.unobserve(entry.target);
      }
    });
  },
  appear1Options);
  
  fadereds.forEach(fader1 => {
    appear1OnScroll.observe(fader1);
  });
  
  slidereds.forEach(slider1 => {
    appear1OnScroll.observe(slider1);
  });