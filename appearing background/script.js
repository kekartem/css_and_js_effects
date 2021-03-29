$(document).ready(function () {
  const container = document.querySelector(".container");
  const circle = document.querySelector(".circle");

  container.addEventListener("mousemove", (e) => {
    let xAxis = e.pageX - 100;
    let yAxis = e.pageY - 110;
    circle.style.transform = `translate(${xAxis}px, ${yAxis}px)`;
    circle.style.backgroundPosition = `left ${-e.pageX}px top ${-e.pageY}px`;
  });
});
