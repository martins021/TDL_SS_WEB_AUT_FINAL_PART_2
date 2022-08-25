import BasePage from "./BasePage";

const monthValues = {
    january:"0",
    february:"1",
    march:"2",
    april:"3",
    may:"4",
    june:"5",
    july:"6",
    august:"7",
    september:"8",
    october:"9",
    november:"10",
    december:"11"
};

const hobbyValues = {
    sports:"1",
    reading:"2",
    music:"3"
}

class HomePage extends BasePage {
  static get url() {
    return "/automation-practice-form";
  }

  static get firstName(){
      return cy.get('#firstName')
  }

  static get lastName(){
    return cy.get('#lastName')
  }

  static get email(){
    return cy.get('#userEmail')
  }

  static gender(genderName){
    return cy.get(`input[name="gender"][value="${genderName}"]`)
  }

  static get mobileNumber(){
    return cy.get('#userNumber')
  }

  static get dob(){
    return cy.get('#dateOfBirthInput')
  }

  static setMonth(monthName){
      monthName = monthName.toLowerCase()
      let monthValue = monthValues[monthName]
      return cy.get('select[class="react-datepicker__month-select"]').select(monthValue)
  }

  static setYear(yearName){
    return cy.get('select[class="react-datepicker__year-select"]').select(yearName)
  }

  static setDate(dateName){
      let zero = "0"
      if(dateName.length === 1){
          dateName = zero.concat(dateName);
      }
      return cy.get(`div[tabindex="-1"][role="option"][class="react-datepicker__day react-datepicker__day--0${dateName}"]`)
  }

  static get inputSubjects(){
      return cy.get('.subjects-auto-complete__value-container')
  }

  static hobbies(hobbyName){
    hobbyName = hobbyName.toLowerCase()
    let hobbyValue = hobbyValues[hobbyName]
    return cy.get(`[id="hobbies-checkbox-${hobbyValue}"]`)
  }

  static get address(){
      return cy.get('#currentAddress')
  }

  static get state(){
      return cy.get('#state')
  }

  static get city(){
      return cy.get('#city')
  }

  static get submit(){
    return cy.get('#submit')
  }

  static get validate(){
      return cy.get('table[class="table table-dark table-striped table-bordered table-hover"]').find("tbody").get("tr td:nth-child(2)") 
  }
}

export default HomePage;