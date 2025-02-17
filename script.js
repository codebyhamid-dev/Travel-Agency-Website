document.addEventListener('DOMContentLoaded', function () {
    const counters = document.querySelectorAll('.counter-value');
    const speed = 200; // The lower the slower
  
    counters.forEach(counter => {
      const updateCount = () => {
        const target = +counter.getAttribute('data-count');
        const count = +counter.innerText;
  
        // Lower inc to slow and higher to slow
        const inc = target / speed;
  
        // Check if target is reached
        if (count < target) {
          // Add inc to count and output in counter
          counter.innerText = Math.ceil(count + inc);
          // Call function every ms
          setTimeout(updateCount, 1);
        } else {
          counter.innerText = target;
        }
      };
  
      updateCount();
    });
  });
  document.addEventListener("DOMContentLoaded", function () {
    const animatedElements = document.querySelectorAll(".animated");
  
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target); // Remove observer after animation
          }
        });
      },
      { threshold: 0.2 }
    );
  
    animatedElements.forEach((el) => {
      observer.observe(el);
    });
  });
  