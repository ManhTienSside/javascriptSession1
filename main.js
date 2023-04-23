
function salary() {
    //b1:input : tim den the va lay gia tri
    var date = document.getElementById('countDate').value;
    //b2:step : 1ngay = 100.000 =>luong = songaylamviec *10000
    var salary  = date * 100000;
    //b3:hien thi thong bao len cho nguoi dung
    document.getElementById('notify').innerHTML =" ket qua: " + " " + salary.toLocaleString() + " " + "vnd";
}
document.getElementById('click1').onclick=salary;
function average() {
    //b1:input : tim den the va lay gia tri
    var number1 =  document.getElementById('number1').value;
    var number2 =  document.getElementById('number2').value;
    var number3 =  document.getElementById('number3').value;
    var number4 =  document.getElementById('number4').value;
    var number5 =  document.getElementById('number5').value;
    //b2:step: trung binh cua 5 so bang tong chia 5
    var ave = parseFloat( (Number(number1) +Number(number2) +Number(number3)+Number(number4)+Number(number5) )/5);
    //b3:hien thi thong bao len cho nguoi dung
    document.getElementById('notifyAverage').innerHTML = " ket qua: " + " " + ave;
}
function changeMoney() {
    //b1:input : tim den the va lay gia tri
    var countMn = document.getElementById('countMoney').value;
    //b2:step :1usd = 23500 => tongtien = soTienCanDoi *23500
    var totalMon = Number(countMn) * 23500;
    //b3:hien thi thong bao len cho nguoi dung
    document.getElementById('notifyMoney').innerHTML = "So tien: " + totalMon.toLocaleString() + "vnd"
}
document.getElementById('click2').onclick = changeMoney;

function rectangle() {
    //b1:input : tim den the va lay gia tri
    var lengthRec = document.getElementById('length').value;
    var widthRec = document.getElementById('width').value;
    //b2:step : chuvi= ( dai + rong ) *2; dientich = dai *rong
    var periRec = (Number(lengthRec)+Number(widthRec))*2;
    var calRec = Number(lengthRec)*Number(widthRec);
    //b3:hien thi thong bao len cho nguoi dung
    document.getElementById('perimeter').innerHTML = "chu vi la: " + periRec.toLocaleString();
    document.getElementById('calculus').innerHTML = "dien tich la: " + calRec.toLocaleString();
}
function sumNumber() {
    //b1:input : tim den the va lay gia tri
    var num1 = document.getElementById('number6').value;
    //b2 step : chi lay 2 ki tu; 
    // lay 2 ki tu chia co hang chục (10) lam tron gia tri xuong 1 so
    var num2 = Math.floor(num1 / 10);
    // chia lay phan du
    var num3 = num1 % 10;
    // tong cua 2 ki tu
    var sumNum = num2 + num3;
    //b3: output: hien thi thong bao len cho nguoi dung
    document.getElementById('notifySum').innerHTML = "ket qua la: " + " " + sumNum;
}
document.getElementById('sumNumber').onclick = sumNumber;