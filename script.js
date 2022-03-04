
// Объявы

let city = document.querySelectorAll('input[name=city]'),
cityOther = document.querySelector('input[name=city__other]'),

age = document.querySelectorAll('input[name=age]'),
ageOther = document.querySelector('input[name=age__other]'),

edName = document.querySelector('input[name=education__name]'),
edStart = document.querySelector('input[name=education__start]'),
edEnd = document.querySelector('input[name=education__end]'),
edCurrent = document.querySelector('input[name=education__current]'),

jobName = document.querySelector('input[name=job__name]'),
jobStart = document.querySelector('input[name=job__start]'),
jobEnd = document.querySelector('input[name=job__end]'),
jobCurrent = document.querySelector('input[name=job__current]'),

fullName = document.querySelector('input[name=fullname]'),
phone = document.querySelector('input[name=phone'),

steps = document.querySelectorAll('.step'),

btnNext = document.querySelector('.next'),
btnBack = document.querySelector('.back');



// Инпуты

let step = 0;

function stepNext() {
    steps[step++].style.display = 'none';
    steps[step].style.display = 'flex';
}

function stepBack() {
    steps[step--].style.display = 'none';
    steps[step].style.display = 'flex';
}


city.forEach((element) => {
    element.addEventListener('change', function() {
        if(element.value === 'Другой') {
            cityOther.style.display = 'flex';
        } else {
            cityOther.style.display = 'none';
        }
    })
})


age.forEach((element) => {
    element.addEventListener('change', function() {
        if(element.value === 'Другой') {
            ageOther.style.display = 'flex';
        } else {
            ageOther.style.display = 'none';
        }
    })
})

// Кнопка вперёд

btnNext.addEventListener('click', function() {
    
    if (step === 0) {
        city.forEach((element) => {
            if((element.checked && element.value !== 'Другой') ||         (element.checked && element.value === 'Другой' && cityOther.value.length !== 0)) {
                stepNext();
                document.getElementById("back").style.display = "block";
            } 
        }) 
    } else if (step === 1) {
            document.getElementById("back").style.display = "none";

        age.forEach((element) => {
            if ((element.checked && element.value !== 'Другой' && element.value < 18) || ((element.checked && element.value === 'Другой') && (ageOther.value.length > 0 && ageOther.value < 18))) {
                stepNext();
                document.getElementById("back").style.display = "block";

            } else if ((element.checked && element.value !== 'Другой' && element.value >= 18) || ((element.checked && element.value === 'Другой') && (ageOther.value.length > 0 && ageOther.value >= 18))) {
                steps[step++].style.display = 'none';
                step = 3;
                steps[step].style.display = 'flex';
                document.getElementById("back").style.display = "block";
            } 
        })
    } else if (step === 2) {
        if ((edName.value.length > 0 && edStart.value !== "" && edEnd.value !== "") || (edName.value.length > 0 && edStart.value !== 0 &&edCurrent.checked)) {
            steps[step++].style.display = 'none';
            step = 4;
            steps[step].style.display = 'flex';
            document.getElementById("back").style.display = "block";

        } 
    } else if (step == 3) {
        if ((jobName.value.length > 0 && jobStart.value !== "" && jobEnd.value !== 0) || (jobName.value.length > 0 && jobStart.value !== 0 && jobCurrent.checked)) {
            stepNext();
            document.getElementById("back").style.display = "block";

        }
    } else if (step === 4) {
        if (fullName.value.length > 0 && phone.value.length > 0) {
            stepNext();
            document.getElementById("back").style.display = "none";
            document.getElementById("next").style.display = "none";

        }
    }
})

// Кнопка назад

btnBack.addEventListener('click', function() {
 if (step === 1 || step === 2 || step === 4) {
        stepBack(); 
    } else if (step === 3) {
        steps[step--].style.display = 'none';
        step = 1;
        steps[step].style.display = 'flex';
    } 
})
