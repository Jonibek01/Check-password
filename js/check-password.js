// taking html elements
var elCheckForm = document.querySelector('.js-check-password-form');
var elCheckInput = elCheckForm.querySelector('.js-check-password-input');
var elChekBtn = elCheckForm.querySelector('.js-check-btn');


var elDanger = document.querySelector('.js-danger');
var elSuccess = document.querySelector('.js-success');

elDanger.classList.add('d-none');
elDanger.classList.remove('d-inline-block');

elSuccess.classList.add('d-none');
elSuccess.classList.remove('d-inline-block');

// giving attempts
var attempts = 5;
var elAttemptResult = document.querySelector('.js-attempts-result');
var elAdditionalText = document.querySelector('.addl-text');
elAdditionalText.textContent = attempts;


//the password

var password = 'amegooos';

var makeAttempt = document.querySelector('.js-try-again');

//reload the website
makeAttempt.addEventListener('click', function(){
    location.reload();
})

// listening the form
elCheckForm.addEventListener('submit', function(evt){
    evt.preventDefault();

    //taking the value of input
    var userInput = elCheckInput.value.trim();

    // if the value of input is empty, alert this text
    if (userInput === '') {
        alert('Please enter ur password');
        return;
    }

    // decrease by 1 every time
    attempts--;
    elAdditionalText.textContent = attempts;

    // if password is true 
    if(userInput === password) {
        elCheckInput.classList.add('is-valid');
        elCheckInput.classList.remove('is-invalid');

        elSuccess.classList.add('d-inline-block')
        elSuccess.classList.remove('d-none');
        elCheckForm.remove()
        elAttemptResult.remove()
    } else {
        elCheckInput.classList.remove('is-valid');
        elCheckInput.classList.add('is-invalid');

        elDanger.classList.add('d-inline-block');
        elDanger.classList.remove('d-none');

        // if the attempts not remained
        if(attempts === 0) {
            elCheckForm.remove()
            elAttemptResult.remove();
            elDanger.textContent = `Ohhh man, owner got the message :P`;    
            makeAttempt.classList.remove('d-none')
        }
    }
})
