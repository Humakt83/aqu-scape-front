System.register(['@angular/core', '../index', 'rxjs/BehaviorSubject'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, index_1, BehaviorSubject_1;
    var PlantService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (index_1_1) {
                index_1 = index_1_1;
            },
            function (BehaviorSubject_1_1) {
                BehaviorSubject_1 = BehaviorSubject_1_1;
            }],
        execute: function() {
            PlantService = (function () {
                function PlantService() {
                    this.plants = new BehaviorSubject_1.BehaviorSubject([]);
                    this.plantsArray = [
                        new index_1.Plant('Crinum calamistratum', 'Kiharakriinumi', new index_1.OptimalWater(5.8, 7.5, 2, 12, 23, 26)),
                        new index_1.Plant('Ceratophyllum submersum', 'Hentokarvalehti', new index_1.OptimalWater(6.5, 8.5, 0, 20, 22, 28)),
                        new index_1.Plant('Taxiphyllum barbieri', 'Jaavansammal', new index_1.OptimalWater(5.5, 8.5, 0, 20, 18, 26)),
                        new index_1.Plant('Taxiphyllum barbieri', 'Kelluhankasammal', new index_1.OptimalWater(6, 7.5, 0, 20, 10, 28)),
                        new index_1.Plant('Microsorum pteropus', 'Jaavansaniainen', new index_1.OptimalWater(5, 8, 0, 20, 20, 28)),
                        new index_1.Plant('Ceratopteris thalictroides', 'Vesisaniainen', new index_1.OptimalWater(5, 8.5, 0, 20, 22, 28)),
                        new index_1.Plant('Vallisneria spiralis', 'Vallisneria', new index_1.OptimalWater(6, 7.5, 2, 19.9, 23, 28)),
                        new index_1.Plant('Rotala rotundifolla', 'Hentorotala', new index_1.OptimalWater(5.5, 7.5, 0, 20, 22, 28)),
                        new index_1.Plant('Pistia stratiotes', 'Pistia', new index_1.OptimalWater(6.5, 7.2, 0, 20, 17, 30)),
                        new index_1.Plant('Nymphaea micrantha', 'Rusolumme', new index_1.OptimalWater(6.5, 7.5, 2, 12, 24, 28)),
                        new index_1.Plant('Najas guadalupensis', 'Hentonäkinruoho', new index_1.OptimalWater(6, 8, 0, 20, 20, 30)),
                        new index_1.Plant('Mayaca fluviatilis', 'Hapsuruoho', new index_1.OptimalWater(5.5, 7, 2, 8, 22, 28)),
                        new index_1.Plant('Myriophyllum tuberculatum', 'Ruosteärviä', new index_1.OptimalWater(6.5, 7.5, 2, 10, 22, 28)),
                        new index_1.Plant('Limnophila sessiliflora', 'Vedensuosikki', new index_1.OptimalWater(5.5, 8, 0, 20, 22, 28)),
                        new index_1.Plant('Hygrophila polysperma', 'Intianvesitähdikki', new index_1.OptimalWater(6, 8, 0, 20, 20, 30)),
                        new index_1.Plant('Hydrocotyle leucocephala', 'Konnanputki', new index_1.OptimalWater(6, 8, 0, 20, 20, 28)),
                        new index_1.Plant('Elodea canadensis', 'Kanadanvesirutto', new index_1.OptimalWater(6.5, 8.5, 6, 20, 15, 22)),
                        new index_1.Plant('Echidonorus `Rubin`', 'Rubiinivesimiekka', new index_1.OptimalWater(6, 8, 4, 20, 22, 30)),
                        new index_1.Plant('Echidonorus `Red Special`', 'Ruostevesimiekka', new index_1.OptimalWater(6, 8, 4, 30, 22, 28)),
                        new index_1.Plant('Echidonorus grisebachii', 'Amazoninvesimiekka', new index_1.OptimalWater(6, 8, 0, 20, 22, 28)),
                        new index_1.Plant('Anubias barteri var. barteri', 'Herttakeihäslehti', new index_1.OptimalWater(5.5, 8, 0, 30, 22, 26)),
                        new index_1.Plant('Anubias barteri var. coffeifolia', 'Kahvikeihäslehti', new index_1.OptimalWater(5.5, 8, 0, 30, 22, 28)),
                        new index_1.Plant('Saururus cernuus', 'Herttalehti', new index_1.OptimalWater(6, 8, 0, 30, 18, 24)),
                        new index_1.Plant('Gymnocoronis spilanthoides', 'Vesiasteri', new index_1.OptimalWater(6.5, 8, 2, 12, 15, 28)),
                        new index_1.Plant('Microsorum pteropus', 'Jaavansaniainen', new index_1.OptimalWater(5, 8, 0, 30, 20, 28)),
                        new index_1.Plant('Cryptocorune xwillisii', 'Kääpiömelalehti', new index_1.OptimalWater(6, 7.5, 0, 30, 22, 28)),
                        new index_1.Plant('Cryptocorune undulata', 'Aaltomelalehti', new index_1.OptimalWater(6, 8, 0, 30, 22, 26)),
                        new index_1.Plant('Eleocharis acicularis', 'Hapsiluikka', new index_1.OptimalWater(6, 8.5, 0, 30, 15, 24))
                    ];
                }
                PlantService.prototype.getPlants = function () {
                    this.plants.next(this.plantsArray);
                    return this.plants;
                };
                PlantService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [])
                ], PlantService);
                return PlantService;
            }());
            exports_1("PlantService", PlantService);
        }
    }
});
