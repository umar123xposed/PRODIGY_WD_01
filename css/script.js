// ***********************
// script for navbar toggle
// ***********************
document.getElementById("toggle-menu").addEventListener("click", function(){
    var menu= document.querySelector(".dropdown");
     menu.classList.toggle("open");

});

// ***********************
// middle section left to right moving script
// ***********************
const observer = new IntersectionObserver((enteries) => {
    enteries.forEach((entry) => {
        if (entry.isIntersecting){
            entry.target.classList.add("show");
        }
        else{
            entry.target.classList.remove("show");
        }
    });
});
const hiddenelement= document.querySelectorAll(".hidden");
hiddenelement.forEach( (el)=> observer.observe(el));


// ***********************
// prices section moving up on scroll script
// ***********************
const observerr = new IntersectionObserver((enteries) => {
    enteries.forEach((entry) => {
        
        if (entry.isIntersecting){
            entry.target.classList.add("move");
        }
        else{
            entry.target.classList.remove("move");
        }
    });
});
const hiddenelements= document.querySelectorAll(".anime");
hiddenelements.forEach( (el)=> observerr.observe(el));




// ***********************
// number auto increasing script
// ***********************
const nums = document.querySelectorAll(".nums .num");

const observerrr = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      nums.forEach((num) => {
        
        if (!num.classList.contains("counting")) {
          startCount(num);
        }
      });
    }
  });
});

nums.forEach((el) => observerrr.observe(el));

function startCount(el) {
  el.classList.add("counting");
  const goal = el.getAttribute("data-goal");
  let count = 0;
  const increment = goal/100;

  const updateText = () => {
    el.textContent = Math.floor(count);
    count += increment;

    if (count <= goal) {
      requestAnimationFrame(updateText);
    } else {
      el.textContent = goal;
    }
  };

  requestAnimationFrame(updateText);
}
