
const inprgs = document.querySelectorAll(".inprogress");

document.onmousemove = (ev) => {
  const { clientX, clientY } = ev;

  var mouseX = (clientX / (window.innerWidth / 2)) - 1;
  var mouseY = (clientY / (window.innerHeight / 2)) - 1;

  console.log(mouseX);

  for (const label in inprgs) {
    var a = inprgs[label];
    gsap.to(a, {
      transform: `translate(${(mouseX * 2) * label}px,${(mouseY * 2) * label}px)`,
    });
  }
};
