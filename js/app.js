'use strict';
let score = 0;

function getName(){

  let yourName = prompt('welcome to my website what is your name ');

  if(yourName === '' ){
    //console.log('sorry try agai')
    yourName = prompt('please write name ');
    score++ ;
  }else{
    alert(`welcome ${yourName}`);
  }
}

getName();

function getYourAge(){
  let yourAge = prompt('are old biger than 18 yes/no?').toLowerCase();
  if(yourAge === 'yes' ){

    //console.log('success enter');
    alert('your age biger than 18');
    score++ ;
  }else{
  //console.log('sorry we need biger than 18');
    alert('sorry we need biger than 18');
  }
}

getYourAge();


function askFeild(){
  let askFeild = prompt('are you intersted with web development Yes/No?').toLowerCase();
  if(askFeild === 'yes' ){

    //console.log('welcome to our course');
    alert('yes, i  am intersted with programming' );
    score++ ;
  }else{
  //console.log('good luck');
    alert('no, I am not intersted');
  }
}
askFeild();


function askLanguage(){
  let askLanguage = prompt('Are You Speake English?').toLowerCase();
  if(askLanguage === 'yes' ){
    score++ ;
    //console.log('good welcome ');
    alert( 'good you are english speaker' );

  }else{
    //console.log('sorry we need english speaker');
    alert('sorry we need english speaker');
  }
}
askLanguage();

function askLang(){
  let askCountry = prompt('Are You from jordan or syria or palestine?').toLowerCase();
  if(askCountry === 'yes' ){
    score++ ;
    //console.log('welcome with us ');
    alert( 'welocme with us from these country' );

  }else{
    //console.log('sorry we agree about joradnian,or syrian or palastenian  people ');
    alert('sorry we agree about joradnian,or syrian or palastenian  people');
  }
}

askLang();

function askCountry(){
  let askCountryLive = prompt('Are You live in jordan ?').toLowerCase();
  if(askCountryLive === 'yes' ){
    score++ ;
    //console.log('welcome with us ');
    alert( 'welocme with us in jordan' );

  }else{
    //console.log('sorry we need you in jordan ');
    alert('sorry we need need you in jordan');
  }
}

askCountry();


function guesNum(){

  for(let count = 0; count < 4; count++){

    let guessNumber=prompt('i  will ask you about my favourite  number and you have 4 opportunitites only ');

    if (Number(guessNumber) === 20){
      score++ ;

      alert('true choice thank you my best number is '+ guessNumber + ' this is your attempt ');
      break;

    }else if(Number(guessNumber) > 20){

      alert('the number is higer try again ');

    }else {

      alert('the number is lower try again ');

    }
    if(count === 3){

      alert('you are finished your attempts sorry');

    }

  }


}



guesNum();


function askFavAnime(){

  let favAnime = ['one piece','naruto','hunter','boku','bleach','slayer'];

  let askAnime = prompt('what is the favorite anime for me you have 6 attemps');
  let i;
  let x =0;
  parentloop:for ( x =0 ;x< 6;x++){
    for ( i =0 ;i< favAnime.length;i++){

      if(askAnime === favAnime[i]){
        alert('good this is my favorite anime ');
        score++;
        break parentloop;
      }


    }

    askAnime =prompt('try again please');
    if(x === 4){
      alert('sorry you are finished');
      break parentloop;
    }

  }



}

askFavAnime();




alert(`your score is ${score} out of 7`);


