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
const color = document.getElementById('color');
const colors = document.getElementsByClassName("colors");
const punColors = document.getElementsByClassName('puns');
const heartColors = document.getElementsByClassName ('heart');
const selectOption = document.createElement ('option');

// color.insertBefore(selectOption, colors[0]);
colors[0].innerHTML = 'Please select a T-shirt theme';
for (let i = 0; i < color.length; i++){
    colors[i].style.display = 'none';}

design.addEventListener('change', (e) => {
    if (e.target.value === "js puns") {
        colors[0].innerHTML = 'Cornflower Blue (JS Puns shirt only)';
        for (let i = 0; i < punColors.length; i++){
            punColors[i].style.display = '';
            heartColors[i].style.display = 'none';
        }
    }else if (e.target.value === "heart js"){
        colors[0].innerHTML ='';
        colors[0].innerHTML = 'Tomato (I &#9829; JS shirt only)';
        for (let i = 0; i < heartColors.length; i++){
            heartColors[i].style.display = '';
            punColors[i].style.display = 'none';
            }
            
    } else { 
        colors[0].innerHTML = 'Please select a T-shirt theme';
        for (let i = 0; i < color.length; i++){
        colors[i].style.display = 'none';}
    }
}); 

// This section will handle the activities checkboxes. When an activity is selected that has the same time as the another activity,
// it will be grey out and the user will not be able to check it anymore until the unselected the previous checkbox. 
const checkboxes = document.querySelector('.activities');
const checkboxesInput = document.querySelectorAll('.activities input');


let totalText = document.createElement('p');
checkboxes.appendChild(totalText)
totalText.style.display = 'none';
let cost = '';
// const clickedType = clicked.getAttribute('data-day-and-time');
checkboxes.addEventListener('change', (e) =>{
    const clicked = e.target;
    const clickedType = clicked.getAttribute('data-day-and-time');
    cost = clicked.getAttribute('data-cost');
    for (let i = 0; i< checkboxesInput.length; i++){
        const checkboxType = checkboxesInput[i].getAttribute('data-day-and-time')
         
        if (clicked.checked){
            let startingVal = 0;
            let total = startingVal + cost;
            totalText.textContent = total;
            totalText.style.display = '';  
        }
        if (clickedType === checkboxType && clicked !== checkboxesInput[i]){
            checkboxesInput[i]
            if (clicked.checked){
                checkboxesInput[i].disabled = true;
            }else {
                checkboxesInput[i].disabled = false;
            }
        }
    }

});
// Payment info section will display the appropriate message based on the users payment selection.

const payment = document.getElementById('payment');
const creditInfo = document.getElementById('credit-card');
const paypalInfo = document.getElementById('paypal');
const btcInfo = document.getElementById('bitcoin');
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
        btcInfo.style.display === 'none';

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

const submit = document.getElementsByTagName('button');



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
    const activitiesInput = document.querySelectorAll('.activities input');
    for (let i = 0; i< activitiesInput.length;i++){
        if (activitiesInput[i].checked){
            activitiesWrapper.style.borderColor = 'white';
            return true;
        }
    }
    activitiesWrapper.style.color = 'red';
    return false;
}
const ccNumValidation = () => {
    const ccNum = document.getElementById('cc-num');
    const ccReg = /\d{16}/;
    const ccNumInput = document.getElementById('cc-num').value;
    const ccTest = ccReg.test(ccNumInput);
    if (payment.value === 'credit card'){
        if (ccTest){
            ccNum.style.borderColor = 'white';
            return true;
        }else {
            ccNum.style.borderColor = 'red';
            return false;
        }
    }
}
const zipValidation = () => {
    const zip = document.getElementById('zip');
    const zipReg = /\d{5}/;
    const zipInput = document.getElementById('zip').value;
    const zipTest = zipReg.test(zipInput);
    if (payment.value === 'credit card'){
        if (zipTest){
            zip.style.borderColor = 'white';
            return true;
        } else {
            zip.style.borderColor = 'red';
            return false;
        }
    }
}
const cvvValidation = () => {
    const cvv = document.getElementById('cvv')
    const cvvReg = /\d{3}/;
    const cvvInput = document.getElementById('cvv').value;
    const cvvTest = cvvReg.test(cvvInput);
    if (payment.value === 'credit card'){
        if (cvvTest){
            cvv.style.borderColor = 'white';
            return true;
        }else {
            cvv.style.borderColor = 'red';
            return false;
        }  
    }   
}

const activitiesWrapper = document.querySelector('.activities');
const activitiesInput = document.querySelectorAll ('.activities input');


const titleInput = document.getElementById('title');



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
   
});










// const nameReg = /[A-Za-z]+/;
// const emailReg = /[^@]+@\w+\.[A-Za-z]{3}/;
// const ccReg = /\d{16}/;
// const zipReg = /\d{5}/;
// const cvvReg = /\d{3}/;
// const name = document.getElementById('name').value;
// const nameTest = nameReg.test(name);
// const email = document.getElementById('mail');
// const emailTest = emailReg.test(email);
// const title = document.getElementById('title');
// const activities = document.getElementsByClassName('activities');
// const ccNum = document.getElementById('cc-num');
// const ccTest = ccReg.test(ccNum);
// const zip = document.getElementById('zip')
// const zipTest = zipReg.test(zip);
// const cvv = document.getElementById('cvv');
// const cvvTest = cvvReg.test(cvv);