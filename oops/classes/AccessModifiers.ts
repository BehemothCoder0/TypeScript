class PrivateClass{
    constructor(private privateProp:string){

    }
}

class ProtectedClass{
    constructor(protected protectedProp:string){
        
    }
}

class InheritedClass extends ProtectedClass{
    constructor(){
        super("Protected Prop");
    }

    public getProtectedPropFromBaseClass():string{
        return this.protectedProp;
    }
}

class PublicClass{
    constructor(public publicProp:string){

    }
}

let privateObj:PrivateClass = new PrivateClass("privateProp");

// The below code throws error, Uncomment it to check as we are getting private property
//privateObj.privateProp;

let inhObj:InheritedClass = new InheritedClass();

// The below code throws error, as we are trying to access protected property not from inherited class, Uncomment it to check
//inhObj.protectedProp;

// Here we are trying to access the protected property within class
console.log("protected prop is:"+inhObj.getProtectedPropFromBaseClass());

// Public property can be accessed anywhere
let publicObj:PublicClass = new PublicClass("Its a public property");
console.log("Public property is:"+publicObj.publicProp);