function check(){
    var age = document.getElementById('age').value;
    if(age >= 18){
        alert('you can vote now ');
    }
    else if(age == 17){
        alert('wait for one year');
    }
    else{
        alert('you can not vate');
    }
}