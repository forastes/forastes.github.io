const btn = document.getElementById("btn")
const body = document.getElementById("body")
function deleteBtn() {
    body.innerHTML = ""
}
btn.addEventListener("click", deleteBtn)