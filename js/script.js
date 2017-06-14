/*jslint white:true */
/*global angular */

var app = angular.module("calcApp", []);
app.controller("CalcCtrl", CalcCtrl);


function CalcCtrl() {
    this.gotClicked = function(button) {
        this.selectOperator = button;
    }

     //computing   
this.compute = function() {
    var num1 = parseFloat(this.input1);
    var num2 = parseFloat(this.input2);
        if (this.selectOperator === "+"){
            this.result = num1 + num2;
        }
        else if (this.selectOperator === "-"){
            this.result = num1 - num2;
        }
        else if (this.selectOperator === "/"){
            this.result = num1 / num2;
        }
        else if (this.selectOperator === "*"){
            this.result = num1 * num2;
        }
}


}

/*
function theFunc() {
    var x = document.getElementsByTagName("BUTTON")[0].textContent;
    document.getElementById("numLine").innerHTML = x;  
}

*/
