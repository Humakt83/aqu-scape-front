const minimumGreen = 100;

export class Plant {

    randomColor: any;
    color: string;
    backgroundColor: any;
    textColor: any;
  
    constructor(public identificationNumber: number, public scientificName: string, public name: string, public diameter: number, public height: number) {}
  
    toString(): string {
        return `${this.scientificName} (Diameter: ${this.diameter} cm, Height: ${this.height} cm)`
    }

    public static fromJSON(obj: any): Plant {
        return new Plant(obj.identificationNumber, obj.scientificName, obj.finnishName, obj.diameter, obj.height);
    }

}
