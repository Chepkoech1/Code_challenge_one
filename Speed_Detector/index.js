


let speed = prompt("Enter speed");
let speedLimit = 70;
let points = 0;

if(speed < 70) {
    alert("OK")
}
else{
    points = Math.floor((speed - speedLimit) / 5);
    let output = points > 12 ? "License suspended!!": "Points = "+points
    alert(output);

}
