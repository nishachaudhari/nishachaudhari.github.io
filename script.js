'use strict';
const navi = document.querySelectorAll('nav a');
const all = document.querySelector('.all');
const flutter = document.querySelector('.flutter');
const react = document.querySelector('.react');
const angular = document.querySelector('.angular');
const js = document.querySelector('.js');

const contentall = document.getElementById('contentall');
const contentflutter = document.getElementById('contentflutter');
const contentreact = document.getElementById('contentreact');
const contentangular = document.getElementById('contentangular');
const contentjs = document.getElementById('contentjs');

const flutter1button = document.getElementById('Flutter1');
const flutter2button = document.getElementById('Flutter2');
const react1button = document.getElementById('React1');
const react2button = document.getElementById('React2');
const angularbutton = document.getElementById('Angular');
const jsbutton = document.getElementById('JS');

const flutter1button_within = document.getElementById('Flutter1within');
const flutter2button_within = document.getElementById('Flutter2within');
const react1button_within = document.getElementById('React1within');
const react2button_within = document.getElementById('React2within');
const angularbutton_within = document.getElementById('Angularwithin');
const jsbutton_within = document.getElementById('JSwithin');

contentall.hidden = false;
contentflutter.hidden = true;
contentreact.hidden = true;
contentangular.hidden = true;
contentjs.hidden = true;

let whichActive = function (b) {
  all.classList.remove('--active');
  flutter.classList.remove('--active');
  react.classList.remove('--active');
  angular.classList.remove('--active');
  js.classList.remove('--active');

  b.classList.add('--active');
};

//which navbar content is showing
let whichHidden = function (b) {
  contentall.hidden = true;
  contentflutter.hidden = true;
  contentreact.hidden = true;
  contentangular.hidden = true;
  contentjs.hidden = true;

  let contentb = window[`content${b}`];

  contentb.hidden = false;
};

all.addEventListener('click', function () {
  whichActive(all);
  whichHidden('all');
});

flutter.addEventListener('click', function () {
  whichActive(flutter);
  whichHidden('flutter');

  /*contentall.hidden = true;
  contentflutter.hidden = true;
  contentreact.hidden = true;
  contentangular.hidden = true;
  contentjs.hidden = true;

  galleryitem1.hidden = false;
  flutter1info.hidden = false;*/
});

react.addEventListener('click', function () {
  whichActive(react);
  whichHidden('react');
});

angular.addEventListener('click', function () {
  whichActive(angular);
  whichHidden('angular');
});

js.addEventListener('click', function () {
  whichActive(js);
  whichHidden('js');
});

flutter1button.addEventListener('click', function () {
  window.location.href = 'html/flutter1.html';
});

flutter2button.addEventListener('click', function () {
  window.location.href = 'html/flutter2.html';
});

react1button.addEventListener('click', function () {
  window.location.href = 'html/react1.html';
});

react2button.addEventListener('click', function () {
  window.location.href = 'html/react2.html';
});

angularbutton.addEventListener('click', function () {
  window.location.href = 'html/angular.html';
});

jsbutton.addEventListener('click', function () {
  window.location.href = 'html/js.html';
});

flutter1button_within.addEventListener('click', function () {
  window.location.href = 'html/flutter1.html';
});

flutter2button_within.addEventListener('click', function () {
  window.location.href = 'html/flutter2.html';
});

react1button_within.addEventListener('click', function () {
  window.location.href = 'html/react1.html';
});

react2button_within.addEventListener('click', function () {
  window.location.href = 'html/react2.html';
});

angularbutton_within.addEventListener('click', function () {
  window.location.href = 'html/angular.html';
});

jsbutton_within.addEventListener('click', function () {
  window.location.href = 'html/js.html';
});
