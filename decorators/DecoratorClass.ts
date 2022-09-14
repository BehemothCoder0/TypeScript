class DecoratorClass{
    @NotNullable
    id:string

    @MinMax(1,10)
    range:number
}

function NotNullable(target:any,propertyName:string){
    let id:string
    Object.defineProperty(target,propertyName,{
        set: (newId:string)=>{
            if(newId==null){
                throw "Id cannot be null";
            }
            else if(newId===undefined){
                console.log("In elseif")
                id=undefined;
            }
            else{
                id = newId;
            }
        },
        get: () =>{
            return id;
        }
    });
}

function MinMax(min:number,max:number){
    return (target,propertyName)=>{
        let currentInput:number=target[propertyName];
        console.log("CurrentInput:"+currentInput)

        Object.defineProperty(target,propertyName,{
            set: (newInput:number)=>{
                if(newInput < min || newInput > max){
                    throw `Entered Input ${newInput} is not in range between ${min} and ${max}`
                }
                else{
                    currentInput=newInput;
                }
            },
            get: ()=>{
                return currentInput;
            }
        });
    };
}

const id1:DecoratorClass = new DecoratorClass();
id1.id="id123";
id1.range=4;
console.log(id1.id);
console.log(id1.range);

const id2:DecoratorClass = new DecoratorClass();
//id2.id=undefined;
id2.range=5;
console.log(id2.id);
console.log(id2.range);

const id3:DecoratorClass = new DecoratorClass();
console.log(id3.range)



