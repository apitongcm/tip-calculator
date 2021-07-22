{
const displayTotal = document.getElementById('total-tip');
const displayPerson = document.getElementById("tip-person");
const btn5 = document.getElementById("btn1");
const btn10 = document.getElementById("btn2");
const btn15 = document.getElementById("btn3");
const btn25 = document.getElementById("btn4");
const btn50 = document.getElementById("btn5");
const btnNo = document.getElementById("btn6");
const btnReset = document.getElementById("resetbtn");



    btn5.onclick = () => {
        let tip = 0.05;        
        Calculate(tip);
        Clicking();

    };
    btn10.onclick = () => {
        let tip = 0.10;
        Calculate(tip);
        Clicking();
    };
    btn15.onclick = () => {
        let tip = 0.15;
        Calculate(tip);
        Clicking();
    };
    btn25.onclick = () => {
        let tip = 0.25;
        Calculate(tip);
        Clicking();
    };
    btn50.onclick = () => {
        let tip = 0.50;
        Calculate(tip);
        Clicking();
    };
    btnNo.onclick = () => {
        let inputNo = prompt("enter number in percent!");
        let tip = (inputNo / 100);
        Custom(inputNo);
        Calculate(tip);
        Clicking();
        
    };
    btnReset.onclick = () => {
        btnReset.style.backgroundColor = 'hsl(184, 14%, 56%)';
        btnReset.style.opacity = "0.3";
        document.getElementById("tip-person").reset();
        document.getElementById("myForm").reset();
    };

    function Calculate(tip){

        let myNumber = parseInt(document.getElementById("myNumber").value);
        let quantity = parseInt(document.getElementById("number").value); 
        let inputNum = document.forms["myForm"]["fname"].value;
        let quantityVal = document.forms["myForm"]["mynum"].value;

        if (inputNum == "" || inputNum == null) {
            alert(" Not a valid input: Calculation Failed!");
            return false;
          }
        else if(quantity == 0 || quantityVal == "" || quantityVal == null) {
            document.getElementById('notzero').style.border = "1px solid red";
            document.getElementById('p2').innerText = "Can't be zero!";
            document.getElementById('p2').style.color = "red";
            return false;
           
        }
        else{
            document.getElementById('p2').innerText = "";
            document.getElementById('notzero').style.border = "none";    
        let total = ((myNumber + (myNumber * tip)) / quantity).toFixed(3); 
        let tipPerson = ((myNumber * tip) / quantity).toFixed(3);
        displayPerson.innerHTML = "$" + tipPerson;
        displayTotal.innerHTML = "$" + total;
        };
    };

    function Custom(inputNo){
        document.getElementById("btn6").innerHTML = inputNo + "%";
    };

    function Clicking(){
       btnReset.style.backgroundColor = 'hsl(172, 67%, 45%)';
       btnReset.style.opacity = "1";
    };

}
  


