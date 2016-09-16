import { OptimalWater } from './optimal-water';

const minimumGreen = 100;

export class Plant {
  
    constructor(public scientificName: string, public name: string, public optimalWater: OptimalWater, public color: string) {}
  
    toString(): string {
        return `${this.scientificName}: (${this.optimalWater.toString()})`
    }

    public static fromJSON(obj: any): Plant {
        return new Plant(obj.scientificName, obj.finnishName, new OptimalWater(obj.phMin, obj.phMax, obj.dhMin, obj.dhMax, obj.tempMin, obj.tempMax), Plant.randomColor());
    }

    static randomColor(): string {
        const green = Math.max(Math.floor(Math.random() * 255), minimumGreen);
        const red = Math.floor(Math.random() * green);
        const blue = Math.floor(Math.random() * green);
        return `rgb(${red}, ${green}, ${blue})`
    }
}
