$(document).ready(function () {
  GetCount();
});

var today = new Date(),
  tomorrow = new Date(today.getTime() + 24 * 60 * 60 * 1000);
tomorrow = new Date(tomorrow.getFullYear(), tomorrow.getMonth(), tomorrow.getDate(), 0, 0, 0);

function GetCount() {
  dateNow = new Date();
  amount = tomorrow.getTime() - dateNow.getTime();
  delete dateNow;
  if (amount < 0) {
    $('.timer .hours').html('00');
    $('.timer .mins').html('00');
    $('.timer .secs').html('00');
  } else {
    hours = 0;
    mins = 0;
    secs = 0;
    out = "";
    amount = Math.floor(amount / 1000);
    amount = amount % 86400;
    hours = Math.floor(amount / 3600);
    amount = amount % 3600;
    mins = Math.floor(amount / 60);
    amount = amount % 60;
    secs = Math.floor(amount);
    if (hours < 10) hours = '0' + hours;
    if (mins < 10) mins = '0' + mins;
    if (secs < 10) secs = '0' + secs;

    $('.timer .hours').html(hours);
    $('.timer .mins').html(mins);
    $('.timer .secs').html(secs);
    setTimeout("GetCount()", 1000);
  }
}

$(document).scroll(function () {
  var y = $(this).scrollTop();
  if (y > 730) {
    $('.navbar-topper').fadeIn();
  } else {
    $('.navbar-topper').fadeOut();
  }

});

function youtubeShowVideo() {
  var i, c, y, v, n;
  v = document.getElementsByClassName("youtube");
  for (n = 0; n < v.length; n++) {
    y = v[n];
    i = document.createElement("img");
    i.setAttribute("src", "http://i.ytimg.com/vi/" + y.id + "/hqdefault.jpg");
    i.setAttribute("class", "thumb");
    c = document.createElement("div");
    c.setAttribute("class", "play");
    y.appendChild(i);
    y.appendChild(c);
    y.onclick = function () {
      var a = document.createElement("iframe");
      a.setAttribute("src", "https://www.youtube.com/embed/" + this.id + "?autoplay=1&autohide=1&border=0&wmode=opaque&enablejsapi=1");
      a.style.width = this.style.width;
      a.style.height = this.style.height;
      this.parentNode.replaceChild(a, this)
    }
  }
}
youtubeShowVideo();


// function menu(e) {
//   let target = e.target;
//   console.log(target);
//   let nav = document.querySelector(".navbar-collapse");
//   console.log(target.classList.contains(".navbar-collapse"));
//   if (target.classList == "navbar-toggle") {
//     nav.classList.add("open");
//   }
// }
let buttonMenu = document.querySelector(".navbar-toggle");
let clickMenu = document.querySelectorAll("nav li");

buttonMenu.addEventListener("click", function() {
  let nav = document.querySelector(".navbar-collapse");
  nav.classList.toggle("open");
  for(let i = 0; i < clickMenu.length; i++) {
    clickMenu[i].addEventListener("click", function() {
      nav.classList.remove("open");
    })
  }
  
});


