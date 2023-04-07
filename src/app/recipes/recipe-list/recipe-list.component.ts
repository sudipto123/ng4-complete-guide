import { Component } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent {
  recipes: Recipe[] = [
    new Recipe('Sohini Kar Dutta', 'She is my wife', 'https://drive.google.com/file/d/1HPo_TDpA5ql0krwX2bQMUnJ0yweVoO6u/view')
  ];
}
