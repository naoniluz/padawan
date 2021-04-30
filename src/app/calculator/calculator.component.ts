import { Component, OnInit } from '@angular/core';
// import { resourceLimits } from 'node:worker_threads';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {

  num1: number;
  num2: number;
  result: number;
  
  soma(){
    this.result=this.num1+this.num2;
  }

  sub(){
    this.result=this.num1-this.num2;
  }

  mult(){
    this.result=this.num1*this.num2;
  }

  div(){
    this.result=this.num1/this.num2;
  }
  
  atribuirVal1(valor) {
    this.num1 = parseFloat(valor.data);

  }

  atribuirVal2(valor) {
    this.num2 = parseFloat(valor.data);

  }


  public calculatorTitle:string;
  public calculatorDescription:string;



  constructor() { }

  ngOnInit(): void {

    this.calculatorTitle = "Calculator";
    this.calculatorDescription = "Calculadora para operações básicas";
  }

}