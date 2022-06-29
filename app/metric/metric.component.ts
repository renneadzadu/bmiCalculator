import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, RouterModule } from "@angular/router";


@Component({
  selector: 'pm-enghlis',
  templateUrl: './metric.component.html',
  styleUrls: ['./metric.component.css']
})
export class MetricComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  title = 'Metric BMI';
  
  
  weight:number =0 ; 
  height_centimeters:number =0 ; 
  bmi: number= 0;
  height: number=0;
  kg:number=0;
 
 
  calculateMetricBmi(){
 // this.weight= this.pound*0.48;
//    this.height= this.height_feet*12 + this.height_inches;
 // this.bmi =(this.weight* 0.48) / (((12*this.height_feet)+this.height_inches) * 0.025);
 // this.bmi = (this.weight/this.height /this.height)*703
 //  this.bmi = this.weight / (this.height * this.height)*703;
 
 this.bmi =(this.weight/ this.height_centimeters/this.height_centimeters) * 10000;
 this.bmi = Number(this.bmi.toFixed(2));
 
 
 }

}
