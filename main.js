var blob = document.getElementById("blob");
gsap.set(".centerText", {opacity: 1})
gsap.from(".centerText", {y: 100, opacity: 0, duration: .8, ease: "circ"})
gsap.from(".blob", {y: 100, opacity: 0, duration: .8, ease: "circ"})
gsap.set(".blob", {translate: "-50% -50%"})


document.addEventListener("mousemove", (ev) => {
  let x = ev.clientX; //x position within the element.
  let y = ev.clientY - window.innerHeight / 10; //y position within the element.

  blob.animate(
    {
      left: x + "px",
      top: y + "px",
    },
    { duration: 3000, fill: "forwards" }
  );
});

let title = "Kauan Curbani - FullStack Dev. ";

const interval = setInterval(() => {
  if (title.length > 1) {
    title = title.substring(1) + title[0];
    document.title = title;
  }
}, 800);

var hoverText = document.getElementById("fancy");

gsap.set(".linkedin", { position: "relative", display:"block" });
const letters = document.querySelectorAll(".linkedin");

hoverText.addEventListener("mouseenter", () => {
  letters.forEach((letter) => {
    const randomY = Math.random() * 180 - 90;
    const randomX = Math.random() * 30 - 15; 
    const randomRotation = Math.random() * 20; 

    gsap.to(letter, {
      top: randomY,
      left: randomX,
      transform: `rotate(${randomRotation}deg)`,
      duration: 0.8,
      scale: 1.1,
      ease: "elastic",
    });
  });
});

hoverText.addEventListener("mouseleave", () => {
  gsap.to(letters, {
    top: 0,
    left: 0,
      transform: `rotate(0deg)`,
    duration: 0.8,
    scale: 1,
    ease: "elastic",
  });
});
