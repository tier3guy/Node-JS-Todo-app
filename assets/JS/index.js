
const date_div = document.getElementById('date');
var date = new Date();


var month = date.getMonth();
month++;
if(month == 1) month = 'Jan';
else if(month == 2) month = 'Feb';
else if(month == 3) month = 'Mar';
else if(month == 4) month = 'Apr';
else if(month == 5) month = 'May';
else if(month == 6) month = 'Jun';
else if(month == 7) month = 'Jul';
else if(month == 8) month = 'Aug';
else if(month == 9) month = 'Sept';
else if(month == 10) month = 'Oct';
else if(month == 11) month = 'Nov';
else if(month == 12) month = 'Dec';


date = month + ' - ' + date.getDate() + ' - ' + date.getFullYear();
date_div.innerHTML = date;

document.querySelectorAll('.delete__btn').forEach(currentValue=> {
  var id = currentValue.getAttribute("data-id");
  currentValue.addEventListener('click' , () => {
    var xhttp = new XMLHttpRequest();

    if(confirm("Do Really want to delete the data ? ")){
      xhttp.open("DELETE", `http://localhost:3000/api/todos/${id}` , true);
      xhttp.send();

      window.location.reload();
    }

    window.location.reload();
  })
})