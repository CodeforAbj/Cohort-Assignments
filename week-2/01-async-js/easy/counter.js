function counter(t){
    if(t>0){
        console.log(t);
        t--;
        setTimeout(counter,1000,t);
        
    }
    else{
        console.log("BOOM");
        return;
    }
}
counter(5);