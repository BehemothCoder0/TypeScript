// ES 5
var consObj = {
    set constructionState(state) {
        if (state == ConstructionState.ENDED) {
            throw "State cannot be set if it is complete";
        }
        this.state = state;
    },
    get constructionState() {
        return this.state;
    }
};
var state = ConstructionState.ENDED;
consObj.constructionState = state;
// Typescript
class SetConstructionStatus {
    constructor(name) {
        this.name = name;
    }
    set constructionState(state) {
        if (state == ConstructionState.ENDED) {
            throw "State cannot be set if it is complete";
        }
        this.state = state;
    }
    get constructionState() {
        return this.state;
    }
}
var smartObj = new SetConstructionStatus("name");
smartObj.constructionState = ConstructionState.ENDED;
