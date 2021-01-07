

// factory function for prototypes
const pAequorFactory = (num, dna) => {
  specimenNum = num;
  dna = dna;

  return {
    specimenNum: num,
    dna: dna,
    dnaBase: ['A', 'T', 'C', 'G'],
    
    mutate() {
      let randoNum = Math.floor(Math.random() * dna.length+1);
      let options = [];
      // loop to match bases not at the random index
      this.dnaBase.forEach(x => {
      if(x !== this.dna[randoNum-1] && !options.includes(x)){
          options.push(x);
      }});

      console.log('DNA before Mutate: ' + this.dna);
      // replace dna at index w/ random dna 
      // can't be same base as before
      this.dna[randoNum-1] = 
      options[Math.floor(Math.random()*options.length)];
      console.log('DNA post Mutate : ' + this.dna);
      return this.dna;
    },

    compareDNA(inputObj) {
      let result = 0;
      // if dna matches at index, push to result
      for(let i = 0; i < inputObj.dna.length; i++){
          if(this.dna[i] === inputObj.dna[i]){
            result +=1;
          }
      }
      // return percentage of matches
      console.log('Percentage of matching DNA: ' 
      + ((result / this.dna.length) * 100).toFixed(1));
      return ((result / inputObj.dna.length) * 100)
      .toFixed(1);
    },

    willLikelySurvive() {
      let result = 0;
      // loop to match 'C' & 'G'
      for(let i = 0; i < this.dna.length; i++){
        if(this.dna[i] === 'C' || this.dna[i] === 'G'){
          result++;
        }
      }
      // return percentage of 'C' & 'G' in DNA
      console.log('Percentage of DNA including C/G base: ' 
      + ((result / this.dna.length) * 100)
      .toFixed(1));
      return ((result / this.dna.length) * 100)
      .toFixed(1) >= 60 ? true: false;
    }
  }
}

// TESTING >>>>>>
let spec1 = pAequorFactory(1, ['A', 'T', 'G', 'C', 'C', 'G']);
let spec2 = pAequorFactory(2, ['T', 'G', 'G', 'A', 'C', 'T']);
spec1.mutate();
console.log(spec1.compareDNA(spec2))
console.log(spec1.willLikelySurvive())







