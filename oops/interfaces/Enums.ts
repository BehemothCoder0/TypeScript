interface ConstructBuilding{
    (name:string):ConstructBuilding
    beginConstruction():ConstructionState
    endConstruction():ConstructionState
    state:ConstructionState;
}

enum ConstructionState{
    STARTED=1,
    ENDED
}


function constructBuilding(){
    var building = <ConstructBuilding> function(buildingName){

    }

    var state:ConstructionState = building.beginConstruction();

    if(state == ConstructionState.STARTED){
        building.endConstruction();
    }
}