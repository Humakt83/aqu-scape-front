import { Injectable } from '@angular/core';
import { Plant, OptimalWater } from '../index';
import { Observable } from 'rxjs/Observable';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class PlantService {
    
    private plantsUrl = 'http://localhost:8888/plants'; 

    constructor (private http: Http) {}

    getPlants() : Observable<Plant[]> {
        return this.http.get(this.plantsUrl)
                    .map(this.extractData)
                    .catch(this.handleError);
    }

    private extractData(res: Response): Plant[] {
        let plants: Plant[] = [];
        console.log(res.json());
        res.json().forEach((part: any) => plants.push(Plant.fromJSON(part)));
        return plants;
    }

    private handleError (error: any) {
        let errMsg = (error.message) ? error.message : error.status ? `${error.status} - ${error.statusText}` : 'Server error';
        console.error(errMsg);
        return Observable.throw(errMsg);
    }

}
