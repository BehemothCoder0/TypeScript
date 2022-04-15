class PrivateClass {
    constructor(privateProp) {
        this.privateProp = privateProp;
    }
}
class ProtectedClass {
    constructor(protectedProp) {
        this.protectedProp = protectedProp;
    }
}
class InheritedClass extends ProtectedClass {
    constructor() {
        super("Protected Prop");
    }
    getProtectedPropFromBaseClass() {
        return this.protectedProp;
    }
}
class PublicClass {
    constructor(publicProp) {
        this.publicProp = publicProp;
    }
}
let privateObj = new PrivateClass("privateProp");
// The below code throws error, Uncomment it to check as we are getting private property
//privateObj.privateProp;
let inhObj = new InheritedClass();
// The below code throws error, as we are trying to access protected property not from inherited class, Uncomment it to check
//inhObj.protectedProp;
// Here we are trying to access the protected property within class
console.log("protected prop is:" + inhObj.getProtectedPropFromBaseClass());
// Public property can be accessed anywhere
let publicObj = new PublicClass("Its a public property");
console.log("Public property is:" + publicObj.publicProp);
