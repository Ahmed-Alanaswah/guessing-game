'use strict';
let score = 0;
let yourName = prompt('welcome to my website what is your name ');

if(yourName === '' ){
  //console.log('sorry try agai')
  yourName = prompt('please write name ');
  score++ ;
}else{
  alert(`welcome ${yourName}`);
}

let yourAge = prompt('are old biger than 18 yes/no?').toLowerCase();
if(yourAge === 'yes' ){

  //console.log('success enter');
  alert('your age biger than 18');
  score++ ;
}else{
  //console.log('sorry we need biger than 18');
  alert('sorry we need biger than 18');
}


let askFeild = prompt('are you intersted with web development Yes/No?').toLowerCase();
if(askFeild === 'yes' ){

  //console.log('welcome to our course');
  alert('yes, i  am intersted with programming' );
  score++ ;
}else{
  //console.log('good luck');
  alert('no, I am not intersted');
}


let askLanguage = prompt('Are You Speake English?').toLowerCase();
if(askLanguage === 'yes' ){
  score++ ;
  //console.log('good welcome ');
  alert( 'good you are english speaker' );

}else{
  //console.log('sorry we need english speaker');
  alert('sorry we need english speaker');
}

let askCountry = prompt('Are You from jordan or syria or palestine?').toLowerCase();
if(askCountry === 'yes' ){
  score++ ;
  //console.log('welcome with us ');
  alert( 'welocme with us from these country' );

}else{
  //console.log('sorry we agree about joradnian,or syrian or palastenian  people ');
  alert('sorry we agree about joradnian,or syrian or palastenian  people');
}

let askCountryLive = prompt('Are You live in jordan ?').toLowerCase();
if(askCountryLive === 'yes' ){
  score++ ;
  //console.log('welcome with us ');
  alert( 'welocme with us in jordan' );

}else{
  //console.log('sorry we need you in jordan ');
  alert('sorry we need need you in jordan');
}


let guessNumber = prompt('i  will ask you about my favourite  number and you have 4 opportunitites only ');

if (Number(guessNumber) === 20){
  score++ ;
  alert('true choice thank you my best number is '+ guessNumber + ` this is your attempt `);

}else{
  for(let count =1; count <= 3; count++){
    if(Number(guessNumber) > 20){

      guessNumber = prompt('the number is higer try again ');

    }else if (Number(guessNumber) < 20){

      guessNumber = prompt('the number is lower try again ');

    }
    
  }
  alert('you are finished your attempts sorry');
}



let askAnime = prompt('what is the favorite anime for me you have 6 attemps');

let favAnime = ['one piece','naruto','hunter','boku','bleach','slayer'];


if (askAnime === favAnime[0] || askAnime === favAnime[1] || askAnime === favAnime[2] || askAnime === favAnime[3] || askAnime === favAnime[4] || askAnime === favAnime[5] ){
  alert('good this is my favorite anime ');
  score++ ;
}else{

  for (let i=1;i < favAnime.length;i++){

    askAnime = prompt('try gain please');
  
  }

  alert('sorry you are finished');
 
}

alert(`your score is ${score} out of 7`);


