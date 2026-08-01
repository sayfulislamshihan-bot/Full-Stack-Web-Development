// Write a loop that goes from 1 to 100, but stops (using break) when it encounters the first square number (like 4, 9, 16, etc.)

for(let i = 1; i <= 100; i++){
    if(i==4 || i==9 || i==16 || i==25 || i==36 || i==49 || i==64 || i==81 || i==100){
        break;
    }
    console.log(i)
}