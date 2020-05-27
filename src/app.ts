/* export class Hero {
    id: number;
    name: string;

    constructor(id:number, name: string) {
        this.id = id;
        this.name = name;
    }

    myName()
    {
        return this.name;
    }
  }

  let hero = new Hero(1,'krunal');
  console.log(hero.myName()); */

import {User} from "./model";
import {api} from "./appi"

api.getAllData().then((list: Array<User>) => {
    displayData(list)
  }).catch(error => document.write("Error from server"))
  
  
  function displayData(list: Array<User>){
  document.write("<span>Zadanie 3</span>");
  document.write("<p><b>FROM JSON: </b></p>")
  
    list.forEach((element) => {
        displaySingle(element);
    });
  }
  
  function displaySingle(element: User){
    document.write('<div>');
      document.write(`Post ID: ${element.id}`);
      document.write(`<ul>`);
      document.write(`<li>@${element.userId}: ${element.title}</li>`);
      document.write('<h3>Post body: </h3>');
      document.write(`<p>${element.body}</p>`);
      document.write(`</ul>`);
      
      
      document.write('</div>');
  }




