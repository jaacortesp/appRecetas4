import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SpoonacularService {
  private apiKey: string = '4f487c9d8c1d422ebf8674e7f44db2d2';
  private apiUrl: string = 'https://api.spoonacular.com/recipes';

  constructor(private http: HttpClient) {}

  searchRecipes(query: string): Observable<any> {
    const url = `${this.apiUrl}/complexSearch?query=${query}&apiKey=${this.apiKey}`;
    return this.http.get<any>(url);
  }

  getRecipeInformation(id: number): Observable<any> {
    const url = `${this.apiUrl}/${id}/information?apiKey=${this.apiKey}`;
    return this.http.get<any>(url);
  }
}
