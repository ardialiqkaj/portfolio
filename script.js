const boxes = document.querySelectorAll(".hide");
window.addEventListener('scroll', checkBoxes);

function checkBoxes() {
    const triggerBottom = window.innerHeight;

    boxes.forEach(box => {
        const boxTop = box.getBoundingClientRect().top;

        if(boxTop*1.2 < triggerBottom) {
            box.classList.add("show");
        } else {
            box.classList.remove("show");
        }
    });
}

checkBoxes()