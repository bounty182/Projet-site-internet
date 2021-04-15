/*
function fTest (n,name){
    for(let i=0 ; i<n ; i++){
    console.log(name);
    }
}

fTest(5, "Pierre");
fTest(3, "Laurent");

function f2(){
    return 17;
}

// afficher dans la console la fonction f2
console.log(f2);

// afficher dans la console le résultat de l'appel de la fonction f2
console.log(f2());

*/

function f1(){
    console.log(17);
}

f1();

function f2(){
    return 17;
}

console.log(f2());

function f3(n){
    console.log(n*2);
}

f3(3);

function f4(n){
    return (n*2);
}
let a = f4(99);

console.log(f4(3));

function f5 (n1,n2){
    console.log (n1+n2);
}

function f6 (n1,n2){
    return n1+n2;  
}


f5(42,77);

console.log(f6(42,77));

a+=f6(42,77);
console.log(a);


function f7(n1,n2){
    if (n1>n2){
        return n1;
    } else {
        return n2;
    }
}


console.log(f7(4,100));
console.log(f7(100,2000));

function f8(n1,n2,n3){
    //f7(n1,n2);
    let nResultat = f7(n1,n2);
    return f7(nResultat,n3);
}

console.log(f8(200,400,1001));
console.log(f8(200,1011,400));
console.log(f8(1010,200,400));

function f9 (nb,name){
    for (let i=0 ; i<nb ; i++){
        console.log(name);
    }
}

f9(10,"toto");
f9(20, "tata");

