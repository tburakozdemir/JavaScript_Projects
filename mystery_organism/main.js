// Returns a random DNA base
const returnRandBase = () => {
  const dnaBases = ['A', 'T', 'C', 'G'];
  return dnaBases[Math.floor(Math.random() * 4)];
};

// Returns a random single stand of DNA containing 15 bases
const mockUpStrand = () => {
  const newStrand = [];
  for (let i = 0; i < 15; i++) {
    newStrand.push(returnRandBase());
  }
  return newStrand;
};

const pAequorFactory = (num, base) =>{
  return{
    specimenNum : num,
    dna : base,
    
    mutate(){
      let base = this.dna;
      let randomIndex =  Math.floor(Math.random() * this.dna.length); 
      let selectedBase = this.dna[randomDNAIndexSelected]; 
      let replacementBase;
      do{
        replacementBase = returnRandBase();
      }while(selectedBase === replacementBase);
      console.log(`New Base Generated ${replacementBase}`);
      dnaArray[randomDNAIndexSelected] = replacementBase;
      return this.dna = dnaArray;
    },

    compareDNA(sample){
      let count = 0;
      let percentage;

      for(let i = 0; i < this.dna.length; i++){
        if(this.dna[i] == sample.dna[i]){
          count ++;
        }
      }
      percentage = ((count / 15) * 100).toFixed(2);
      return percentage
    }
  }
}






console.log(pAequorFactory(3,mockUpStrand()))