import { Component, ElementRef, OnInit, Output } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  ingredients: Ingredient[] = [
    new Ingredient('Apples', 5),
    new Ingredient('Tomatoes', 10)
  ];

  constructor() { }
  ngOnInit() {

  }
  onIngredientAdded(ingredient: Ingredient) {

    if (!this.ingredients.find(e => e.name.toLowerCase() === ingredient.name.toLowerCase())) {
      this.ingredients.push(ingredient);
    }
    else {
      var oldIngredient: Ingredient = this.ingredients.find(e => e.name.toLowerCase() === ingredient.name.toLowerCase());
      var oldAmount: number = +oldIngredient.amount;
      var newAmount: number = +ingredient.amount;

      var index = this.ingredients.indexOf(oldIngredient);

      var updatedAmount: number = oldAmount + newAmount;
      delete this.ingredients[index];

      ingredient.amount = updatedAmount;
      ingredient.name = ingredient.name;
      
      this.ingredients[index] = ingredient;
    }
  }
}
