/* var set = [1, 2, 3, 4, 5, 6, 7];
console.log(Math.floor(Math.random() * set.length + 1));
*/
/*
// random number between
var randomNumber = (min, max) =>{
  return Math.floor(Math.random() * (max - min + 1) + min)
}
console.log(randomNumber(5, 15));

*/ 

// localStorage.setItem("playerChoice", 0);

getNumber = (id) => {
  console.log("Clicked");
  let ourNum;
  let ourArr = [];
  for(i = 0; i < 6; i++){
    let num = document.getElementById(id);
    if (num.innerHTML == i){
      ourNum = i;
    } 
  }
  for (i = 1; i < 7; i++){
    ourArr.push(i);
  }
  let ranNum = Math.floor(Math.random() * ourArr.length + 1);
  // setting up random number in localStorage
  localStorage.setItem("wrongHole", ranNum);
  // setting up player hole choice in localStorage
  localStorage.setItem("playerChoice", ourNum);
  
  var ranNum2 = localStorage.getItem("wrongHole");
  var playerNum2 = localStorage.getItem("playerChoice");
  
  if (ranNum2 === playerNum2) {
    alert("You Died!");
  }
}

 