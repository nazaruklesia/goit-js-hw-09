import"./assets/styles-DqM1T7xp.js";const e={email:"",message:""},a=document.querySelector(".feedback-form");console.log(a);const s=JSON.parse(localStorage.getItem("feedback-form-state"));s&&(e.email=s.email||"",e.message=s.message||"",a.email.value=e.email,a.message.value=e.message);a.addEventListener("input",t=>{const{name:l,value:m}=t.target;l==="email"&&(e.email=m.trim()),l==="message"&&(e.message=m.trim()),localStorage.setItem("feedback-form-state",JSON.stringify(e))});a.addEventListener("submit",t=>{if(t.preventDefault(),!e.email||!e.message){alert("Fill please all fields");return}console.log(e),localStorage.removeItem("feedback-form-state"),e.email="",e.message="",a.email.value="",a.message.value=""});
//# sourceMappingURL=2-form.js.map
