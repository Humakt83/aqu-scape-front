System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Plant;
    return {
        setters:[],
        execute: function() {
            Plant = (function () {
                function Plant(scientificName, name, optimalWater) {
                    this.scientificName = scientificName;
                    this.name = name;
                    this.optimalWater = optimalWater;
                }
                Plant.prototype.toString = function () {
                    return this.scientificName + ": (" + this.optimalWater.toString() + ")";
                };
                return Plant;
            }());
            exports_1("Plant", Plant);
        }
    }
});
