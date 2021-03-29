$(document).ready(function () {
  var button = document.querySelector('.button');
  var circle = document.querySelector('.circle');
  var container = document.querySelector('.container');
  var timer;

  button.addEventListener("click", (e) => {

    if (typeof timer != "undefined") {
      clearInterval(timer);
    }

    let xAxis = e.pageX;
    let yAxis = e.pageY;
    let width = 0;
    let i = 0;
    let opacity = '1';
    let windowWidth = getComputedStyle(container).width;
    let windowHeight = getComputedStyle(container).height;

    timer = setInterval(function () {
      width++;
      circle.style.width = `${width}px`;
      circle.style.height = `${width}px`;
      circle.style.opacity = opacity;
      circle.style.left = xAxis - button.offsetLeft - width / 2 + 'px';
      circle.style.top = yAxis - button.offsetTop - width / 2 + 'px';
      opacity = opacity - 0.01;
      if (getComputedStyle(circle).width === '100px') {
        clearInterval(timer);
      }
    }, 3);
  });
});
