class School {
    constructor(name, level, numberOfStudents) {
      this._name = name;
      this._level = level;
      this._numberOfStudents = numberOfStudents;
    }
  
    get name() {
      return this._name;
    }
  
    get level() {
      return this._level;
    }
  
    get numberOfStudents() {
      return this._numberOfStudents;
    }
  
    set numberOfStudents(value) {
      if(value.isInteger() == true) {
        this._numberOfStudents = value;
      }
      else {
        console.log('Invalid input: numberOfStudents must be set to a Number.')
      }
    }

    quickFacts() {
        console.log(`${this.name} educates ${this.numberOfStudents} students at the ${this.level} school level.`)
    }

    static pickSubstituteTeacher(substituteTeachers) {
      let randNum = Math.floor(Math.random() * substituteTeachers.length);
      return substituteTeachers[randNum];
    }

  }

  class PrimarySchool extends School {
    constructor(name, numberOfStudents, pickupPolicy) {
      super(name, 'primary', numberOfStudents);
      this._pickupPolicy = pickupPolicy;
    }

    get pickupPolicy() {
      return  this._pickupPolicy;
    }
    
  }

  class HighSchool extends School {
    constructor(name, numberOfStudents, sportsTeams) {
      super(name, 'high', numberOfStudents);
      this._sportsTeams = sportsTeams;
    }

    get sportsTeams() {
      return this._sportsTeams;
    }

  }