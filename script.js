const boxes = document.querySelectorAll(".hide");
window.addEventListener("scroll", checkBoxes);

function checkBoxes() {
  const triggerBottom = window.visualViewport.height;

  boxes.forEach((box) => {
    const boxTop = box.getBoundingClientRect().top + 100;

    if (boxTop < triggerBottom) {
      box.classList.add("show");
    } else {
      box.classList.remove("show");
    }
  });
}

checkBoxes();

const navigation = document.querySelectorAll(".nav");
navigation.forEach((item) => {
  item.addEventListener("click", () => {
    const el = document.getElementById(item.getAttribute("data-link"));
    el.scrollIntoView({
      behavior: "smooth",
      block: "center",
      inline: "center",
    });
  });
});

const toTop = document.querySelector(".navigation-bar");
window.addEventListener("scroll", moveTop);

function moveTop() {
  if (window.pageYOffset > 80) {
    toTop.classList.add("active");
  } else {
    toTop.classList.remove("active");
  }
}

const formStatus = document.querySelector(".contact-form");
const checkRemoved = formStatus.classList.contains("remove");
const checkShown = formStatus.classList.contains("showed");

function messageButton() {
  if (checkRemoved == true) {
    showTicket();
  } else if (checkShown == true) {
    removeTicket();
  }
}

function showTicket() {
  const forms = document.querySelector(".contact-form");
  forms.classList.remove("remove");
}

function removeTicket() {
  const forms = document.querySelector(".contact-form");
  forms.classList.add("showed");
}
