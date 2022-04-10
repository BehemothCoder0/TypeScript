class OptionalParams{
    public countdown(start: number, end=1, interval=1): void{
        var current: number=start;
        while(current>end){
            console.log(current);
            current-=interval;
        }
    }
}

function OPmain(){
    var obj:OptionalParams = new OptionalParams();
    obj.countdown(100,1,2);
}

OPmain();