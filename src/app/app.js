window.addEventListener('load', function() {

  
    // Card Graphic Elements
    const cardNumberGraphic = document.querySelector('.card-number');
    const cardNameGraphic  = document.querySelector('.card-name');
    const cardDateGraphic  = document.querySelector('.card-date');
    const cardCsvGraphic  = document.querySelector('#card-back-numbers');  
  
    // Error/Success Elements 
    const errorNameElement = document.querySelector('.error-name');
    const errorNumberElement = document.querySelector('.error-number');
    const errorDateElement = document.querySelector('.error-date');
    const errorCsvElement = document.querySelector('.error-csv');
    
    // Card Input Fields 
    const cardNameInput = document.querySelector('#cardholdername');
    const cardNumberInput = document.querySelector('#cardnumber');
    const cardMonthInput = document.querySelector('#cardmonth');
    const cardYearInput = document.querySelector('#cardyear'); 
    const cardCsvInput = document.querySelector('#cardcsv');  
    
    // Submit Button 
    const cardDataProcessButton = document.querySelector('#process');
  
    // Sends data from input field to be processed on click
    cardDataProcessButton.addEventListener('click', function(event){
      event.preventDefault();   
      ProcessInputData();
    })
  
    // Processes Each Input, and displays if not entered correctly Errors
    const ProcessInputData = () => { 
      ProcessInputName(cardNameInput,cardNameGraphic,errorNameElement); 
      ProcessInputNumber(cardNumberInput,cardNumberGraphic,errorNumberElement);  
      ProcessInputDate(cardMonthInput,cardYearInput,cardDateGraphic,errorDateElement);
      ProcessInputCsv(cardCsvInput,errorCsvElement);
    }
  
    // Processes the Name input Field
    const ProcessInputName = (nameInput,nameGraphic,error) => {
      const inputText = nameInput.value; 
      const nameRegex = /^[a-zA-Z\s]{1,20}$/;
      const isValid = nameRegex.test(inputText);
      UpdateGraphicAndError(isValid, inputText, nameGraphic, error);
    }
    
    // Processes the Card Number input Field
    const ProcessInputNumber = (numberInput,numberGraphic,error) => {
      const inputText = numberInput.value; 
      const numberRegex = /^(\d{4}\s){3}\d{4}$/;
      const isValid = numberRegex.test(inputText); 
      UpdateGraphicAndError(isValid, inputText, numberGraphic, error);
    } 

    // Processes the Card Month input Field
    const ProcessInputDate = (monthInput,yearInput,dateGraphic,error) => { 
        const dateText =  monthInput.value + "/" + yearInput.value; 
        const inputText = dateText;
        const dateRegex = /^(0[1-9]|1[0-2])\/[0-9]{2}$/;
        const isValid = dateRegex.test(inputText);
        UpdateGraphicAndError(isValid, inputText, dateGraphic, error);
      } 

    let ProcessInputCsv = (csvInput,error) => {
      const csvText = csvInput.value; 
      const csvRegex = /^\d{3}$/; 
      const isValid = csvRegex.test(csvText); 
      UpdateGraphicAndError(isValid, csvText, cardCsvGraphic,error)
    }

    // Returns Error message above erroneous input field
    const UpdateGraphicAndError = (isValid, inputText, graphicElement, errorElement) => {
      if(!isValid) {
        errorElement.classList.toggle("show", true);
      } else{
        graphicElement.innerText = inputText;
        errorElement.classList.toggle("show", false);
      }
    }
  });