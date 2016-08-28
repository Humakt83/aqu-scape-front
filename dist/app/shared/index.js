System.register(['./services/plant.service', './objects/plant', './objects/optimal-water'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    function exportStar_1(m) {
        var exports = {};
        for(var n in m) {
            if (n !== "default") exports[n] = m[n];
        }
        exports_1(exports);
    }
    return {
        setters:[
            function (plant_service_1_1) {
                exportStar_1(plant_service_1_1);
            },
            function (plant_1_1) {
                exportStar_1(plant_1_1);
            },
            function (optimal_water_1_1) {
                exportStar_1(optimal_water_1_1);
            }],
        execute: function() {
        }
    }
});
