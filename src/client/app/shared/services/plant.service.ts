import { Injectable } from '@angular/core';
import { Plant } from '../index';
import { Observable } from 'rxjs/Observable';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { GraphicsService } from './graphics.service';

@Injectable()
export class PlantService {
    
    private plantsUrl = 'http://localhost:8888/plants/lite'; 

    constructor (private http: Http, private graphicsService: GraphicsService) {}

    getPlants() : Observable<Plant[]> {
        let usedPlants = this.getPlantsFromUrl();    
        return this.http.get(this.plantsUrl)
                    .map(this.extractData)
                    .map(plants => plants.filter(plant => usedPlants.includes(plant.identificationNumber)))
                    .do(plants => this.graphicsService.assignColorPropertiesToPlants(plants))
                    .catch(this.handleError);
    }

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

    private getPlantsFromUrl(): number[] {
        return window.location.href.split('?')[1]
        .split('plants=')
        .map(param => param.replace('&', ''))
        .filter(param => param.length > 0)
        .map(param => +param)
    }

}
