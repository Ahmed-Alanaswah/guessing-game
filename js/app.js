'use strict';

let yourName = prompt('welcome to my website what is your name ');

if(yourName == ''  ){
    //console.log('sorry try agai')
    yourName = prompt('please write name ');

}else{

};

let yourAge = prompt('are old biger than 18 ?').toLowerCase();
if(yourAge == 'yes' ){

    //console.log('success enter');
    alert('welcome ' +yourName  ); 

}else{
    //console.log('sorry we need biger than 18');
    alert('sorry we need biger than 18')
}


let askFeild = prompt('are you intersted with web development Yes/No?').toUpperCase();
if(yourAge == 'yes' ){

    //console.log('welcome to our course');
    alert('welcome to our course' ); 

}else{
   //console.log('good luck');
    alert('good luck');
}


// switch (askFeild){
//     case 'Yes':

//     console.log('welcome to our course');

//     alert('welcome to oure course');

//     break;

//     case 'No':

//     console.log('good luck');

//     alert('goog luck');
    
//     break;

//     default:

//     alert('thank for visit our web to more information contact with us')

// }


let askLanguage = prompt('Are You Speake English?').toLowerCase();
if(askLanguage == 'yes' ){

    //console.log('good welcome ');
    alert( 'good welocme' ); 

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
    alert( 'welocme with us' ); 

}else{
    //console.log('sorry we need you in jordan ');
    alert('sorry we need need you in jordan')
}