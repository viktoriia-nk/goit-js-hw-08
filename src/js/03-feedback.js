import throttle from 'lodash.throttle';


const FEEDBACK_FORM_LOCAL_STORAGE_KEY = "feedback-form-state";
const feedbackForm = document.querySelector(".feedback-form")
let formData ={}


const handleInput =e =>{
   
    const { target } = e;
    
    const elementTargetName = target.name;
    const elementTargetValue = target.value;

//   console.log('elementTargetName :>> ', elementTargetName);
//   console.log('elementTargetValue :>> ', elementTargetValue);

  formData[elementTargetName] = elementTargetValue;

  localStorage.setItem(
        FEEDBACK_FORM_LOCAL_STORAGE_KEY, JSON.stringify(formData)
      );
}

const fillForm =()=>{
    const dataFormParse = JSON.parse(localStorage.getItem(FEEDBACK_FORM_LOCAL_STORAGE_KEY))


    for (const key in dataFormParse) {
        const inputEl = feedbackForm.elements[key];
        const inputValue = dataFormParse[key];
        inputEl.value = inputValue;
      }
}
fillForm()


const submitForm = event =>{
    event.preventDefault()
    
    localStorage.removeItem(FEEDBACK_FORM_LOCAL_STORAGE_KEY)

    console.log(formData)

    event.currentTarget.reset()
    

}
feedbackForm.addEventListener("input", throttle(handleInput), 500)
feedbackForm.addEventListener('submit', submitForm)