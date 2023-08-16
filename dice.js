//for image 1
var randomNo1 = Math.floor(Math.random()*6) + 1; 
 /* Random number function generates a number between 0 and 1 but not including 1
    So if we multiply it by 6(i.e., no of possibilities) and then take floor of it,
    we only ever get a possible range of 0 to 5
    Adding 1 increases upper bound as well as the lower bound of the range
    Hence we will get a range of numbers between 1 to 6*/
var DiceImg1 = "dice" +randomNo1+ ".png";
var img1source="images/"+DiceImg1 ;
var img1 = document.querySelectorAll("img")[0];
img1.setAttribute("src", img1source);

//for image 2
var randomNo2 = Math.floor(Math.random()*6) + 1; 
var DiceImg2 = "dice"+randomNo1+ ".png";
var img2source="images/"+DiceImg2;
var img2 = document.querySelectorAll("img")[1];
img2.setAttribute("src", img2source);

//results
if(randomNo1>randomNo2){
    document.querySelector("h1").innerHTML = "Player 1 wins !!!";
    }
else if(randomNo2>randomNo1){
    document.querySelector("h1").innerHTML = "Player 2 wins !!!";
}
else{
        document.querySelector("h1").innerHTML = "Draw !!!";   
    } 


