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
    if (localStorage.top100) {
      try {
        this.top100 = JSON.parse(localStorage.getItem("top100")).sort(this.compare);
      } catch(e){
        localStorage.removeItem("top100");
      }
    }
  },
  beforecreated() {
    this.gameOver = false;
  },
  created() {
    if (!localStorage.top100) {
      let defaultBoardScore = { score: 3200 };
      let defaultBoard = [defaultBoardScore];
      for (i = 0; i < 99; i++) {
        defaultBoard.push(defaultBoardScore);
      }
      this.top100 = defaultBoard;
      localStorage.setItem("top100", JSON.stringify(this.top100));
    }
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
     compare(a,b) {
       if(a.score < b.score) return 1;
       if(a.score === b.score) return 0;
       if(a.score > b.score) return -1;
     }, 
     compareRandom() {
       let ourArr = [];
       for (i = 0; i < this.holes; i++) {
         ourArr.push(i);
       };
       let ranNum = Math.ceil(Math.random() * ourArr.length);
       if (this.pchoice === ranNum) {
         const minRecord = this.top100.slice(-1);
         if (this.pscore > minRecord[0].score) {
           this.top100.pop();
           let tag = prompt("Enter Nickname...");
           this.top100.push({ username: tag, score: this.pscore });
           this.top100 = this.top100.sort(this.compare)
           localStorage.setItem("top100", JSON.stringify(this.top100))
         }
         localStorage.setItem("pscore", this.pscore);
         this.gameOver = true;
       } else {
         this.pscore = this.pscore += 200;
         this.addOn = true;
         localStorage.setItem("pscore", this.pscore);
         this.addAmount();
         localStorage.setItem("addOn", false);
       }
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
       this.pscore = 0;
       this.holes = 6;
       this.toFive = false;
       this.toFour = false;
       this.toThree = false;
       this.toTwo = false;
     }
   }
})