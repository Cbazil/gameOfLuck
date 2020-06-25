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

 localStorage.setItem("pscore", 0);

new Vue({
  el: "#interface",
  data: {
    pscore: undefined,
    pchoice: undefined,
    holes: 6,
  },
  mounted(){
    if(localStorage.getItem("pscore")) {
      try {
      this.pscore = Number(localStorage.getItem("pscore"));
      } catch(e){
        localStorage.removeItem("pscore")
      }
    };
  },
  /* methods: {
    holeOne() {
      console.log("click 1");
      // this.pchoice = 1;
      // getNumber();
    },
    holeTwo() {
      console.log("click 2")
      // this.pchoice = 2;
      // getNumber();
    },
    holeThree() {
      console.log("click 3");
      // this.pchoice = 3;
      // getNumber();
    },
    holeFour() {
      console.log("click 4");
      // this.pchoice = 4;
      // getNumber();
    },
    holeFive() {
      console.log("click 5");
      // this.pchoice = 5;
      // getNumber();
    },
    holeSix() {
      console.log("click 6");
      // this.pchoice = 6;
      // getNumber()
    } */
    /* getNumber(){
      // console.log("LSPlayerScore: ", localStorage.getItem("playerScore"));
      let ourArr = [];
      for (i = 1; i < this.holes; i++) {
        ourArr.push(i);
      }
      let ranNum = Math.floor(Math.random() * ourArr.length + 1);
      // setting up random number in localStorage
      localStorage.setItem("wrongHole", ranNum);
      // setting up player hole choice in localStorage
      localStorage.setItem("pchoice", this.pchoice);
    
      var ranNum2 = localStorage.getItem("wrongHole");
      var playerNum2 = localStorage.getItem("pchoice");
      var pscore = Number(localStorage.getItem("pscore"));
      var score;
      if (ranNum2 === playerNum2) {
        this.pscore = 0;
        localStorage.setItem("pscore", this.pscore);
        alert("Game Over!");
      } else {
        score = score += 200;
        localStorage.setItem("pscore", score);
      }
      document.getElementById("playerScore").innerText = this.pscore;
      if (this.pscore > 2000) {
        this.holes = 5;
      }
      if (this.pscore > 4000) {
        this.holes = 4
      }
      if (this.pscore > 6000) {
        this.holes = 3
        }
      if (this.pscore > 8000) {
        this.holes = 2
      
    }
  } */
   methods: {
     holeOne() {
       this.pchoice = 1;
       this.compareRandom();
     },
     holeTwo() {
       this.pchoice = 2;
       this.compareRandom();
     },
     holeThree() {
       this.pchoice = 3;
       this.compareRandom();
     },
     holeFour() {
       this.pchoice = 4;
       this.compareRandom();
     },
     holeFive() {
       this.pchoice = 5;
       this.compareRandom();
     },
     holeSix() {
       this.pchoice = 6;
       this.compareRandom();
     },
     compareRandom() {
       let ourArr = [];
       for (i = 0; i < this.holes; i++) {
         ourArr.push(i);
       }
       let ranNum = Math.ceil(Math.random() * ourArr.length);
       if (this.pchoice === ranNum) {
         this.pscore = 0;
         localStorage.setItem("pscore", this.pscore);
         alert("Game Over!");
       } else {
         this.pscore = this.pscore += 200;
         localStorage.setItem("pscore", this.pscore);
       }
       // console.log("pchoicee: ", this.pchoice);
       // console.log("ranNum: ", ranNum);
     }
   }
})