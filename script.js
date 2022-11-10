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
