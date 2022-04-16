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
    function ConstructionStateChanger(state) {
        this.state = state;
    }
    ConstructionStateChanger.prototype.canChangeConstructionState = function (building) {
        // ! returns false, !! always returns true
        return !!building.state;
    };
    ConstructionStateChanger.prototype.changeConstructionState = function (building) {
        if (this.canChangeConstructionState(building)) {
            building.state = this.state;
        }
        return building;
    };
    return ConstructionStateChanger;
}());
var CompleteConstructionStateChanger = /** @class */ (function (_super) {
    __extends(CompleteConstructionStateChanger, _super);
    function CompleteConstructionStateChanger() {
        return _super.call(this, ConstructionState.STARTED) || this;
    }
    CompleteConstructionStateChanger.prototype.canChangeConstructionState = function (building) {
        return _super.prototype.canChangeConstructionState.call(this, building) && building.state != ConstructionState.ENDED;
    };
    return CompleteConstructionStateChanger;
}(ConstructionStateChanger));
var building = new constructBuilding();
building.state = ConstructionState.IN_PROGRESS;
console.log("The initial building1 state is:" + ConstructionState[building.state]);
var stateChanger1 = new CompleteConstructionStateChanger();
stateChanger1.changeConstructionState(building);
console.log("The building1 state is:" + ConstructionState[building.state]);
var building2 = new constructBuilding();
building2.state = ConstructionState.ENDED;
var stateChanger2 = new CompleteConstructionStateChanger();
console.log("The building2 state is:" + ConstructionState[building2.state]);
