 import { EventEmitter, Injectable } from '@angular/core';
import { Recipe } from './recipe.model'
import { Ingredient } from '../shared/ingredient.modal';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
 
@Injectable()
 export class RecipeService {
    recipeSelected = new EventEmitter<Recipe>();

    private recipes: Recipe[] = [
        new Recipe(
          'Rindfleisch Steak', 
          'Dieses Rezept zeigt euch, wie dieses Steak perfekt wird.', 
          'https://cdn.pixabay.com/photo/2017/07/16/12/07/beef-2509104_1280.jpg',
          [
            new Ingredient("Meat", 1),
            new Ingredient("Fries", 20),
          ]),
        new Recipe(
          'Kalbssteak', 
          'Mit grünen Spargeln und Morcheln. Schmeckt genial fein.', 
          'https://cdn.pixabay.com/photo/2017/03/23/19/57/asparagus-2169305_1280.jpg',
          [
            new Ingredient("Meat", 1),
            new Ingredient("Spargel", 5),
          ])
      ];

      constructor(private slService: ShoppingListService) {}

      getRecipes() {
        return this.recipes.slice();
      }

      getRecipe(index: number) {
        return this.recipes[index];
      }

      addIngredientsToShoppingList(ingredients: Ingredient[]) {
        this.slService.addIngredients(ingredients);
      }
} 