import { Component, EventEmitter, Output } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent {
  @Output() recipeWasSelected = new EventEmitter<Recipe>();

  recipes: Recipe[] = [
    new Recipe('A Test Recipe', 'This is a simple test', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTh86VTyJAzehgCjWoMtE4f-G6__2_kaRLlbQ&usqp=CAU'),
    new Recipe('A Cake Recipe', 'This is a cup cake', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDKNniDA9VLQQgNTyRfyY1kJHwrH0tYe65qioVbLgpgzpnNmh9VRC3w5MpZyJE50kSXvQ&usqp=CAU')
  ];

  constructor() { }

  ngOnInit(){

  }

  onRecipeSelected(recipe: Recipe){
    this.recipeWasSelected.emit(recipe);
  }
}
