import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { filter, map, Observable, of, switchMap } from 'rxjs';
import { Character } from './character';

@Injectable({
  providedIn: 'root'
})
export class DataService {

    BASE_URL = 'https://rickandmortyapi.com/api';

    constructor(private http: HttpClient) { }


    getAllCharacters(): Observable<Character[]> {
        return this.fetchAllPages(`${this.BASE_URL}/character`);
      }
    
      getCharacters(): Observable<Character[]> {
        return this.http.get<any>(`${this.BASE_URL}/character`).pipe(
          map((data: any) => this.obj2ArrayCharacters(data.results))
        );
      }
      private fetchAllPages(url: string, characters: Character[] = []): Observable<Character[]> {
        return this.http.get<any>(url).pipe(
          switchMap((data: any) => {
            const results = data.results || [];
            characters.push(...this.obj2ArrayCharacters(results));
    
            const nextPageUrl = data.info?.next;
            if (nextPageUrl) {
              return this.fetchAllPages(nextPageUrl, characters);
            } else {
              return of(characters);
            }
          })
        );
      }
/*
    getCocktailById(id: string): Observable<Cocktail> {
        return this.http.get(this.BASE_URL + '/lookup.php?i=' + id).pipe(
            filter( (data: any) => data.drinks != null),
            map( (data: any) => ({
                id: data.drinks[0].idDrink,
                name: data.drinks[0].strDrink,
                description: data.drinks[0].strInstructions,
                alcoholic: data.drinks[0].strAlcoholic === 'Alcoholic',
                img: data.drinks[0].strDrinkThumb
            }) )
        )
    }

    getCocktailsWith(): Observable<Cocktail[]> {
        return this.getCocktails().pipe(
            map( (cocktails: Cocktail[]) => cocktails.filter( (el: Cocktail) => el.alcoholic ))
        )
    }

    getCocktailsWithout(): Observable<Cocktail[]> {
        return this.getCocktails().pipe(
            map( (cocktails: Cocktail[]) => cocktails.filter( (el: Cocktail) => ! el.alcoholic ))
        )
    }

    getCocktailsContains(search: string): Observable<Cocktail[]> {
        return this.getCocktails().pipe(
            map( (cocktails: Cocktail[]) => cocktails.filter( (el: Cocktail) => el.name.toLocaleLowerCase().indexOf(search.toLocaleLowerCase()) >= 0 ))
        )
    }*/

    protected obj2ArrayCharacters(obj: any): Character[] {
        console.log(obj)
        return obj.results.map((character: any): Character => ({
          id: character.id,
          name: character.name,
          status: character.status,
          species: character.species,
          type: character.type,
          gender: character.gender,
          origin: character.origin,
          location: character.location,
          image: character.image,
          episode: character.episode
        }));
      }
}