function f(n){
    if (n==1) {
        return 1;
    }
    else if (n==2){
        return 3;
    }else if(n==3){
        return 3;
    }
     else {
        return f(n-1)+f(n-3)+f(n-3)
    }
}
console.log(f(4) );