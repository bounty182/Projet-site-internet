/*
setLineWidth(5);                        B1
setPos(100,300);
changeColor(color.blue);
faceRight();
 for(let i=0 ; i<4 ; i++) {
    for(let j=0 ; j<3 ; j++){
        forward(100);
        right(120);
    }
    forward(100);
 }


 setLineWidth(5);                       B2
 setPos(300,500);
 changeColor("#590059");
 faceUp();
 for(let i=0 ; i<5 ; i++){
    for(let j=0 ; j<4 ; j++){
        forward(50);
        right(90);
    }
    up();
    forward(100);
    down();
 }



setLineWidth(5);                        B3
setPos(100,300);
changeColor("#00592D");
faceRight();
 for(let i=0 ; i<3 ; i++){
    for(let j=0 ; j<8 ; j++){
        forward(100);
        left(135);
    }
    up();
    forward(150);
    down();
    shiftColor(0.90);
 }

 

setLineWidth(5);                        B4
setPos(100,300);
faceRight();
for(let i=0 ; i<5 ; i++){
    for(let j=0 ; j<3 ; j++){
        changeColor(color.red);
        forward(50);
        left(120);
    }
    changeColor("#FF8800");
    for(let k=0 ; k<4 ; k++){
        forward(50);
        right(90);
    }
    up();
    forward(100);
    down();
}



setLineWidth(5);                        B5
setPos(300,300);
faceRight();
changeColor(color.yellow);
for(let i=0 ; i<4 ; i++){
    for(let j=0 ; j<8 ; j++){
        forward(200);
        left(135);
    }
    right(90);
    shiftColor(0.25);
}



setLineWidth(5);                           B6
setPos(300,300);
faceRight();
changeColor(color.yellow);
for(let i=0 ; i<3 ; i++){
    for(let j=0 ; j<5 ; j++){
        forward(100);
        left(120);
    }
    right(120);
}


setLineWidth(5);                            B7
setPos(300,400);
faceRight();
changeColor("#592D00");
for(let i=0 ; i<9 ; i++){
    for(let j=0 ; j<3 ; j++){
        forward(100);
        right(120);
    }
    forward(100);
    left(45);
}



setLineWidth(5);                            B8
setPos(300,500);
faceUp();
changeColor(color.green);
forward(200);
left(45);
for(let i=0 ; i<4 ; i++){
    for(let j=0 ; j<3 ; j++){
        changeColor(color.red);
        forward(100);
        left(120);
    }
    changeColor(color.yellow);
    forward(100);
    right(90);
}



setLineWidth(5);                            B9
setPos(400,400);
faceRight();
changeColor(color.green);
for(let i=0 ; i<3 ; i++){
    for(let j=0 ; j<3 ; j++){
        for(let k=0 ; k<4 ; k++){
            right(90);
            forward(100);
        }
        forward(70);
        right(120);
    }
    left(120);
    forward(200);
}



setLineWidth(5);                            B10
setPos(300,100);
faceDown();
changeColor(color.red);
for(let i=0 ; i<4 ; i++){
    for(let j=0 ; j<4 ; j++){
        for(let k=0 ; k<4 ; k++){
            right(90);
            forward(25);
        }
        forward(50);
        right(90);
    }
    forward(100);
}



setLineWidth(5);                           B11
setPos(300,200);
faceRight();
changeColor("#0080FF");
for(let i=0 ; i<6 ; i++){
    for(let j=0 ; j<6 ; j++){
        for(let k=0 ; k<3 ; k++){
            forward(50);
            left(120);
        }
        forward(50);
        left(60);
    }
    up();
    shiftColor(0.10);
    forward(100);
    down();
    right(60);
}


setLineWidth(5);                        B12
setPos(300,250);
faceRight();
changeColor(color.yellow);
for(let i=0 ; i<4 ; i++){
    for(let j=0 ; j<2 ; j++){
        arcLeft(50,90);
        forward(50);
        left(90);
    }
    arcRight(50,45);
}
changeColor(color.blue);
arcRight(50,180);
left(120);
arcLeft(100,300);




setLineWidth(5);                        
setPos(0,100);
faceRight();
forward(250);
left(60);
forward(100);
right(120);
forward(100);
faceRight();
forward(250);
setPos(0,200);
faceRight();
setLineWidth(3);
forward(100);
left(60);

*/

function triangle(){
    
    faceRight();
    forward(250);
    left(60);
    forward(100);
    right(120);
    forward(100);
    faceRight();
    forward(250);
}

setLineWidth(5);                        
setPos(0,100);
triangle();
setPos(0,200);


