'use strict';

let yourName = prompt('welcome to my website what is your name ');

if(yourName == ''  ){
    //console.log('sorry try agai')
    yourName = prompt('please write name ');

}else{
    alert(`welcome ${yourName}`)
};

let yourAge = prompt('are old biger than 18 yes/no?').toLowerCase();
if(yourAge == 'yes' ){

    //console.log('success enter');
    alert('your age biger than 18'); 

}else{
    //console.log('sorry we need biger than 18');
    alert('sorry we need biger than 18')
}


let askFeild = prompt('are you intersted with web development Yes/No?').toLowerCase();
if(askFeild == 'yes' ){

    //console.log('welcome to our course');
    alert('yes, i  am intersted with programming' ); 

}else{
   //console.log('good luck');
    alert('no, I am not intersted');
}


let askLanguage = prompt('Are You Speake English?').toLowerCase();
if(askLanguage == 'yes' ){

    //console.log('good welcome ');
    alert( 'good you are english speaker' ); 

}else{
    //console.log('sorry we need english speaker');
    alert('sorry we need english speaker')
}

let askCountry = prompt('Are You from jordan or syria or palestine?').toLowerCase();
if(askCountry == 'yes' ){

    //console.log('welcome with us ');
    alert( 'welocme with us' ); 

}else{
    //console.log('sorry we agree about joradnian,or syrian or palastenian  people ');
    alert('sorry we agree about joradnian,or syrian or palastenian  people')
}

let askCountryLive = prompt('Are You live in jordan ?').toLowerCase();
if(askCountryLive == 'yes' ){

    //console.log('welcome with us ');
    alert( 'welocme with us in jordan' ); 

}else{
    //console.log('sorry we need you in jordan ');
    alert('sorry we need need you in jordan')
}