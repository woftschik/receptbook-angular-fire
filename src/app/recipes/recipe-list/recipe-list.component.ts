import { Component, EventEmitter, Output } from '@angular/core';
import { Recipe } from '../recipe.modal';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent {
  @Output() recipeWasSelected = new EventEmitter<Recipe>();
  recipes: Recipe[] = [
    new Recipe('Rindfleisch Steak', 'Dieses Rezept zeigt euch, wie dieses Steak perfekt wird.', 'https://cdn.pixabay.com/photo/2017/07/16/12/07/beef-2509104_1280.jpg'),
    new Recipe('Kalbssteak', 'Mit grünen Spargeln und Morcheln. Schmeckt genial fein.', 'https://cdn.pixabay.com/photo/2017/03/23/19/57/asparagus-2169305_1280.jpg')
  ];

  onRecipeSelected(recipe: Recipe) {
    this.recipeWasSelected.emit(recipe);
  }
}
