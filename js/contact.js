const nameInput = document.getElementById('name')
const emailInput = document.getElementById('email')
const messageInput = document.getElementById('message')

const namelabel = document.querySelector('#namelabel')
const emaillabel = document.querySelector('#emaillabel')
const messagelabel = document.querySelector('#messagelabel')
const submit = document.querySelector('#formButton');


const form = document.querySelector("form"),
statusTxt = form.querySelector("#overallFeedback");
form.onsubmit = (e)=>{
  e.preventDefault();
  statusTxt.style.color = "lightgray";
  statusTxt.style.display = "block";
  statusTxt.innerText = "Sending your message...";
  form.classList.add("disabled");
  let xhr = new XMLHttpRequest();
  xhr.open("POST", "message.php", true);
  xhr.onload = ()=>{
    if(xhr.readyState == 4 && xhr.status == 200){
      let response = xhr.response;
      console.log(response)
    if(response.indexOf('Email and password fields are required.') != -1 || response.indexOf('Enter a valid email address!') != -1 ||response.indexOf('We have some owls in the moss here. Please try again.' != -1)){
        statusTxt.style.color = "#BE5252";
      }else{
        form.reset();
        setTimeout(()=>{
          statusTxt.style.display = "none";
        }, 3000);
      }
      statusTxt.innerText = response;
      form.classList.remove("disabled");
    }
  }
  let formData = new FormData(form);
  xhr.send(formData);
}
