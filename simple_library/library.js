class Media{
    constructor(title){
      this._title = title;
      this._isCheckedOut = false;
      this._ratings = [];
    }
    get title(){
      return this._title;
    }
    get isCheckedOut(){
      return this._isCheckedOut;
    }
    get ratings(){
      return this._ratings;
    }
    set isCheckedOut(item){
      return this._isCheckOut = item;
    }
  
    toggleCheckOutStatus(){
      if(this.isCheckedOut == true){
        this.isCheckedOut == false;
      }else{
        this.isCheckedOut == true;
      }
    }
  
    getAverageRating(){
      let total = 0;
      let ratingsLength = this.ratings.length;
      for(let i = 0; i < this.ratings.length;i++){
        total += this.ratings[i]
      }
      return total / ratingsLength;
    }

    addRating(newRating) {
        this.ratings.push(newRating);
    }
  
  }