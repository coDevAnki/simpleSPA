export default class {
  constructor(linkName) {
      this.linkName=linkName;
  }

  setTitle(){
      document.title= this.linkName;
  }
  
  async getHtml(){
      return `<h1> this is ${this.linkName}</h1>`;
  }
}
