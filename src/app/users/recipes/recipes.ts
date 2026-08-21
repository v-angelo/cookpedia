import { Component, inject, signal } from '@angular/core';
import { Header } from '../header/header';
import { Footer } from '../footer/footer';
import { Api } from '../../services/api';

@Component({
  selector: 'app-recipes',
  imports: [Header, Footer],
  templateUrl: './recipes.html',
  styleUrl: './recipes.css',
})
export class Recipes {
  api = inject(Api);

  allRecipes: any = signal([]);
  dummyRecipes: any[] = [];
  cuisineArray: any = signal([]);
  mealArray: any = signal([]);

  ngOnInit() {
    this.getAllRecipes();
  }

  getAllRecipes() {
    this.api.getAllRecipesAPI().subscribe({
      next: (res: any) => {
        this.allRecipes.set(res);

        // console.log(this.allRecipes());
        this.dummyRecipes = res;

        const dummyCuisineArray = res.map((item: any) => item.cuisine);
        dummyCuisineArray.forEach((item: any) => {
          !this.cuisineArray().includes(item) && this.cuisineArray().push(item);
        });

        const dummyMealArray = res.map((item: any) => item.mealType).flat(1);
        dummyMealArray.forEach((item: any) => {
          !this.mealArray().includes(item) && this.mealArray().push(item);
        });

        console.log({ cusine: this.cuisineArray });
        console.log({ mealType: this.mealArray });
      },
      error: (reason: any) => {
        console.log(reason);
      },
    });
  }
}
