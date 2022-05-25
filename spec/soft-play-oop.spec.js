const { SoftPlay } = require('../src/soft-play-oop.js')

describe("Soft Play OOP", () => {  
  
  it("Initial state is empty", function() {
    let softPlay = new SoftPlay()
    expect(softPlay.occupancy()).toEqual({adults: 0, children: 0})
  })

  it("Single adult and child enter", function() {
    let softPlay = new SoftPlay()
    expect(softPlay.enter(1,1)).toBeTrue()
    expect(softPlay.occupancy()).toEqual({adults: 1, children: 1})
  })

  it("Adult can leave when adults 2 and children 1", function() {
    let softPlay = new SoftPlay()
    softPlay.enter(2,1)
    expect(softPlay.leave(1,0)).toBeTrue()
    expect(softPlay.occupancy()).toEqual({adults: 1, children: 1})
  })

  it("Adult cannot leave when adults 1 and children 1", function() {
    let softPlay = new SoftPlay()
    softPlay.enter(1,1)
    expect(softPlay.leave(1,0)).toBeFalse()
    expect(softPlay.occupancy()).toEqual({adults: 1, children: 1})
  })

  it("More children cannot leave than are in the soft play center", function() {
    let softPlay = new SoftPlay()
    expect(softPlay.enter(1,1)).toBeTrue()
    expect(softPlay.leave(1,2)).toBeFalse()
    expect(softPlay.occupancy()).toEqual({adults: 1, children: 1})
  })

  it("Child cannot enter on own", function() {
    let softPlay = new SoftPlay()
    expect(softPlay.enter(0,1)).toBeFalse()
    expect(softPlay.occupancy()).toEqual({adults: 0, children: 0})
  })

  it("Child cannot leave on own", function() {
    let softPlay = new SoftPlay()
    softPlay.enter(1,1)
    expect(softPlay.leave(0,1)).toBeFalse()
    expect(softPlay.occupancy()).toEqual({adults: 1, children: 1})
  })

  it("Adult can leave with children", function() {
    let softPlay = new SoftPlay()
    softPlay.enter(2,1)
    expect(softPlay.leave(2,1)).toBeTrue()
    expect(softPlay.occupancy()).toEqual({adults: 0, children: 0})
  })
  
  //Added spec

  it("Max Occupancy reached", function(){
    let softPlay = new SoftPlay(0, 0, 10)
    softPlay.enter(5, 10)
    expect(softPlay.enter(5, 10)).toBeFalse()
  })

  it("Max Occupancy not reached", function(){
    let softPlay = new SoftPlay(0, 0, 20)
    softPlay.enter(10, 5)
    expect(softPlay.enter(10, 5)).toBeTrue()
  })

  it("Too many children", function() {
    let softPlay = new SoftPlay(0, 0, undefined, 3)
    softPlay.enter(2, 8)
    expect(softPlay.enter(2, 8)).toBeFalse()
  })

  it("Childrens per adult are ok", () => {
    let softPlay = new SoftPlay()
    softPlay.enter(2, 2)
    expect(softPlay.enter(2, 2)).toBeTrue()
  })
})