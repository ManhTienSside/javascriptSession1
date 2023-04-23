
function salary() {
    var date = document.getElementById('countDate').value;
    var salary  = date * 100000;
    document.getElementById('notify').innerHTML =" ket qua: " + " " + salary.toLocaleString() + " " + "vnd";
}
document.getElementById('click1').onclick=salary;
function average() {
    var number1 =  document.getElementById('number1').value;
    var number2 =  document.getElementById('number2').value;
    var number3 =  document.getElementById('number3').value;
    var number4 =  document.getElementById('number4').value;
    var number5 =  document.getElementById('number5').value;
    var ave = parseFloat( (Number(number1) +Number(number2) +Number(number3)+Number(number4)+Number(number5) )/5);
    document.getElementById('notifyAverage').innerHTML = " ket qua: " + " " + ave;
}
function changeMoney() {
    var countMn = document.getElementById('countMoney').value;
    var totalMon = Number(countMn) * 23500;
    document.getElementById('notifyMoney').innerHTML = "So tien: " + totalMon.toLocaleString() + "vnd"
}
document.getElementById('click2').onclick = changeMoney;

function rectangle() {
    var lengthRec = document.getElementById('length').value;
    var widthRec = document.getElementById('width').value;
    
    var periRec = (Number(lengthRec)+Number(widthRec))*2;
    var calRec = Number(lengthRec)*Number(widthRec);
    document.getElementById('perimeter').innerHTML = "chu vi la: " + periRec.toLocaleString();
    document.getElementById('calculus').innerHTML = "dien tich la: " + calRec.toLocaleString();
}
function sumNumber() {
    var num1 = document.getElementById('number6').value;
    var num2 = Math.floor(num1 / 10);
    var num3 = num1 % 10;
    var sumNum = num2 + num3;
    document.getElementById('notifySum').innerHTML = "ket qua la: " + " " + sumNum;
}
document.getElementById('sumNumber').onclick = sumNumber;