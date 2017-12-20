
class BinaryCalculator {
	constructor(num) {
		this.num = num;
	}
    fromTo(baseFrom, baseTo) {
        return parseInt(this.num, baseFrom).toString(baseTo);       
    }
    dec2Bin() {
        return this.fromTo(10, 2);
    }
    bin2Dec() {
        return this.fromTo(2, 10);
    }
};

window.onload = function () {
    let input = "";
    let operatorAdded = false;
    let res = document.getElementById("res");

    var btn0 = document.getElementById("btn0");
    var btn1 = document.getElementById("btn1");
    var btnSum = document.getElementById("btnSum");
    var btnSub = document.getElementById("btnSub");
    var btnMul = document.getElementById("btnMul");
    var btnClr = document.getElementById("btnClr");
    var btnDiv = document.getElementById("btnDiv");
    var btnEql = document.getElementById("btnEql");
    
    var addElement = function(el) {
        
        if (el === "+" || el === "-" || el === "*" || el === "/" ) {
            if (!operatorAdded && input.length > 0) {
                input += el;
                res.innerHTML = input;
                operatorAdded = true;
            }
        }
        else {
            input += el;
            res.innerHTML = input;            
        }
    }
    
    btnClr.onclick = function () {
        input = "";
        res.innerHTML = input;
        operatorAdded = false;
    }
    
    btn0.onclick = () => { addElement("0") };
    btn1.onclick = () => { addElement("1") };
    btnSum.onclick = () => { addElement("+") };
    btnSub.onclick = () => { addElement("-") };
    btnMul.onclick = () => { addElement("*") };
    btnDiv.onclick = () => { addElement("/") };

    btnEql.onclick = function() {
        let operand1, operand2, result;
        if (input.split('*').length > 1) {
            operand1 = Number(input.split('*')[0]);
            operand2 = Number(input.split('*')[1]);
            result = Number(new BinaryCalculator(operand1).bin2Dec()) * Number(new BinaryCalculator(operand2).bin2Dec());
        }
        else if (input.split('/').length > 1) {
            operand1 = Number(input.split('/')[0]);
            operand2 = Number(input.split('/')[1]);
            result = Number(new BinaryCalculator(operand1).bin2Dec()) / Number(new BinaryCalculator(operand2).bin2Dec());
        }
        else if (input.split('-').length > 1) {
            operand1 = Number(input.split('-')[0]);
            operand2 = Number(input.split('-')[1]);
            result = Number(new BinaryCalculator(operand1).bin2Dec()) - Number(new BinaryCalculator(operand2).bin2Dec());
        }
        else if (input.split('+').length > 1) {
            operand1 = Number(input.split('+')[0]);
            operand2 = Number(input.split('+')[1]);
            result = Number(new BinaryCalculator(operand1).bin2Dec()) + Number(new BinaryCalculator(operand2).bin2Dec());
        }
        else {
            return;
        }
        input = String(new BinaryCalculator(result).dec2Bin());
        res.innerHTML = input;
        operatorAdded = false;
    }
};