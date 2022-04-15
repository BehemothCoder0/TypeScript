class ConstructionStateChanger{
    private state: ConstructionState;
    constructor(state:ConstructionState){
        this.state=state;
    }

    canChangeConstructionState(building:ConstructBuilding):boolean{
        // ! returns false, !! always returns true
        return !!building.state;
    }

    changeConstructionState(building:ConstructBuilding):ConstructBuilding{
        if(this.canChangeConstructionState(building)){
            building.state = this.state;
        }
        return building;
    }
}

class CompleteConstructionStateChanger extends ConstructionStateChanger{
    constructor(){
     super(ConstructionState.STARTED);
   }

    canChangeConstructionState(building: ConstructBuilding): boolean {
       return super.canChangeConstructionState(building) && building.state!=ConstructionState.ENDED
    }

}

var building = new (constructBuilding as any)();
building.state=ConstructionState.IN_PROGRESS;
console.log("The initial building1 state is:"+ConstructionState[building.state])
var stateChanger1 = new CompleteConstructionStateChanger();
stateChanger1.changeConstructionState(building);
console.log("The building1 state is:"+ConstructionState[building.state])

var building2 = new (constructBuilding as any)();
building2.state = ConstructionState.ENDED;
var stateChanger2 = new CompleteConstructionStateChanger();
console.log("The building2 state is:"+ConstructionState[building2.state]); 


