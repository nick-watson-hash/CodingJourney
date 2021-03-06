// 13 OUT OF 15 CORRECT



function a(){
    return 35;
}
console.log(a())

//Output prediction: 35

function a(){
    return 4;
}
console.log(a()+a());

//Output prediction: 8

function a(b){
    return b;
}
console.log(a(2)+a(4));

//Output prediction: 6

function a(b){
    console.log(b);
    return b*3;
}
console.log(a(3));

//Output prediction: 3       9

function a(b){
   return b*4;
   console.log(b);
}
console.log(a(10));

//Output prediction: 40 

function a(b){
    if(b<10) {
        return 2;
    }
    else     {
        return 4;
    }
    console.log(b);
}
console.log(a(15));

//Output prediction: 4 

function a(b,c){
    return b*c;
}
console.log(10,3);
console.log( a(3,10) );

//Output prediction: 10 3 30 

function a(b){
    for(var i=0; i<10; i++){
        console.log(i);
    }
    return i;
}
console.log(3);
console.log(4);

//Output prediction:   3   4

function a(){
    for(var i=0; i<10; i++){
        i = i +2;
        console.log(i);
    }
}
a();

//Output prediction:   3   4

function a(b,c){
    for(var i=b; i<c; i++) {
       console.log(i);
   }
   return b*c;
}
a(0,10);
console.log(a(0,10));

//Output prediction:   0 1 2 3 4 5 6 7 8 9

function a(){
    for(var i=0; i<10; i++){
       for(var j=0; j<10; j++){
           console.log(j);
       }
       console.log(i);
    }
}

//Output prediction:  0  ANSWER: BLANK  incorrect

function a(){
    for(var i=0; i<10; i++){
        for(var j=0; j<10; j++){
            console.log(i,j);
        }
        console.log(j,i);
    }
}

//Output prediction:  BLANK

var z = 10;
function a(){
    var z = 15;
    console.log(z);
}
console.log(z);

//Output prediction: 10

var z = 10;
function a(){
    var z = 15;
    console.log(z);
}
a();
console.log(z);

//Output prediction:  10 10   ANSWER: 15 10   incorrect

var z = 10;
function a(){
    var z = 15;
    console.log(z);
    return z;
}
z = a();
console.log(z);

//Output prediction:  15 15 