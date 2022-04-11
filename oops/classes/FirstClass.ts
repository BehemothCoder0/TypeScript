class FirstClass{
    /***
     * The below code declares the class field directly
     * in the constructor
     */
    constructor(private firstClassStrProp:string){
        this.firstClassStrProp = firstClassStrProp;
    }
    
    public getFirstClassProp():string{
        return this.firstClassStrProp;
    }
}

var firstClassObj:FirstClass = new FirstClass("someprop");
console.log(firstClassObj.getFirstClassProp());