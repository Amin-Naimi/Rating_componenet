import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';


@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.css']
})
export class RatingComponent {
  // si initial Rating = 3 :
  // i = 1 & i = 2 & i = 3 auront la classe active : i <= initialRating
  stars=[1,2,3,4,5];
  initialRating = 0;

  updateRating(rate:number){
    this.initialRating=rate;
    console.log(this.initialRating);
  }
/***********************************************************************************************************************/
/*exemple2*/
  currentRate=0;

  ratingsCount: number[] = [0, 0, 0, 0, 0]; // Tableau pour stocker les nombres d'étoiles

  onRateChange() {
    // Incrémentez le nombre d'étoiles correspondant
    this.ratingsCount[this.currentRate - 1]++;
    console.log(`Nombre d'étoiles ${this.currentRate}: ${this.ratingsCount[this.currentRate - 1]}`);
  }
  
/***********************************************************************************************************************/
/*Testin bars**/

}