const greeting = document.getElementById("greeting");
const christmassifierBtn = document.getElementById("christmassifierBtn");
christmassifierBtn.addEventListener("click", christmassifyName);

function christmassifyName() {
  if (christmassifierBtn.innerText === "Christmassify") {
    christmassifierBtn.innerText = "De-christmassify";
    christmassifierBtn.style.fontFamily = "Mountains of Christmas";
    christmassifierBtn.style.backgroundColor = "darkGreen";
    greeting.classList.toggle("christmassified");
  } else {
    christmassifierBtn.innerText = "Christmassify ";
    christmassifierBtn.style.fontFamily = "Times";
    christmassifierBtn.style.backgroundColor = "";
    greeting.classList.toggle("christmassified");
  }
}
