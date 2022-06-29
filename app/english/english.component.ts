import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, RouterModule } from "@angular/router";


@Component({
  selector: 'pm-enghlis',
  templateUrl: './english.component.html',
  styleUrls: ['./english.component.css']
})
export class EnglishComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  title = 'English BMI';
  
  
  weight:number =0 ; 
  height_inches:number =0 ; 
  height_feet:number =0 ; 
  bmi: number= 0;
  height: number=0;
  pound:number=0;
 
  inches:number =0 ; 
 
  calculateBmi(){
 // this.weight= this.pound*0.48;
   this.height= this.height_feet*12 + this.height_inches;
 // this.bmi =(this.weight* 0.48) / (((12*this.height_feet)+this.height_inches) * 0.025);
 // this.bmi = (this.weight/this.height /this.height)*703
 //  this.bmi = this.weight / (this.height * this.height)*703;
 
 this.bmi =(this.weight/ this.height/this.height * 703)-4.986;
 this.bmi = Number(this.bmi.toFixed(2));
 
 
 }

}
