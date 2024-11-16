
const formData = {
  email: "",
  message: "",
};

const form = document.querySelector('.feedback-form');

console.log(form);

const fillData = JSON.parse(localStorage.getItem('feedback-form-state'));

if (fillData) {
  formData.email = fillData.email || "";
    formData.message = fillData.message || "";
    
     form.email.value = formData.email;
    form.message.value = formData.message;
}
    
form.addEventListener('input', (event) => {
  const { name, value } = event.target;

  if (name === 'email') {
    formData.email = value.trim();
  }

  if (name === 'message') {
    formData.message = value.trim();
  }

  
  localStorage.setItem('feedback-form-state', JSON.stringify(formData));
});


form.addEventListener('submit', (event) => {
  event.preventDefault();

 
  if (!formData.email || !formData.message) {
    alert('Fill please all fields');
    return;
  }

  
console.log(formData);
  

  localStorage.removeItem('feedback-form-state');
  formData.email = "";
  formData.message = "";
  form.email.value = "";
  form.message.value = "";
});
