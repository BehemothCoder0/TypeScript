interface jQuery{
    (selector:string):HTMLElement
    version:string
}

var $ = <jQuery> function(selector){

}

console.log($("#container").tagName);