class Media {
    constructor(title) {
      this._title = title;
      this._isCheckedOut = false;
      this._ratings = [];
    }
    get title() {
      return this._title;
    }

    get isCheckedOut() {
      return this._isCheckedOut;
    }

    get ratings() {
      return this._ratings;
    }

    set isCheckedOut(item) {
      return this._isCheckOut = item;
    }
  
    toggleCheckOutStatus() {
      if(this.isCheckedOut == true){
        this.isCheckedOut == false;
      }else{
        this.isCheckedOut == true;
      }
    }
  
    getAverageRating() {
      let total = 0;
      let ratingsLength = this.ratings.length;
      for(let i = 0; i < this.ratings.length;i++) {
        total += this.ratings[i]
      }
      return total / ratingsLength;
    }

    addRating(newRating) {
        this.ratings.push(newRating);
    }
  
}

class Book extends Media {
      constructor(author, title, pages) {
        super(title);
        this._author = author;
        this._pages = pages;
      }

      get author() {
        return this._author;
      }

      get pages() {
        return this._pages;
      }
}

class Movie extends Media {
    constructor(director, title, runTime) {
        super(title);
        this._director = director;
        this._runTime = runTime;
    }
    
    get director() {
        return this._director;
    }

    get runTime() {
        return this._runTime;
    }
}