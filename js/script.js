// This puts the focus on the first input, the "name" input.
const name = document.getElementById("name");
name.focus();
// This accesses the input for the job title selector and the selection "other".
// When "other" is select, the input text field becomes available to the user. 
const jobSelector = document.getElementById('title')
const jobInput = document.getElementById('job');
jobInput.style.display = 'none';

jobSelector.addEventListener('change', (e)=>{
    if (e.target.value === "other") {
        jobInput.style.display = '';
    } else {
        jobInput.style.display = 'none'; 
    }
});
// This variables are being declared in order to access the design and color drop down menus. 
// The the color options will change based on the design chosen.
const design = document.getElementById("design");
const colorDiv = document.getElementById('shirt-colors');
const firstColor = document.querySelector('colors puns');
const colors = document.getElementsByClassName("colors");
const punColors = document.getElementsByClassName('puns');
const heartColors = document.getElementsByClassName ('heart');
colorDiv.style.display = 'none';

design.addEventListener('change', (e) => {

    if (e.target.value === "js puns") {
            for (let i = 0; i < punColors.length; i++){
                colorDiv.style.display = '';
                punColors[i].style.display = '';
                heartColors[i].style.display = 'none';

            }
    }else if (e.target.value === "heart js"){
       
            for (let i = 0; i < heartColors.length; i++){
                colorDiv.style.display = '';
                heartColors[i].style.display = '';
                punColors[i].style.display = 'none';
            }
            
    } else { 
            for (let i = 0; i < color.length; i++){
                colorDiv.style.display = 'none';
            
            }
        }
}); 
// This section will handle the activities checkboxes. When an activity is selected that has the same time as the another activity,
// it will be grey out and the user will not be able to check it anymore until the unselected the previous checkbox. 
const checkboxes = document.querySelector('.activities');
const activitiesInput = document.querySelectorAll('.activities input');
let totalText = document.createElement('p');
checkboxes.appendChild(totalText)
let cost = '0';

totalText.style.display = 'none';

