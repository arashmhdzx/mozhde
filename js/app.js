window.onscroll = function() {scrollFunction()};
        
function scrollFunction() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    document.getElementById("header").className = "main-header main-header-hover"
    document.getElementById("logo-header").className = "logo-2";
  } else {
    document.getElementById("header").className = "main-header"
    document.getElementById("logo-header").className = "logo-header";
  }
}
const header = document.getElementById("header");
header.onmouseover = function () {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {

  } else {
    document.getElementById("logo-header").className = "logo-2";
    document.getElementById("header").className += " main-header-hover";
  }
}
header.onmouseout = function () {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {

  } else {
    document.getElementById("logo-header").className = "logo-header";
    document.getElementById("header").className = "main-header";
  }
}
// 
// function ghangeLogo() {
//   const logo = getElementById("logo-header");
//   logo.className = "logo-header-2";
// }
// function returnLogo() {
//   const logo = getElementById("logo-header");
//   logo.className = "logo-header";
// }
var slide = document.getElementById("cars");
var slideInfo = document.getElementById("car-info");
var number = 0;
var numberInfo = 0;
function next() {
var widthElmnt = slide.children[number];
var width = widthElmnt.offsetWidth;
var heightInfoElmnt = slideInfo.children[numberInfo];
var heightInfo = heightInfoElmnt.offsetHeight;
  if (number < slide.childElementCount - 1) {
    number++;
    numberInfo++;
    document.getElementById("btn-next").style.color = "#2467b7";
  }
  if (number > slide.childElementCount - 2) {
    document.getElementById("btn-previous").style.color = "#686868";
  }

    var next = number*width;
    var nextInfo = numberInfo * heightInfo;
    slide.scrollTo(next,0);
    slideInfo.scrollTop = nextInfo;
}
function previous() {
var widthElmnt = slide.children[number];
var width = widthElmnt.offsetWidth;
var heightInfoElmnt = slideInfo.children[numberInfo];
var heightInfo = heightInfoElmnt.offsetHeight;
    if (number > 0) {
      number--;
      numberInfo--;
      document.getElementById("btn-previous").style.color = "#2467b7";
    }
    if (number < 1 ) {
      document.getElementById("btn-next").style.color = "#686868";
    }
    var next = number*width;
    var nextInfo = numberInfo * heightInfo;
    slide.scrollTo(next,0);
    slideInfo.scrollTop = nextInfo;
}
var marker1 = document.getElementById("marker1");
var infos1 = document.getElementById("infos1");
marker1.onmouseover = function() {
  infos1.className = "infos";
}
infos1.onmouseover = function() {
  infos1.className = "infos";
}
marker1.onmouseout = function() {
  infos1.className = "hide hide1";
}
infos1.onmouseout = function() {
  infos1.className = "hide hide1";
}
var marker2 = document.getElementById("marker2");
var infos2 = document.getElementById("infos2");
marker2.onmouseover = function() {
  infos2.className = "infos";
}
 infos2.onmouseover = function() {
  infos2.className = "infos";
}
marker2.onmouseout  = function() {
  infos2.className = "hide hide2";
}
infos2.onmouseout = function() {
  infos2.className = "hide hide2";
}
var marker3 = document.getElementById("marker3");
var infos3 = document.getElementById("infos3");
marker3.onmouseover = function() {
  infos3.className = "infos";
}
infos3.onmouseover = function() {
  infos3.className = "infos";
}
marker3.onmouseout = function() {
  infos3.className = "hide hide3";
}
infos3.onmouseout = function() {
  infos3.className = "hide hide3";
}
function footerGoR() {
  // var X = 1;
  // if (X < 6) {
  //   X++;
  // } else{
  //   X = 0;
  // }
  var contain = document.getElementById("footer-to");
  contain.scrollLeft += 230;
  // const node = contain.lastElementChild;
  // const clone = node.cloneNode(true);
  // contain.appendChild(clone);
  // contain.lastElementChild.remove();
}
function footerGoL() {
  var contain = document.getElementById("footer-to");
  // const node = contain.lastChild;
  // const clone = node.cloneNode(true);
  // document.getElementById("footer-to").appendChild(clone);
  // contain.lastElementChild.remove();
  // var X = 0;
  // X ++;
  // if (X === 6) {

  // }
  contain.scrollLeft -= 230;
}
function searchFunction() {
  var input, filter, ul, li, a, i, txtValue;
  input = document.getElementById("search-input");
  filter = input.value.toUpperCase();
  ul = document.getElementById("search-list");
  li = ul.getElementsByTagName("li");
  for (i = 0; i < li.length; i++) {
      a = li[i].getElementsByTagName("a")[0];
      txtValue = a.textContent || a.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
          li[i].style.display = "";
          ul.style.display = "block";
      } else {
          li[i].style.display = "none";
      }
  }
}
function showMenu() {
  var menu = document.getElementById("menu");
  if (menu.className == "navbar-header") {
    menu.className = "navbar-header show";
  } else {
    menu.className = "navbar-header";
  }
}
function searchBox() {
  document.getElementById("search-box").style.display = "block";
  document.getElementById("magnifying-glass").style.display = "none";
  document.getElementById("languages").style.left = "120px";
  var other = document.createElement("div");
  other.className = "other";
  document.getElementById("search").appendChild(other);
  other.onclick = function() {
    document.getElementById("search-box").style.display = "none";
    document.getElementById("magnifying-glass").style.display = "block";
    document.getElementById("languages").style.left = "0";
    document.getElementById("header").className = "main-header"
    document.getElementById("logo-header").className = "logo-header";
    other.remove();
  }
}