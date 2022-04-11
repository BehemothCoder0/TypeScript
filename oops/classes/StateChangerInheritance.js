var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var ConstructionStateChanger = /** @class */ (function () {
    function ConstructionStateChanger(building) {
        this.building = building;
        this.building = building;
    }
    ConstructionStateChanger.prototype.canChangeConstructionState = function (building) {
        return !!this.building.state;
    };
    ConstructionStateChanger.prototype.changeConstructionState = function (building) {
        if (this.canChangeConstructionState(building)) {
            this.building.state = building.state;
        }
        return this.building;
    };
    return ConstructionStateChanger;
}());
var CompleteConstructionStateChanger = /** @class */ (function (_super) {
    __extends(CompleteConstructionStateChanger, _super);
    function CompleteConstructionStateChanger(building) {
        return _super.call(this, building) || this;
    }
    CompleteConstructionStateChanger.prototype.canChangeConstructionState = function (building) {
        return _super.prototype.canChangeConstructionState.call(this, building) && building.state != ConstructionState.ENDED;
    };
    return CompleteConstructionStateChanger;
}(ConstructionStateChanger));
var building = new constructBuilding();
building.state = ConstructionState.STARTED;
var stateChange = new CompleteConstructionStateChanger(building);
