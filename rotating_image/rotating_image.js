function rotateColors() {
  let firstDiv = document.getElementsByClassName("red")[0];
  let secondDiv = document.getElementsByClassName("blue")[0];

  firstDiv.className = "blue";
  secondDiv.className = "red";

  setTimeout(rotateColors,500)
}
