document.addEventListener('DOMContentLoaded', function() {
    const sections = document.querySelectorAll('section');
  
    function fadeInSections() {
      sections.forEach((section, index) => {
        const sectionTop = section.offsetTop;
        const scrollY = window.scrollY;
        const windowHeight = window.innerHeight;
        const directionClass = index % 2 === 0 ? 'fade-in-left' : 'fade-in-right';
  
        if (scrollY > sectionTop - windowHeight + section.clientHeight / 2) {
          section.classList.add('fade-in', directionClass);
        }
      });
    }
  
    window.addEventListener('scroll', fadeInSections);
  
    // Initial check on page load
    fadeInSections();
  });
  