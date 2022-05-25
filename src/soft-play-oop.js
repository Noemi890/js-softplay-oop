// TODO: Write your class in this file
class SoftPlay {
  constructor(numChildren = 0, numAdults = 0, maxOccupancy, childrenPerAdult = 2){
    this.children = numChildren
    this.adults = numAdults
    this.maxOccupancy = maxOccupancy
    this.childrenPerAdult = childrenPerAdult
  }

  occupancy() {
    return {
      children: this.children,
      adults: this.adults
    }
  }

  enter(numAdults, numChildren) {
    const maxPeopleInside = (
      (numAdults + numChildren) <= this.maxOccupancy || 
      this.maxOccupancy === undefined
    );

    const enteringParty = (
      numChildren <= (numAdults * this.childrenPerAdult) || 
      this.childrenPerAdult === undefined
    );

    console.log("people entering =>", maxPeopleInside, "Max Occupancy =>", 
      this.maxOccupancy, "adults and children =>", numAdults + numChildren)

    if (numChildren <= numAdults && maxPeopleInside && enteringParty) {
      this.adults += numAdults;
      this.children += numChildren;
      return true
    }

    return false
  }

  leave(numAdults, numChildren) {
    const leavingAdultsConditions = (numAdults !== 0 && numAdults <= this.adults);
    const leavingChildrenConditions = (
      numChildren <= numAdults && numChildren <= this.children
    );
    const newAdults = this.adults - numAdults;
    const newChild = this.children - numChildren;
    

    if (leavingAdultsConditions && leavingChildrenConditions && newAdults >= newChild) {
      this.adults -= numAdults;
      this.children -= numChildren;
      return true;
    }

    return false;
  }
}

// TODO: Change undefined to the name of your class
module.exports = {
  SoftPlay: SoftPlay
}
