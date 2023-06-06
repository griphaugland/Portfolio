const nameInput = document.getElementById('name')
const emailInput = document.getElementById('email')
const messageInput = document.getElementById('message')

const namelabel = document.querySelector('#namelabel')
const emaillabel = document.querySelector('#emaillabel')
const messagelabel = document.querySelector('#messagelabel')

const nameReg = /^[\x20-\x7E\u00F8\u00E6\u00E5]{5,50}$/;
const emailReg =  /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;
const messageReg = /^[\p{L}\p{M}\p{N}\p{P}\p{S}\p{Zs}]{5,500}$/um;

const regexTester = (input, rule, inputType) => {
    if (inputType === '') {
      console.log('RegTest:', 'false, empty string');
      feedback.innerHTML = "Please fill in all the fields... There is only three of them.";
      inputType.style.color = "red";
      return false;
    }
/*     if (inputType.style.outline = "1px solid red") {
        emaillabel.innerHTML = " Full Name (More than 5 letters please)"
        emaillabel.innerHTML = "Email (come on, you know what an email looks like!)"
        messagelabel.innerHTML = "message (Må være mer 25 enn bokstaver eller tall)"
      }
    else {
        nameFeedback.innerHTML = "Navn"
   
        emailFeedback.innerHTML = "Email adresse"

        messageFeedback.innerHTML = "Melding"
    } */
  
    const isValid = rule.test(input);
  
    if (!isValid) {
      inputType.style.borderBottom = "1px solid red";
      feedback.innerHTML = ""
    } else {
      inputType.style.borderBottom = "";
    }
    return isValid;
  };

const buttonFeedbackWrap = document.querySelector('.button-feedback-wrap');

const form = document.querySelector('form');
const submit = document.querySelector('#formButton');
const feedback = document.querySelector('#overallFeedback')

form.onsubmit = (e) => {
    e.preventDefault();
    if(!regexTester(nameInput.value, nameReg, nameInput) || !regexTester(emailInput.value, emailReg, emailInput) || !regexTester(messageInput.value, messageReg, messageInput)) {
        feedback.innerHTML = "We have some owls in the moss here. Please try again.";
        feedback.style.color = "#BE5252";
        return;
    }
    doneFunc();
};
const doneFunc = () => {
    feedback.innerHTML = "Thanks for reaching out, i'll answer as soon as possible. :)";
    feedback.style.color = "#6C954C";
  };
