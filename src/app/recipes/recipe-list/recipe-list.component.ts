import { Component } from '@angular/core';
import { Recipe } from '../recipe.modal';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent {
  recipes: Recipe[] = [
    new Recipe('A Test Recipe', 'This is a simply a test', 'https://cdn.pixabay.com/photo/2017/07/16/12/07/beef-2509104_1280.jpg'),
    new Recipe('A Test Recipe', 'This is a simply a test', 'https://cdn.pixabay.com/photo/2017/07/16/12/07/beef-2509104_1280.jpg')
  ];
  message: string = 'Hallo von der Komponente!';
}
