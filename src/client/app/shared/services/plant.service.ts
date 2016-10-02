import { Injectable } from '@angular/core';
import { Plant } from '../index';
import { Observable } from 'rxjs/Observable';
import { Response } from '@angular/http';
import { GraphicsService } from './graphics.service';

@Injectable()
export class PlantService {

    constructor (private graphicsService: GraphicsService) {}

    getPlants() : Observable<Plant[]> {
        let usedPlants = this.getPlantsFromUrl();
        let filteredPlants = this.plantsArray.filter(plant => usedPlants.includes(plant.identificationNumber));
        this.graphicsService.assignColorPropertiesToPlants(filteredPlants);
        return Observable.of(filteredPlants);
    }
    
    private plantsArray : Plant[] = [
        new Plant(1, 'Crinum calamistratum', 'Kiharakriinumi', 30, 100),
        new Plant(2, 'Ceratophyllum submersum', 'Hentokarvalehti', 15, 70),
        new Plant(3, 'Taxiphyllum barbieri', 'Jaavansammal', 20, 20),
        new Plant(4, 'Taxiphyllum barbieri', 'Kelluhankasammal', 5, 3),
        new Plant(5, 'Microsorum pteropus', 'Jaavansaniainen', 20, 40),
        new Plant(6, 'Ceratopteris thalictroides', 'Vesisaniainen', 50, 60),
        new Plant(7, 'Vallisneria spiralis', 'Vallisneria', 20, 70),
        new Plant(8, 'Vallisneria australis', 'Isovallisneria', 40, 300),
        new Plant(9, 'Rotala rotundifolla', 'Hentorotala', 20, 70),
        new Plant(10, 'Pistia stratiotes', 'Pistia', 20, 20),
        new Plant(11, 'Nymphaea micrantha', 'Rusolumme', 40, 60),
        new Plant(12, 'Najas guadalupensis', 'Hentonäkinruoho', 15, 100),
        new Plant(13, 'Mayaca fluviatilis', 'Hapsuruoho', 15, 60),
        new Plant(14, 'Myriophyllum tuberculatum', 'Ruosteärviä', 15, 60),
        new Plant(15, 'Limnophila sessiliflora', 'Vedensuosikki', 10, 60),
        new Plant(16, 'Hygrophila polysperma', 'Intianvesitähdikki', 20, 50),
        new Plant(17, 'Hydrocotyle leucocephala', 'Konnanputki', 10, 60),
        new Plant(18, 'Elodea canadensis', 'Kanadanvesirutto', 10, 200),
        new Plant(19, 'Echidonorus `Rubin`', 'Rubiinivesimiekka', 40, 60),
        new Plant(20, 'Echidonorus `Red Special`', 'Ruostevesimiekka', 20, 30),
        new Plant(21, 'Echidonorus grisebachii', 'Amazoninvesimiekka', 40, 60),
        new Plant(22, 'Anubias barteri var. barteri', 'Herttakeihäslehti', 15, 40),
        new Plant(23, 'Anubias barteri var. coffeifolia', 'Kahvikeihäslehti', 15, 25),
        new Plant(24, 'Saururus cernuus', 'Herttalehti', 15, 30),
        new Plant(25, 'Gymnocoronis spilanthoides', 'Vesiasteri', 20, 60),
        new Plant(26, 'Cryptocorune xwillisii', 'Kääpiömelalehti', 15, 20),
        new Plant(27, 'Cryptocorune undulata', 'Aaltomelalehti', 15, 25),
        new Plant(28, 'Eleocharis acicularis', 'Hapsiluikka', 10, 20)
    ];

    /**
     * Parses and retuns the idenfiticationNumbers of the plants from the url.
     */
    private getPlantsFromUrl(): number[] {
        return window.location.href.split('?')[1]
        .split('plants=')
        .map(param => param.replace('&', ''))
        .filter(param => param.length > 0)
        .map(param => +param)
    }

}
