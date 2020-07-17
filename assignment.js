//feetToMile javascript code:
function feetToMile(feet) {
    var mile = feet / 5280;
    return mile;
}
    var result = feetToMile(10000);
    var result =result.toFixed(2);
    console.log(result)
// woodCalculator javascript code:
function woodCalculator(chair, table, bed) {
    var chairCount = chair * 10;
    var tableCount = table * 25;
    var bedCount = bed * 45;
    var totalCount = chairCount + tableCount + bedCount;
    return totalCount;
}
var result = woodCalculator(6, 2, 5);
console.log(result)
//  brickCalculator javascript code:
function brickCalculator (floor){
 
     if (floor >= 1 && floor <=10) {
         return brickCalculator = floor * (15000  * 15);
     } 
     else if (floor >= 11 && floor <=20){
         return brickCalculator = 150000 + (floor - 10) * 10 * 1000 ;
     }
     else {
        return brickCalculator = 270000 + (floor - 20) * 10 * 1000;
     }
 }
var result = brickCalculator(15);
console.log(result)
//   tinyFriend javascript code:
function tinyFriend(arr){
    var shortLength = Infinity;
    var shortest ;
    if (arr.length > 0){
        for (var i= 0; i < arr.length; i++){
            if (typeof arr[i] == 'string' && arr[i].length < shortLength){
                shortest = arr[i];
                shortLength = arr[i].length;
            }
        }
    }
    return shortest;
}
var result = tinyFriend(['nasim', 'novel', 'nobi', 'apu', 'jamilur']);
console.log(result)