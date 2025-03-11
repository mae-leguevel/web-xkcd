const XKCD = "https://xkcd.now.sh/?comic="
let CURRENT_NUMBER = 0
document.addEventListener("DOMContentLoaded", () => {
    
    fetchIssue('latest')
    document.getElementById("reset").addEventListener("click", (event) => {
        fetchIssue('latest')});
    document.getElementById("next").addEventListener("click", (event) => {
        CURRENT_NUMBER += 1; fetchIssue(CURRENT_NUMBER)});
    document.getElementById("previous").addEventListener("click", (event) => {
        CURRENT_NUMBER -= 1; fetchIssue(CURRENT_NUMBER)});
  
  });


// write your code here
function fetchIssue(num) {

    fetch(XKCD + num)
        .then(response => response.json())
        .then(data => {
            updateImage(data.img)
            console.log(data.title)
            updateStatus(data.num)
    })
    .catch(error => console.error(error))
}

function updateStatus(num){
    CURRENT_NUMBER = num
    document.getElementById("num").innerText = num
}
function updateImage(img){
    document.getElementById("xkcd").firstElementChild.src = img
}

