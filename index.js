class SortedList {
  constructor() {
    this.items = [];
    this.length = this.items.length; 
  }
    

  add(item) {
      this.items.push(item);
      this.length = this.items.length;
    let sortedItems = this.items.sort((a,b) => {
      if (a < b) return -1;
      if (a > b) return 1;
  });
  
  }

  get(pos) {
    if (pos > this.items.length) {
      throw new Error('OutOfBounds');
    } else {
      return this.items[pos];
    }
  }

  max() {
    let maxNumber = 0;
    if (this.items.length === 0) {
      throw new Error('EmptySortedList');
    } else {
      for (let i = 0; i < this.items.length; i++) {
        maxNumber < this.items[i] ? maxNumber = this.items[i] : maxNumber;
    } 
    return maxNumber;
    }
  }

  min() {
   if (this.items.length > 0) {
     return Math.min(...this.items);
   } else {
    throw new Error('EmptySortedList');
   } 
  }

  sum() {
    let sum = 0;
    for(let i=0; i< this.items.length; i++) {
      sum+= this.items[i];
    }
    return sum;
  }

  avg() {
    let sum = 0;
    if (this.items.length > 0) {
      for(let i=0; i< this.items.length; i++) {
        sum = sum + this.items[i];
      }
      return sum / this.items.length;
    } else {
      throw new Error('EmptySortedList');
    }
    

  }
}

module.exports = SortedList;
