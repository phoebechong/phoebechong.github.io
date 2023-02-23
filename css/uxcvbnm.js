window.addEventListener('DOMContentLoaded', function () {
    document.getElementById('password').addEventListener('keydown', function () {
        if (keyCode == 13) document.getElementById('button').click()
     }, false);
 
     document.getElementById('button').addEventListener('click', function () {
        if (document.getElementById('password').value == '09556') 
        { 
          window.location.href = 'contactUxcvbnm.html';
        } 
      else {  alert('Invalid Password!'); password.setSelectionRange(0, password.value.length);   } 
     }, false);
}, false);