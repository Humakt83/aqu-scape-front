import { Injectable } from '@angular/core';
import { Plant } from '../index';
import { Observable } from 'rxjs/Observable';
import { Http, Response } from '@angular/http';
import { GraphicsService } from './graphics.service';

@Injectable()
export class PlantService {
    
    private plantsUrl = 'http://localhost:8888/plants/lite'; 

    constructor (private http: Http, private graphicsService: GraphicsService) {}

    /**
     * Fetches the plants from the server
     */
    getPlants() : Observable<Plant[]> {
        let usedPlants = this.getPlantsFromUrl();    
        return this.http.get(this.plantsUrl)
                    .map(this.extractData)
                    .map((plants: Plant[]) => plants.filter(plant => usedPlants.includes(plant.identificationNumber)))
                    .do(plants => this.graphicsService.assignColorPropertiesToPlants(plants))
                    .catch(this.handleError);
    }

    /**
     * Converts json of the response to a plant array
     */
    private extractData(res: Response): Plant[] {        
        let plants: Plant[] = [];
        res.json().forEach((part: any) => plants.push(Plant.fromJSON(part)));
        return plants;
    }

    private handleError (error: any) {
        let errMsg = (error.message) ? error.message : error.status ? `${error.status} - ${error.statusText}` : 'Server error';
        console.error(errMsg);
        return Observable.throw(errMsg);
    }

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
