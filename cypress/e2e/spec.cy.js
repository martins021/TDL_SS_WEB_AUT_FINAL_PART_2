import HomePage from "../pageObjects/HomePage";
import SortablePage from "../pageObjects/SortablePage";

const numberValues = {
  One:"0",
  Two:"1",
  Three:"2",
  Four:"3",
  Five:"4",
  Six:"5",
};

describe("Practice forms", () => {
  it("Practice form", () => {
    HomePage.visit()
    const name = "John", surname = "Hamilton"
    HomePage.firstName.type(name)
    HomePage.lastName.type(surname)

    const email = `${name.toLowerCase()}.${surname.toLowerCase()}@gmail.com`
    HomePage.email.type(email)

    const gender = "Male"
    HomePage.gender(gender).click({force:true})

    const mobileNumber = Math.floor(Math.random()*100000000)
    HomePage.mobileNumber.type(mobileNumber);

    const year = "1984", month = "February", date = "29"
    HomePage.dob.click()
    HomePage.setYear(year)
    HomePage.setMonth(month)
    HomePage.setDate(date).click()

    const subject = "Maths"
    HomePage.inputSubjects.type(`${subject}{enter}`)

    const hobbies = ["Sports", "Music"]
    HomePage.hobbies(hobbies[0]).click({force:true})
    HomePage.hobbies(hobbies[1]).click({force:true})

    const address = "Big street 5"
    HomePage.address.type(address)

    const stateAndCity = ["NCR", "Delhi"]
    HomePage.state.type(`${stateAndCity[0]}{enter}`)
    HomePage.city.type(`${stateAndCity[1]}{enter}`)

    const StudentName = `${name} ${surname}`
    const DateOfBirth = `${date} ${month},${year}`
    const Picture = ""
    const StateAndCity = `${stateAndCity[0]} ${stateAndCity[1]}`

    let finalValues = [StudentName, email, gender, mobileNumber, DateOfBirth, subject, hobbies, Picture, address, StateAndCity]

    HomePage.submit.click()
    var count = 0
    var valuesCorrect = true
    HomePage.validate.each(($el) => {
      if($el.text() == finalValues[count]){
        valuesCorrect = true
      } else {
        valuesCorrect = false
        return false
      }
      count += 1
    })
    if(valuesCorrect){
      cy.log("Passed")
    } else {
      cy.log("Failed. Submitted values does not match entered values!")
    }
  })

  function sorted(param){
    let numbers = ["0", "1", "2", "3", "4", "5"]
    let count = 0
    let sorted = true;
    param.each(($el) => {
      if(numberValues[$el.text()] == numbers[count]){
        sorted = true;
      } else {
        sorted = false;
        return sorted
      }
      count += 1
    })
    return sorted
  }

  it.only("Interactions - Sortable", () => {
    SortablePage.visit()
    if(sorted(SortablePage.numbers)){
      cy.log("Numbers are in order")
    } else {
      cy.log("Numbers are not in order")
    }

    cy.get('.vertical-list-container > :nth-child(6)') 
      .trigger('mousedown', { which: 1, pageX: 600, pageY: 100 })
      .trigger('mousemove', { which: 1, pageX: 600, pageY: -130, force:true })
      .trigger('mouseup', {force:true})
    cy.get('.vertical-list-container > :nth-child(6)')
      .trigger('mousedown', { which: 1, pageX: 600, pageY: 100 }, {force:true})
      .trigger('mousemove', { which: 1, pageX: 600, pageY: -120, force:true })
      .trigger('mouseup', {force:true})
    cy.get('.vertical-list-container > :nth-child(6)')
      .trigger('mousedown', { which: 1, pageX: 600, pageY: 100 }, {force:true})
      .trigger('mousemove', { which: 1, pageX: 600, pageY: -50, force:true })
      .trigger('mouseup', {force:true})
    cy.get('.vertical-list-container > :nth-child(6)')
      .trigger('mousedown', { which: 1, pageX: 600, pageY: 100 }, {force:true})
      .trigger('mousemove', { which: 1, pageX: 600, pageY: -10, force:true })
      .trigger('mouseup', {force:true})
    cy.get('.vertical-list-container > :nth-child(6)')
      .trigger('mousedown', { which: 1, pageX: 600, pageY: 100 }, {force:true})
      .trigger('mousemove', { which: 1, pageX: 600, pageY: 30, force:true })
      .trigger('mouseup', {force:true})

      if(sorted(SortablePage.numbers)){
        cy.log("Numbers are in order")
      } else {
        cy.log("Numbers are not in order")
      }
  })
});