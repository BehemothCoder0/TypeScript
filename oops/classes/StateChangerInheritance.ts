class ConstructionStateChanger{
    constructor(private building:ConstructBuilding){
        this.building=building;
    }

    canChangeConstructionState(building:ConstructBuilding):boolean{
        return !!this.building.state;
    }
    
    changeConstructionState(building:ConstructBuilding):ConstructBuilding{
        if(this.canChangeConstructionState(building)){
            this.building.state = building.state;
        }
        return this.building;
    }
}

class CompleteConstructionStateChanger extends ConstructionStateChanger{
    constructor(building:ConstructBuilding){
     super(building);
   }

    canChangeConstructionState(building: ConstructBuilding): boolean {
       return super.canChangeConstructionState(building) && building.state!=ConstructionState.ENDED
    }
}

var building = new constructBuilding();
building.state=ConstructionState.STARTED;
var stateChange = new CompleteConstructionStateChanger(building);
