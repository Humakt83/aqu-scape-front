System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var OptimalWater;
    return {
        setters:[],
        execute: function() {
            OptimalWater = (function () {
                function OptimalWater(minPH, maxPH, minDH, maxDH, minTemp, maxTemp) {
                    this.minPH = minPH;
                    this.maxPH = maxPH;
                    this.minDH = minDH;
                    this.maxDH = maxDH;
                    this.minTemp = minTemp;
                    this.maxTemp = maxTemp;
                }
                OptimalWater.prototype.toString = function () {
                    return "pH: " + this.formatDecimal(this.minPH) + "-" + this.formatDecimal(this.maxPH) + ", \n                dH: " + this.formatDecimal(this.minDH) + "-" + this.formatDecimal(this.maxDH) + ", \n                temp: " + this.formatDecimal(this.minTemp) + "-" + this.formatDecimal(this.maxTemp) + " \u00BAC";
                };
                OptimalWater.prototype.formatDecimal = function (decimal) {
                    return decimal.toLocaleString();
                };
                return OptimalWater;
            }());
            exports_1("OptimalWater", OptimalWater);
        }
    }
});
