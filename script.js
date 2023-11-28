function submitform () {
    var form = document.getElementById('survey-form');

    if (form.checkValidity()){
        form.style.display = 'none';
        document.getElementById('thanks').style.display = 'block';
    }
    else{
        alert("Please fill out the required fields")
    }
  } 