function fact(num){
    if(num==0){
        return 1;
    }
    else{
        return num *fact(num-1);
    }
}
function fact1(){
    var num=document.getElementById('number').value;
    var f=fact(num);
    document.getElementById('res').innerHTML=' The factorial of the number  '+num+' is '+f;
}
