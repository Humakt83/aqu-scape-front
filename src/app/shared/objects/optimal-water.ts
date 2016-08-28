export class OptimalWater {
  
    constructor(public minPH : number, public maxPH: number, public minDH: number, public maxDH: number, public minTemp: number, public maxTemp: number) {}
    
    toString() {
        return `pH: ${this.formatDecimal(this.minPH)}-${this.formatDecimal(this.maxPH)}, 
                dH: ${this.formatDecimal(this.minDH)}-${this.formatDecimal(this.maxDH)}, 
                temp: ${this.formatDecimal(this.minTemp)}-${this.formatDecimal(this.maxTemp)} ºC`;
    }
    
    private formatDecimal(decimal: number) {
        return decimal.toLocaleString();
    }
}
