function f1(data){
    console.log(hello: f1 :${data});
    f2();
}
function f2(data){
    console.log("hello: f2");
}
setTimeout(f1, 3000,"hello")

// dynamic
function success(){
    console.log("Success")
}
function fail(){
    console.log("Fail")
}
function error(){
    console.log("Error")
}
function exec(data,callback){
    if(data){
        console.log(balance :${data});
    }
    callback()
    // setTimeout(callback,3000)
}
function trigger(){
    const data =1
    if(data>0){
            exec(data,success)   
    }
    else if(data<=0){
            exec(data,fail)
    }
    else{
        exec("error",error)
    }
}
trigger()
