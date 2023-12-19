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


}
