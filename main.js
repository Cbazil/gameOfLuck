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
    record: undefined,
    pchoice: undefined,
    holes: 6,
    addOn: false,
    toFive: false,
    toFour: false,
    toThree: false,
    toTwo: false,
    gameOver: false,
    top100: []
  },
  mounted(){
    if(localStorage.getItem("pscore")) {
      try {
      this.pscore = Number(localStorage.getItem("pscore"));
      } catch(e){
        localStorage.removeItem("pscore")
      }
    };
    if(!localStorage.record){
      localStorage.setItem("record", 0);
    }
    if(localStorage.getItem("record")) {
      try {
      this.record = Number(localStorage.getItem("record"));
      } catch(e) {
        localStorage.removeItem("record")
      }
    }
    if(!localStorage.addOn){
      localStorage.setItem("addOn", false);
    } 
    if(localStorage.getItem("addOn")){
      try {
        this.addOn = localStorage.getItem("addOn")
      } catch(e){
        localStorage.removeItem("addOn")
      }
    } 
    if(!localStorage.gameOver){
      localStorage.setItem("gameOver", false)
    }
    if(localStorage.getItem("gameOver")){
      try {
        this.gameOver = JSON.parse(localStorage.getItem("gameOver"));
      } catch(e){
        localStorage.removeItem("gameOver")
      }
    }
    if(localStorage.getItem("top100")) {
      try {
        this.top100 = localStorage.getItem("top100")
      } catch(e){
        localStorage.removeItem("top100")
      }
    }
  },
  beforecreated(){
    this.gameOver = false;
  },
  created() {
    if (!localStorage.top100) {
      let defaultBoardScore = { score: 3200 };
      let defaultBoard = [
        defaultBoardScore
        ];
      for (i = 0; i < 99; i++){
        defaultBoard.push(defaultBoardScore);
      }
      this.top100 = defaultBoard;
    }
    console.log("length: ", this.top100.length);
  },
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
       };
       let ranNum = Math.ceil(Math.random() * ourArr.length);
       if (this.pchoice === ranNum) {
         this.pscore = 0;
         this.holes = 6;
         this.toFive = false;
         this.toFour = false;
         this.toThree = false;
         this.toTwo = false;
         localStorage.setItem("pscore", this.pscore);
         this.gameOver = true;
       } else {
         this.pscore = this.pscore += 200;
         this.addOn = true;
         localStorage.setItem("pscore", this.pscore);
         this.addAmount();
         localStorage.setItem("addOn", false);
       }
       // console.log("pchoicee: ", this.pchoice);
       // console.log("ranNum: ", ranNum);
      if (this.pscore > 3000) {
        this.holes = 5;
        this.toFive = true;
      };
      if (this.pscore > 5000) {
        this.holes = 4;
        this.toFour = true;
      };
      if (this.pscore > 8000) {
        this.holes = 3;
        this.toThree = true;
      };
      if (this.pscore > 12000) {
        this.holes = 2;
        this.toTwo = true;
      }
     if (this.pscore > this.record) {
       this.record = this.pscore;
       localStorage.setItem("record", this.record);
      }
     },
     addAmount() {
       localStorage.setItem("addOn", true);
     },
     newGame() {
       this.gameOver = false;
     }
   }
})