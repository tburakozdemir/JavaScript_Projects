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
      
    }
  
  }