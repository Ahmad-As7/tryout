function year(a){
    if(a % 4 == 0 && a % 400 == 0){
        return "yes";
    }
    return "No";
    }

console.log(year(2000))