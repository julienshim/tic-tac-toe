// alert("Connected!")

const boxes = document.querySelectorAll(".box");

boxes.forEach(function(b){
  b.addEventListener("click", function(event){
    event.preventDefault();
    if (event.srcElement.dataset.box % 2 === 0) {
      b.innerText = "X";
    } else {
      b.innerText = "O";
    }
  })
})