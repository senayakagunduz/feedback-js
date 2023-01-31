const ratingEls=document.querySelectorAll(".rating")
const btnEl=document.querySelector("#btn");
const containerEl=document.querySelector("#container");

let selectedRating=""
ratingEls.forEach((ratingEl)=>{
    ratingEl.addEventListener("click",(e)=>{
        console.log(e.target.innerText || e.target.parentNode.innerText);
        removeActive();
        selectedRating=
        selectedRating = 
        e.target.innerText || e.target.parentNode.innerText;
        e.target.classList.add("active");
        e.target.parentNode.classList.add("active")

    })
}) 
btnEl.addEventListener("click", ()=>{
   if(selectedRating !== ""){
        containerEl.innerHTML=`
        <strong>Thank you!<strong>
        <br>
        <br>
        <strong>Feedback: ${selectedRating}</strong>
        <p>We'll use your feedback to improve our customer support.</p>`;
   }
})
function removeActive(){
    ratingEls.forEach((ratingEl)=>{
        ratingEl.classList.remove("active");
    })
}