import { Component } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css']
})
export class RecipeEditComponent {
  id!: number;
  eidtMode = false;

  constructor(private route: ActivatedRoute) {
  }

  gOnInit() {
    this.route.params
      .subscribe(
          (params: Params) => {
            this.id = +params['id'];
            this.eidtMode = params['id'] != null;
          }
      );
  }

}
