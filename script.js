const backbtn = document.getElementById("backbtn");

backbtn.addEventListener("click", function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

window.addEventListener("scroll", function () {
  let posY = window.scrollY;

  if (posY > 0) {
    backbtn.style.display = "block";
  } else {
    backbtn.style.display = "none";
  }
});

const btnArray = [
  "buttonglass",
  "buttonhead",
  "buttontrails",
  "buttonlight",
  "buttonheadcont",
];

function fireBtn() {
  btnArray.forEach((btn) => {
    const el = document.getElementById(btn);
    el.addEventListener("click", function (event) {
      event.preventDefault();
      const targetId = this.getAttribute("href");
      const targetElement = document.querySelector(targetId);

      if (targetElement) {
        targetElement.scrollIntoView({ behavior: "smooth" });
      }
    });
  });
}
fireBtn();

/*
const buttonhead = document.getElementById("buttonhead");

buttonhead.addEventListener("click", function (event) {
  event.preventDefault(); 
  const targetId = this.getAttribute("href"); 
  const targetElement = document.querySelector(targetId);

  if (targetElement) {
    targetElement.scrollIntoView({ behavior: "smooth" });
  }
});
*/
