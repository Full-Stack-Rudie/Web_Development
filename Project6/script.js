var imageArray = ['#4FC3F7', '#29B6F6', '#03A9F4', '#039BE5', '#0288D1', '#0277BD', '#01579B', '#9575CD', '#7E57C2', '#673AB7', '#5E35B1', '#512DA8', '#4527A0', '#311B92', '#7986CB', '#5C6BC0', '#3F51B5', '#3949AB', '#303F9F', '#283593', '#1A237E', '#64B5F6', '#42A5F5', '#2196F3', '#1E88E5', '#1976D2', '#1565C0', '#0D47A1'];
var imageIndex = 0
document.querySelector("body").style.backgroundColor = imageArray[imageIndex];


function startTime() {
    const today = new Date();
    let h = today.getHours();
    let m = today.getMinutes();
    let s = today.getSeconds();
    m = checkTime(m);
    s = checkTime(s);
    document.getElementById('txt').innerHTML =  h + ":" + m + ":" + s;
    changeColor()
    setTimeout(startTime, 1000);
};

function checkTime(i) {
    if (i < 10) {i = "0" + i};  
return i;
};


function changeColor(){
if(imageIndex<imageArray.length-1){
    imageIndex++;
    document.querySelector("body").style.backgroundColor = imageArray[imageIndex];
}
    else {
        imageIndex = 0;
        document.querySelector("body").style.backgroundColor = imageArray[imageIndex];
}};