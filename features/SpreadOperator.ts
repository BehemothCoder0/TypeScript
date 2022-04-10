class SpreadOperatorDemo{
    public computeTotal(...array:Array<number>):number{
        var total:number=0;
        for(var num of array){
            total+=num;
        }

        return total;
    }

    public concatToAnExistingArray(arr1:Array<number>,...arr2:Array<number>):Array<number>{
        arr1.push(...arr2);
        return arr1;

    }
}

function SOMain(){
    var obj:SpreadOperatorDemo = new SpreadOperatorDemo();
    console.log(obj.computeTotal(1,2,3,4,5,6,7,8,9,10,11,12,13,14,15));

    var firstArray = [1,2,3,4,5];
    console.log(obj.concatToAnExistingArray(firstArray,6,7,8));
}
SOMain();


