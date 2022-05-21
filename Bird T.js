function my1() {
  var element = document.body;
  element.classList.toggle("dark-mode");
}

function myFunction() {
  var dots = document.getElementById("dots");
  var moreText = document.getElementById("more");
  var btnText = document.getElementById("myBtn");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Read what is bird T"; 
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "Close what is bird T"; 
    moreText.style.display = "inline";
  }
}
function myFunction1() {
  var dots = document.getElementById("dots1");
  var moreText = document.getElementById("more1");
  var btnText = document.getElementById("myBtn1");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Read google"; 
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "close google"; 
    moreText.style.display = "inline";
  }
}
function myFunction2() {
  var dots = document.getElementById("dots");
  var moreText = document.getElementById("more2");
  var btnText = document.getElementById("myBtn2");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Read note"; 
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "Close note"; 
    moreText.style.display = "inline";
  }
}
window.addEventListener('scroll', reveal);
  function reveal(){
    var reveals = document.querySelectorAll('.reveal');
    for(var i = 0; i < reveals.length; i++){
      var windowheight = window.innerHeight;
      var revealtop = reveals[i].getBoundingClientRect().top;
      var revealpoint = 150;
      if(revealtop < windowheight - revealpoint){
      reveals[i].classList.add('active');
        }
        else{
          reveals[i].classList.remove('active');
        }
      }
    }
    function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
}
function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}
const scrollElements = document.querySelectorAll(".js-scroll");

const elementInView = (el, dividend = 1) => {
  const elementTop = el.getBoundingClientRect().top;

  return (
    elementTop <=
    (window.innerHeight || document.documentElement.clientHeight) / dividend
  );
};

const elementOutofView = (el) => {
  const elementTop = el.getBoundingClientRect().top;

  return (
    elementTop > (window.innerHeight || document.documentElement.clientHeight)
  );
};

const displayScrollElement = (element) => {
  element.classList.add("scrolled");
};

const hideScrollElement = (element) => {
  element.classList.remove("scrolled");
};

const handleScrollAnimation = () => {
  scrollElements.forEach((el) => {
    if (elementInView(el, 1.25)) {
      displayScrollElement(el);
    } else if (elementOutofView(el)) {
      hideScrollElement(el)
    }
  })
}

window.addEventListener("scroll", () => { 
  handleScrollAnimation();
});


  var form = document.getElementById("my-form");
    
    async function handleSubmit(event) {
      event.preventDefault();
      var status = document.getElementById("my-form-status");
      var data = new FormData(event.target);
      fetch(event.target.action, {
        method: form.method,
        body: data,
        headers: {
            'Accept': 'application/json'
        }
      }).then(response => {
        status.innerHTML = "<h5 class='text-white'>Thanks for your submission!</h5>";
        form.reset()
      }).catch(error => {
        status.innerHTML = "<h5 class='text-white'>Oops! There was a problem submitting your message</h5>"
      });
    }
    form.addEventListener("submit", handleSubmit)