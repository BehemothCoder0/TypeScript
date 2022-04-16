class KeyValuePair<K,V>{
    constructor(public key:K,public value:V){

    }
}

let pair1:KeyValuePair<string,number> = new KeyValuePair<string,number>("first",1);
let pair2:KeyValuePair<string,Date> = new KeyValuePair<string,Date>("Today's date",new Date(Date.now()));
let pair3:KeyValuePair<string,number> = new KeyValuePair<string,number>("second",2);

class KeyValuePairPrinter<Key,Value>{
    constructor(private pairs:KeyValuePair<Key,Value>[]){

    }

    print(){
        for(let pair of this.pairs){
            console.log(`${pair.key}: ${pair.value}`);
        }
    }
}

let printer:KeyValuePairPrinter<string,number> = new KeyValuePairPrinter<string,number>([pair1,pair3]);
printer.print();