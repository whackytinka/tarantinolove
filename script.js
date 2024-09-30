function comein(){
    let hand=document.querySelector("#Hand")
    console.log(hand)
    hand.classList.remove("hide")
    hand.classList.add("show")
    setTimeout(next, 2200)
}
function next(){
    window.location.href="home/home.html"
}