/*--------------------------funzione slideshow-----------------*/ 
var slideIndex = [1,1];
var slideId = ["mySlides1", "mySlides2"]
showSlides(1, 0);
showSlides(1, 1);
/**/
function plusSlides(n, no) {
  showSlides(slideIndex[no] += n, no);
}
/**/
function showSlides(n, no) {
  var i;
  var x = document.getElementsByClassName(slideId[no]);
  if (n > x.length) {slideIndex[no] = 1}    
  if (n < 1) {slideIndex[no] = x.length}
  for (i = 0; i < x.length; i++) {
     x[i].style.display = "none";  
  }
  x[slideIndex[no]-1].style.display = "block";  
}

/*--------------------------funzione per dark mode-----------------*/ 
function darkMode() {
  document.getElementById('dark').classList.toggle("darkbody");
  document.body.classList.toggle("darkbody");
  document.getElementById('passioni').classList.toggle("darkbody");
  document.getElementById('skill').classList.toggle("darkbody");  
  document.getElementById('testo').classList.toggle("darktext");
  document.getElementById('welcometext1').classList.toggle("darktext");
  document.getElementById('welcometext2').classList.toggle("darktext");
  document.getElementById('welcometext3').classList.toggle("darktext");
  document.getElementById('aboutbg').classList.toggle("darkbody2");
  document.getElementById('contactbg').classList.toggle("darkbody2");
  document.getElementById('footerbg').classList.toggle("darkbody3");
  document.getElementById('skilltext2').classList.toggle("darktext");
  document.getElementById('skilltext3').classList.toggle("darktext");
  document.getElementById('skilltext4').classList.toggle("darktext");
  document.getElementById('skilltext5').classList.toggle("darktext");
  document.getElementById('skilltext6').classList.toggle("darktext");
  document.getElementById('passiontext1').classList.toggle("darktext");
  document.getElementById('passiontext2').classList.toggle("darktext");
  document.getElementById('passiontext3').classList.toggle("darktext");
  document.getElementById('passiontext4').classList.toggle("darktext");
  document.getElementById('passiontext5').classList.toggle("darktext");
  document.getElementById('passiontext6').classList.toggle("darktext");
  document.getElementById('passiontext7').classList.toggle("darktext");
  document.getElementById('passiontext8').classList.toggle("darktext");
  document.getElementById('card1').classList.toggle("darkcard");
  document.getElementById('card2').classList.toggle("darkcard");
  document.getElementById('card3').classList.toggle("darkcard");
  document.getElementById('card4').classList.toggle("darkcard");
  document.getElementById('card5').classList.toggle("darkcard");
  document.getElementById('card6').classList.toggle("darkcard");
  document.getElementById('link1').classList.toggle("darklink");
  document.getElementById('link2').classList.toggle("darklink");
  document.getElementById('link3').classList.toggle("darklink");
  document.getElementById('skilldesktop').classList.toggle("darkbody");
  document.getElementById('skilltext2desktop').classList.toggle("darktext");
  document.getElementById('skilltext3desktop').classList.toggle("darktext");
  document.getElementById('skilltext4desktop').classList.toggle("darktext");
  document.getElementById('skilltext5desktop').classList.toggle("darktext");
  document.getElementById('skilltext6desktop').classList.toggle("darktext");
  document.getElementById('card1desktop').classList.toggle("darkcard");
  document.getElementById('card2desktop').classList.toggle("darkcard");
  document.getElementById('card3desktop').classList.toggle("darkcard");
  document.getElementById('passiontext1desktop').classList.toggle("darktext");
  document.getElementById('passiontext2desktop').classList.toggle("darktext");
  document.getElementById('passiontext3desktop').classList.toggle("darktext");
  document.getElementById('passiontext4desktop').classList.toggle("darktext");
  document.getElementById('passiontext5desktop').classList.toggle("darktext");
  document.getElementById('passiontext6desktop').classList.toggle("darktext");
  document.getElementById('passiontext7desktop').classList.toggle("darktext");
  document.getElementById('passiontext8desktop').classList.toggle("darktext");
  document.getElementById('card4desktop').classList.toggle("darkcard");
  document.getElementById('card5desktop').classList.toggle("darkcard");
  document.getElementById('card6desktop').classList.toggle("darkcard");
  document.getElementById('icon').classList.toggle("fa-moon");
  document.getElementById('icon').classList.toggle("fa-sun");
  document.getElementById('label').classList.toggle("label_light");
  document.getElementById('label').classList.toggle("label_dark");
  
  console.log('ciao');
}

