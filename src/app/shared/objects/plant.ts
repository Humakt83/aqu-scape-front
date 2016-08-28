import { OptimalWater } from './optimal-water';

export class Plant {
  
    constructor(public scientificName: string, public name: string, public optimalWater: OptimalWater) {}
  
    toString(): string {
        return `${this.scientificName}: (${this.optimalWater.toString()})`
    }
}
