function ageInDays(){
    var birthday = prompt('what year you were born ?');
    var ageInDayss= (2022-birthday)*365;
   var h1 = document.createElement('h1');
   var text = document.createTextNode('you are'+ " "+ ageInDayss + ' days old');
   h1.setAttribute('id','ageInDays');
   h1.appendChild(text);
   document.getElementById('border').appendChild(h1);
}
function noageInDays(){
    document.getElementById('ageInDays').remove();
}

