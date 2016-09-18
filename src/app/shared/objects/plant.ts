const minimumGreen = 100;

export class Plant {
  
    constructor(public scientificName: string, public name: string, public diameter: number, public height: number, public color: string) {}
  
    toString(): string {
        return `${this.scientificName} (Diameter: ${this.diameter} cm, Height: ${this.height} cm)`
    }

    public static fromJSON(obj: any): Plant {
        return new Plant(obj.scientificName, obj.finnishName, obj.diameter, obj.height , Plant.randomColor());
    }

    static randomColor(): string {
        const green = Math.max(Math.floor(Math.random() * 255), minimumGreen);
        const red = Math.floor(Math.random() * green);
        const blue = Math.floor(Math.random() * green);
        return `rgb(${red}, ${green}, ${blue})`
    }
}
