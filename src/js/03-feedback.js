import throttle from 'lodash.throttle';


const FEEDBACK_FORM_LOCAL_STORAGE_KEY = "feedback-form-state";
const feedbackForm = document.querySelector(".feedback-form")
const inputEmail = document.querySelector("input")
const textArreaMessage = document.querySelector("textarea")



const handleInput = ()=>{
  localStorage.setItem(FEEDBACK_FORM_LOCAL_STORAGE_KEY, JSON.stringify({email: inputEmail.value, message:textArreaMessage.value}))
}



const fillForm = ()=>{
  const dataFormParse = JSON.parse(localStorage.getItem(FEEDBACK_FORM_LOCAL_STORAGE_KEY))
  
  if(!dataFormParse){
    return
  }

  inputEmail.value = dataFormParse.email
  textArreaMessage.value = dataFormParse.message

}


const submitForm = event =>{
    event.preventDefault()
    
    console.log({email: inputEmail.value, message: textArreaMessage.value})

    localStorage.removeItem(FEEDBACK_FORM_LOCAL_STORAGE_KEY)

    feedbackForm.reset()
    
}


inputEmail.addEventListener("input", throttle(handleInput, 500))
textArreaMessage.addEventListener("input", throttle(handleInput, 500))
feedbackForm.addEventListener("submit", submitForm)

fillForm()

