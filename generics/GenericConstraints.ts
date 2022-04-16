interface IObjWithLength{
    length:number;
}

class TotalLength<T extends IObjWithLength>{
    constructor(private x:T, private y:T){

    }

    getTotalLength(){
        return this.x.length+this.y.length;
    }
}

let ar:number[]=[1,2,3];
let ar2:number[]=[1,2];

let tlenOb:TotalLength<number[]> = new TotalLength<number[]>(ar,ar2);
console.log(tlenOb.getTotalLength());

let o1 = {length:12};
let o2 = {length:456};

let tlenOb2:TotalLength<IObjWithLength> = new TotalLength<IObjWithLength>(o1,o2);
console.log(tlenOb2.getTotalLength());