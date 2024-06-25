import { Component, OnInit } from '@angular/core';
import { SpoonacularService } from '../../services/spoonacular.service';

@Component({
  selector: 'app-spoonacular',
  templateUrl: './spoonacular.page.html',
  styleUrls: ['./spoonacular.page.scss'],
})
export class SpoonacularPage implements OnInit {
  recipes: any[] = [];
  searchQuery: string = '';

  constructor(private spoonacularService: SpoonacularService) {}

  ngOnInit() {}

  searchRecipes() {
    if (this.searchQuery.trim().length > 0) {
      this.spoonacularService.searchRecipes(this.searchQuery).subscribe((data) => {
        this.recipes = data.results;
      });
    }
  }
}

