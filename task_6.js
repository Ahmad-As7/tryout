function ladya(x1,y1,x2,y2){
    if (x1 == x2 || y1 == y2){
        return "yes";
    }
    return "No";
}
console.log(ladya(1,1,2,1))
// yes
console.log(ladya(3,1,2,5))
// no