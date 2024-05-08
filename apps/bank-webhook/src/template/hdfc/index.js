

// simulation buttons and click events 
const successBtn = document.getElementById("successbtn");
const failureBtn = document.getElementById("failurebtn");

successBtn.addEventListener('click', (e) => {
    console.log("clicked success button -------", e);
})

failureBtn.addEventListener('click', (e) => {
    console.log("clicked failure button xxxxxx", e);
})