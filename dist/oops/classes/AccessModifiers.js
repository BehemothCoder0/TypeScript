var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var PrivateClass = /** @class */ (function () {
    function PrivateClass(privateProp) {
        this.privateProp = privateProp;
    }
    return PrivateClass;
}());
var ProtectedClass = /** @class */ (function () {
    function ProtectedClass(protectedProp) {
        this.protectedProp = protectedProp;
    }
    return ProtectedClass;
}());
var InheritedClass = /** @class */ (function (_super) {
    __extends(InheritedClass, _super);
    function InheritedClass() {
        return _super.call(this, "Protected Prop") || this;
    }
    InheritedClass.prototype.getProtectedPropFromBaseClass = function () {
        return this.protectedProp;
    };
    return InheritedClass;
}(ProtectedClass));
var PublicClass = /** @class */ (function () {
    function PublicClass(publicProp) {
        this.publicProp = publicProp;
    }
    return PublicClass;
}());
var privateObj = new PrivateClass("privateProp");
// The below code throws error, Uncomment it to check as we are getting private property
//privateObj.privateProp;
var inhObj = new InheritedClass();
// The below code throws error, as we are trying to access protected property not from inherited class, Uncomment it to check
//inhObj.protectedProp;
// Here we are trying to access the protected property within class
console.log("protected prop is:" + inhObj.getProtectedPropFromBaseClass());
// Public property can be accessed anywhere
var publicObj = new PublicClass("Its a public property");
console.log("Public property is:" + publicObj.publicProp);
