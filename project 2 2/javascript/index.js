const clickBox = document.getElementsByClassName("box");
const clickColumn = document.getElementsByClassName("column");

function abc(elem) {
   if (elem.classList.contains("enlarge")) {
      elem.classList.remove("enlarge");
      elem.parentNode.classList.remove("enlarge-column");
   } else {
      for (let j = 0; j < 6; j++) {
         var k = Math.floor(j / 2);
         clickBox[j].classList.remove("enlarge");
         clickColumn[k].classList.remove("enlarge-column");
      }
      elem.classList.add("enlarge");
      elem.parentNode.classList.add("enlarge-column");
   }
}