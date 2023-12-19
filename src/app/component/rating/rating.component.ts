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
getTotalRatings(): number {
  // Calculer et retourner le nombre total d'évaluations
  return this.ratingsCount.reduce((total, count) => total + count, 0);
}

/*this.ratingsCount: Cela fait référence au tableau que vous avez défini pour stocker les comptages de chaque évaluation en étoile. Dans votre cas, c'est un tableau avec cinq éléments, où chaque élément représente le nombre d'évaluations pour l'étoile correspondante (de 1 à 5).

La méthode .reduce : La méthode reduce est une fonction d'ordre supérieur en JavaScript/TypeScript utilisée pour itérer sur un tableau et accumuler un résultat unique. Dans ce cas, elle est utilisée pour additionner tous les comptages dans le tableau ratingsCount.

((total, count) => total + count) : C'est la fonction de rappel fournie à reduce. Elle prend deux paramètres - total et count. total est le résultat accumulé et count est l'élément actuellement traité dans le tableau.

total : La somme en cours des comptages jusqu'à présent.
count : Le comptage d'évaluations pour l'étoile actuelle.
La fonction ajoute simplement le comptage actuel à la somme en cours.

, 0 : C'est la valeur initiale pour le paramètre total. Lors de la première itération, total est initialisé à 0. Cela est important pour fournir une valeur initiale au processus de sommation.*/

}