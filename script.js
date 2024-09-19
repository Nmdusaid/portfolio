const skbtn=document.getElementById('sk-btn')
    const exbtn=document.getElementById('ex-btn')
const edbtn=document.getElementById('ed-btn')
const skill=document.getElementById('input-range')
const education=document.getElementById('ed')
const experience=document.getElementById('ex')
education.style.display='none'
experience.style.display='none'
skbtn.addEventListener('click',()=>{
    skill.style.display='block'
    education.style.display='none'
    experience.style.display='none'    
})
exbtn.addEventListener('click',() =>{
skill.style.display='none'
education.style.display='none'
experience.style.display='block'
})
edbtn.addEventListener('click',()=>{
  experience.style.display='none'
    education.style.display='block'
    skill.style.display='none'
})
document.getElementById("hamburger").addEventListener("click", function () {
    const navList = document.querySelector("nav ul");
  
    if (navList.classList.contains("active")) {
      // Animate the hiding of the list
      gsap.to(navList, {
        opacity: 0,
        y: -50,
        duration: 0.5,
        onComplete: function() {
          navList.style.display = 'none'; // Hide after animation
        }
      });
    } else {
      // Display the list before animating it
      navList.style.display = 'block';
     
      
      // Animate the showing of the list
      gsap.fromTo(navList, 
        { opacity: 0, y: -50 },  // Initial state
        { opacity: 1, y: 0, duration: 0.5 }  // Final state
      );
    }
    
    navList.classList.toggle("active"); // Toggle the class
  });
  

  gsap.from(".name", {
    y: 50,
    opacity: 0,
    duration: 1,
    ease: "power2.out",
    delay: 0.5
  });
  gsap.from(".role", {
    y: 50,
    opacity: 0,
    duration: 1,
    ease: "power2.out",
    delay: 0.7
  });
  gsap.from(".btns", {
    y: 50,
    opacity: 0,
    stagger: 0.2,
    duration: 0.8,
    ease: "power2.out",
    delay: 0.9
  });
  gsap.to("input[type='range']", {
    value: (index, target) => target.value,
    duration: 2,
    ease: "power1.inOut",
    onUpdate: function() {
      const spans = document.querySelectorAll("span");
      spans.forEach((span, i) => {
        span.textContent = `${document.querySelectorAll("input[type='range']")[i].value}%`;
      });
    }
  });
  gsap.from(".project-inner", {
    opacity: 0,
    y: 50,
    stagger: 0.2,
    duration: 1,
    ease: "power1.out",
    scrollTrigger: {
      trigger: "#project",
      start: "top center"
    }
  });
  gsap.from("#Contact", {
    y: 100,
    opacity: 0,
    duration: 1.5,
    ease: "bounce.out",
    scrollTrigger: {
      trigger: "#Contact",
      start: "top center"
    }
  });
          