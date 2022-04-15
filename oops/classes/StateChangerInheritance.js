class ConstructionStateChanger {
    constructor(state) {
        this.state = state;
    }
    canChangeConstructionState(building) {
        // ! returns false, !! always returns true
        return !!building.state;
    }
    changeConstructionState(building) {
        if (this.canChangeConstructionState(building)) {
            building.state = this.state;
        }
        return building;
    }
}
class CompleteConstructionStateChanger extends ConstructionStateChanger {
    constructor() {
        super(ConstructionState.STARTED);
    }
    canChangeConstructionState(building) {
        return super.canChangeConstructionState(building) && building.state != ConstructionState.ENDED;
    }
}
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
