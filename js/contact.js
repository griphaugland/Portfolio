const form = document.querySelector("form");
const overallFeedback = document.querySelector('#overallFeedback')
overallFeedback.innerHTML = "";
form.onsubmit = () => {
overallFeedback.innerHTML = "Message sent!";
overallFeedback.style.color = "lightgreen"
}