function biggest(a , b , c){
    if(a>b && a>c){
        return a;
    }
    else if(b>a && b>c){
        return b;
    }
        return c
}
console.log(biggest(1,3,2))