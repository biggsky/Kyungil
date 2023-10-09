interface Iobj {
    [key : string] : any;
    // [key : string] : () => FourRun;
    // unknown??????????????????
    // 타입추론을 할 수 있게끔 interface 만들어서 추론할수있게끔 만들어줘야함.
}

// a = {"four" : 1 , "six" : 2}
// a = {four:1}
// a["four"]

class Run{
    // obj: () => FourRun
    obj: Iobj = {}

    // public set(key: string, _parameter : FourRun){
    public set(key: string, _parameter : object){
        console.log("key : ",key);
        console.log("_parameter : ", _parameter);
        // console.log("this.obj : ", this.obj);

        console.log("1. this.obj : ", this.obj);
        this.obj[key] = _parameter;

        // console.log(key);
        // obj["four"].generateRandomArray();
        // obj[key].generateRandomArray();
    }
    public run (key : string){
        console.log("2. this.obj ", this.obj);

        this.obj[key].generateRandomArray();
    }
}

class FourRun{
    generateRandomArray(){
        let arr : number[] = [];
        for(let i=0; i<4; i++){
            let rannum = Math.floor(Math.random()*4 + 1);
            if(arr.indexOf(rannum) === -1){
                arr[i] = rannum;
            }else{
                i--;
            }
        }
        // console.log(arr.join(","));
        console.log(arr);
    }
}

class SixRun{
    generateRandomArray(){
        let arr : number[] = [];
        for(let i=0; i<6; i++){
            let rannum = Math.floor(Math.random()*6 + 1);
            if(arr.indexOf(rannum) === -1){
                arr[i] = rannum;
            }else{
                i--;
            }
        }
        console.log(arr.join(","));
    }
}

class eightRun{
    generateRandomArray(){
        let arr : number[] = [];
        for(let i=0; i<8; i++){
            let rannum = Math.floor(Math.random()*8 + 1);
            if(arr.indexOf(rannum) === -1){
                arr[i] = rannum;
            }else{
                i--;
            }
        }
        console.log(arr.join(","));
    }
}


// const obj = {"four":new FourRun(),"six": new SixRun(),"eight": new eightRun()};
// const first = new Run(obj);
// first.getObj();


const run = new Run();
run.set("four",new FourRun());
// run.set("six",new SixRun());
// run.set("eight",new eightRun());
run.run("four")
// run.run("six")
// run.run("eight")