checkboxes.addEventListener('change', (e) =>{
    const clicked = e.target;
    const clickedType = clicked.getAttribute('data-day-and-time');
    let activitiesCost = clicked.getAttribute('data-cost');
    if (clicked.checked){
        cost = parseInt(cost, 10) + parseInt(activitiesCost,10);
        totalText.style.display = '';  
        totalText.textContent = `Total: $${cost}`
        activitiesCost = '';
    }else {
        cost = parseInt(cost, 10) - parseInt(activitiesCost,10);
        totalText.style.display = '';  
        totalText.textContent = `Total: $${cost}`
        activitiesCost = '';
    }
        for (let i = 0; i< activitiesInput.length; i++){
            const checkboxType = activitiesInput[i].getAttribute('data-day-and-time')
            
            if (clickedType === checkboxType && clicked !== activitiesInput[i]){
                activitiesInput[i]
                if (clicked.checked){
                    activitiesInput[i].disabled = true;
                }else {
                    activitiesInput[i].disabled = false;
                }
            }
        }
});
// Payment info section will display the appropriate message based on the users payment selection.
const payment = document.getElementById('payment');
const creditInfo = document.getElementById('credit-card');
const paypalInfo = document.getElementById('paypal');
const btcInfo = document.getElementById('bitcoin');
payment.value = 'credit card';
creditInfo.style.display = '';
paypalInfo.style.display = 'none';
btcInfo.style.display = 'none';
payment.addEventListener('change', (e)=> {
    if(e.target.value === 'select method'){
        creditInfo.style.display = '';
        paypalInfo.style.display = 'none';
        btcInfo.style.display = 'none';
 
    } else if (e.target.value === 'credit card'){
        creditInfo.style.display = '';
        paypalInfo.style.display = 'none';
        btcInfo.style.display = 'none';

    } else if (e.target.value === 'paypal'){
        creditInfo.style.display = 'none';
        paypalInfo.style.display = '';
        btcInfo.style.display = 'none';
    } else if (e.target.value === 'bitcoin'){
        creditInfo.style.display = 'none';
        paypalInfo.style.display = 'none';
        btcInfo.style.display = '';
    }      
});
// This area will perform the validation of the form. 
// If the input from the user is not correct, the form field which is incorrect will turn red. 
// These are the functions that will validate each part of the form.
 const nameValidation = () => {
    const nameReg = /[A-Za-z]+/;
    const nameInput = document.getElementById('name').value;
    const nameTest = nameReg.test(nameInput);
        if (nameTest){
            name.style.borderColor = 'white';
            return true;
        }else {
            name.style.borderColor = 'red';
            return false;
        }
}
const emailValidation = () => {
    const email = document.getElementById('mail')
    const emailReg = /[^@]+@\w+\.[A-Za-z]{3}/;
    const emailInput = document.getElementById('mail').value;
    const emailTest = emailReg.test(emailInput);
        if (emailTest){
            email.style.borderColor = 'white';
            return true;
        }else {
            email.style.borderColor = 'red';
            return false;
        }
}
const activityValidation = () => {
    const activitiesWrapper = document.querySelector('.activities legend');
        for (let i = 0; i< activitiesInput.length;i++){
            if (activitiesInput[i].checked){
                activitiesWrapper.style.color = 'rgba(6, 49, 68, 0.9)';
                return true;
            }
        }
        activitiesWrapper.style.color = 'red';
        return false;
};
const ccNumValidation = () => {
    const ccNum = document.getElementById('cc-num');
    const divWrapper = document.getElementById('credit-card');
    const ccReg = /^\d{13,16}$/;
    const errorMesOne = document.createElement('p');
    errorMesOne.textContent = '';
    const errorMesTwo = document.createElement('p');
    errorMesTwo.textContent = '';
    const ccNumInput = document.getElementById('cc-num').value;
    const ccTest = ccReg.test(ccNumInput);
                if (ccTest){
                    ccNum.style.borderColor = 'white';
                    return true;
                }else {
                    ccNum.style.borderColor = 'red';
                    return false;
                }            
};
const zipValidation = () => {
    const zip = document.getElementById('zip');
    const zipReg = /^\d{5}$/;
    const zipInput = document.getElementById('zip').value;
    const zipTest = zipReg.test(zipInput);
        
            if (zipTest){
                zip.style.borderColor = 'white';
                return true;
            } else {
                zip.style.borderColor = 'red';
                return false;
            }       
};
const cvvValidation = () => {
    const cvv = document.getElementById('cvv')
    const cvvReg = /^\d{3}$/;
    const cvvInput = document.getElementById('cvv').value;
    const cvvTest = cvvReg.test(cvvInput);
        
            if (cvvTest){
                cvv.style.borderColor = 'white';
                return true;
            }else {
                cvv.style.borderColor = 'red';
                return false;
            }        
};
const paymentLegend = document.querySelector('.pay legend');
const paymentValidation = () => {
    
    if (payment.value === 'credit card'){
        paymentLegend.style.color = 'rgba(6, 49, 68, 0.9)';
        return true;
    } else if(payment.value === 'paypal'|| payment.value === 'bitcoin'){
        paymentLegend.style.color = 'rgba(6, 49, 68, 0.9)';
        return true;
    } else if (payment.value === 'select method'){
        paymentLegend.style.color = 'red';
        return false;
    }
}

const titleInput = document.getElementById('title');
// This is the event listener that validates the form when the user presses "Register" button.
const submit = document.getElementsByTagName('button');
submit[0].addEventListener('click', (e)=> {
    nameValidation();
    if (!nameValidation()){
        e.preventDefault();
    } 
    emailValidation();
    if (!emailValidation()){
    e.preventDefault();
    } 
    activityValidation();
    if (!activityValidation){
        e.preventDefault(); 
    }
    paymentValidation();
    if (!paymentValidation()){
        e.preventDefault();
    }
    if (payment.value === 'credit card') {
        ccNumValidation();
    if (!ccNumValidation()){
        e.preventDefault(); 
    }
    zipValidation(); 
    if (!zipValidation()){
        e.preventDefault();  
    }
    cvvValidation();
    if (!cvvValidation()){
        e.preventDefault();
    } 
    }
     
});
