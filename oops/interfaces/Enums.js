var ConstructionState;
(function (ConstructionState) {
    ConstructionState[ConstructionState["STARTED"] = 1] = "STARTED";
    ConstructionState[ConstructionState["ENDED"] = 2] = "ENDED";
})(ConstructionState || (ConstructionState = {}));
function constructBuilding() {
    var building = function (buildingName) {
    };
    var state = building.beginConstruction();
    if (state == ConstructionState.STARTED) {
        building.endConstruction();
    }
}
