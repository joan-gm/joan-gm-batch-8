const div = document.querySelector("div")
const spanHi = document.querySelector("#hi")
const spanBye = document.querySelector("#bye")

/*
spanBye.remove()
div.append(spanBye)

console.log(spanHi.getAttribute("title"))
spanHi.setAttribute("id", "change-id")
spanHi.removeAttribute("id")

console.log(spanHi.dataset)
spanHi.dataset.newName = "new name data"
*/

spanHi.classList.add("new-class")
spanHi.classList.remove("hi1")
spanHi.classList.toggle("hi1")

spanHi.style.color = "red"
spanHi.style.backgroundColor = "red"