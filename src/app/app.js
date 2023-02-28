window.addEventListener('load', function() {
    // Card Graphic Elements
    const cardNumberGraphic = document.getElementsByClassName('card-number')[0]; 
    const cardNameGraphic  = document.getElementsByClassName('card-name')[0];
    const cardDateGraphic  = document.getElementsByClassName('card-date')[0];
    const cardCsvGraphic  = document.getElementById('card-back-numbers');  

    // Error/Success Elements 
    const errorNameElement = document.getElementsByClassName('error-name')[0]; 
    console.log(errorNameElement);
  
    // Card Input Fields 
    const cardNameInput = document.getElementById('cardholdername');
    const cardNumberInput = document.getElementById('cardnumber');
    const cardMonthInput = document.getElementById('cardmonth');
    const cardYearInput = document.getElementById('cardyear'); 
    const cardCsvInput = document.getElementById('cardcsv');  
  
    // Submit Button 
    const cardDataProcessButton = document.getElementById('process');
    console.log(cardDataProcessButton);
  
    // Arrays of Inputs and Graphic Elements
    const cardGraphicElementsArray = [cardNumberGraphic , cardNameGraphic , cardDateGraphic , cardCsvGraphic , cardCsvGraphic ]; 
    const cardInputElementsArray = [cardNameInput,cardNumberInput,cardMonthInput, cardYearInput, cardCsvInput];     


    cardDataProcessButton.addEventListener('click', function(event){
        event.preventDefault();  
        ProcessInputData();
    })

    let ProcessInputData = () => {
        ProcessInputName(cardNameInput,cardNameGraphic,errorNameElement);
    }

    let ProcessInputName = (nameInput,nameGraphic,error) => {
        const inputText = nameInput.value; 
        const nameRegex = /^[a-zA-Z\s]{1,30}$/;
        const isValid = nameRegex.test(inputText);
        if(!isValid) {
            error.classList.toggle("show", true);
        } else{
            nameGraphic.innerText = inputText;
            error.classList.toggle("show", false);
        }
    }
  });
