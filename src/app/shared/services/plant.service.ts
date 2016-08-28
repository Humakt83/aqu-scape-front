import { Injectable } from '@angular/core';
import { Plant, OptimalWater } from '../index';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class PlantService {
    
    plants : BehaviorSubject<Plant[]> = new BehaviorSubject<Plant[]>([]);
    
    getPlants() : Observable<Plant[]> {
        this.plants.next(this.plantsArray);
        return this.plants;
    }
    
    private plantsArray : Plant[] = [
        new Plant('Crinum calamistratum', 'Kiharakriinumi', new OptimalWater(5.8, 7.5, 2, 12, 23, 26)),
        new Plant('Ceratophyllum submersum', 'Hentokarvalehti', new OptimalWater(6.5, 8.5, 0, 20, 22, 28)),
        new Plant('Taxiphyllum barbieri', 'Jaavansammal', new OptimalWater(5.5, 8.5, 0, 20, 18, 26)),
        new Plant('Taxiphyllum barbieri', 'Kelluhankasammal', new OptimalWater(6, 7.5, 0, 20, 10, 28)),
        new Plant('Microsorum pteropus', 'Jaavansaniainen', new OptimalWater(5, 8, 0, 20, 20, 28)),
        new Plant('Ceratopteris thalictroides', 'Vesisaniainen', new OptimalWater(5, 8.5, 0, 20, 22, 28)),
        new Plant('Vallisneria spiralis', 'Vallisneria', new OptimalWater(6, 7.5, 2, 19.9, 23, 28)),
        new Plant('Rotala rotundifolla', 'Hentorotala', new OptimalWater(5.5, 7.5, 0, 20, 22, 28)),
        new Plant('Pistia stratiotes', 'Pistia', new OptimalWater(6.5, 7.2, 0, 20, 17, 30)),
        new Plant('Nymphaea micrantha', 'Rusolumme', new OptimalWater(6.5, 7.5, 2, 12, 24, 28)),
        new Plant('Najas guadalupensis', 'Hentonäkinruoho', new OptimalWater(6, 8, 0, 20, 20, 30)),
        new Plant('Mayaca fluviatilis', 'Hapsuruoho', new OptimalWater(5.5, 7, 2, 8, 22, 28)),
        new Plant('Myriophyllum tuberculatum', 'Ruosteärviä', new OptimalWater(6.5, 7.5, 2, 10, 22, 28)),
        new Plant('Limnophila sessiliflora', 'Vedensuosikki', new OptimalWater(5.5, 8, 0, 20, 22, 28)),
        new Plant('Hygrophila polysperma', 'Intianvesitähdikki', new OptimalWater(6, 8, 0, 20, 20, 30)),
        new Plant('Hydrocotyle leucocephala', 'Konnanputki', new OptimalWater(6, 8, 0, 20, 20, 28)),
        new Plant('Elodea canadensis', 'Kanadanvesirutto', new OptimalWater(6.5, 8.5, 6, 20, 15, 22)),
        new Plant('Echidonorus `Rubin`', 'Rubiinivesimiekka', new OptimalWater(6, 8, 4, 20, 22, 30)),
        new Plant('Echidonorus `Red Special`', 'Ruostevesimiekka', new OptimalWater(6, 8, 4, 30, 22, 28)),
        new Plant('Echidonorus grisebachii', 'Amazoninvesimiekka', new OptimalWater(6, 8, 0, 20, 22, 28)),
        new Plant('Anubias barteri var. barteri', 'Herttakeihäslehti', new OptimalWater(5.5, 8, 0, 30, 22, 26)),
        new Plant('Anubias barteri var. coffeifolia', 'Kahvikeihäslehti', new OptimalWater(5.5, 8, 0, 30, 22, 28)),
        new Plant('Saururus cernuus', 'Herttalehti', new OptimalWater(6, 8, 0, 30, 18, 24)),
        new Plant('Gymnocoronis spilanthoides', 'Vesiasteri', new OptimalWater(6.5, 8, 2, 12, 15, 28)),
        new Plant('Microsorum pteropus', 'Jaavansaniainen', new OptimalWater(5, 8, 0, 30, 20, 28)),
        new Plant('Cryptocorune xwillisii', 'Kääpiömelalehti', new OptimalWater(6, 7.5, 0, 30, 22, 28)),
        new Plant('Cryptocorune undulata', 'Aaltomelalehti', new OptimalWater(6, 8, 0, 30, 22, 26)),
        new Plant('Eleocharis acicularis', 'Hapsiluikka', new OptimalWater(6, 8.5, 0, 30, 15, 24))
    ];
}
