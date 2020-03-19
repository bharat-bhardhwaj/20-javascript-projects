const form =document.getElementById('form');
const username =document.getElementById('username');
const email =document.getElementById('email');
const password =document.getElementById('password');
const pasword2 =document.getElementById('password2');


function showError(input,message){
    const formControl= input.parentElement;
    formControl.className='form-control error';
    const small=formControl.querySelector('small');
    small.innerText=message;
}

function showSuccess(input){
    const formControl= input.parentElement;
    formControl.className='form-control success';
}

function checkEmail(input){
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if(re.test(input.value.trim())){
        showSuccess(input);
        
    }else{

        showError(input,'email is not valid')

    }
}

function checkRequired(inputArr){
    inputArr.forEach(function(input){
        if(input.value.trim() === ''){
            showError(input,`${getfieldName(input)} isrequired`)
        }else{
            showSuccess(input)
        }
    });
}
//check input length
function checkLength(input,min,max){
    if(input.value.lenght<min){
        showError(input,`${getfieldName(input)} must e at least ${min} charcters`)
    }else if(input.value.lenght>max){
        showError(input,`${getfieldName(input)} must be less thatb ${max} characters`)
    }
}
//check passwords match
function checkPasswordMatch(input1,input2){
    if(input1.value !==input2.value){
        showError(input2,'password do not match');
    }
}

function getfieldName(input){
    return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}



//event listeners
form.addEventListener('submit',function(e){
    e.preventDefault();

    checkRequired([username,email,password,password2]);
    checkLength(username,3,15);
    checkLength(password,6,25);
    checkEmail(email);
    checkPasswordMatch(password,password2)

})