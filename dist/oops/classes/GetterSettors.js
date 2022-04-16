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
var SetConstructionStatus = /** @class */ (function () {
    function SetConstructionStatus(name) {
        this.name = name;
    }
    Object.defineProperty(SetConstructionStatus.prototype, "constructionState", {
        get: function () {
            return this.state;
        },
        set: function (state) {
            if (state == ConstructionState.ENDED) {
                throw "State cannot be set if it is complete";
            }
            this.state = state;
        },
        enumerable: false,
        configurable: true
    });
    return SetConstructionStatus;
}());
var smartObj = new SetConstructionStatus("name");
smartObj.constructionState = ConstructionState.ENDED;
