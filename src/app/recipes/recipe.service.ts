 import { Recipe } from './recipe.model'
 
 export class RecipeService {
    recipes: Recipe[] = [
        new Recipe('Rindfleisch Steak', 'Dieses Rezept zeigt euch, wie dieses Steak perfekt wird.', 'https://cdn.pixabay.com/photo/2017/07/16/12/07/beef-2509104_1280.jpg'),
        new Recipe('Kalbssteak', 'Mit grünen Spargeln und Morcheln. Schmeckt genial fein.', 'https://cdn.pixabay.com/photo/2017/03/23/19/57/asparagus-2169305_1280.jpg')
      ];
}