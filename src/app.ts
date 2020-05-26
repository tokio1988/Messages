export class Hero {
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
  console.log(hero.myName());