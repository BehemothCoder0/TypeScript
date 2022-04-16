var ConstructionState;
(function (ConstructionState) {
    ConstructionState[ConstructionState["STARTED"] = 1] = "STARTED";
    ConstructionState[ConstructionState["IN_PROGRESS"] = 2] = "IN_PROGRESS";
    ConstructionState[ConstructionState["ENDED"] = 3] = "ENDED";
})(ConstructionState || (ConstructionState = {}));
function constructBuilding() {
    var building = function (buildingName) {
    };
    var state = building.beginConstruction();
    if (state == ConstructionState.STARTED) {
        building.endConstruction();
    }
}
