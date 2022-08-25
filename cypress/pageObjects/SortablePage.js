import BasePage from "./BasePage";

class SortablePage extends BasePage {
  static get url() {
    return "/sortable";
  }

  static get numbers(){
      return cy.get('div[class="vertical-list-container mt-4"]').find("div").contains("Six")
  }

}

export default SortablePage;