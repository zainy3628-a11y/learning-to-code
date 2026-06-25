function digit(number:number):boolean {
    return number%2==0;
}
const num:number=8;

if (digit(num)) {
    console.log("even");
} else {
    console.log("odd");
}