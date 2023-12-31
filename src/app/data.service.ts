import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { filter, map, Observable, of, switchMap } from 'rxjs';
import { Character } from './character';
import { Location } from './location';
import { Episode } from './episode';

@Injectable({
  providedIn: 'root'
})
export class DataService {

    BASE_URL = 'https://rickandmortyapi.com/api';

    constructor(private http: HttpClient) { }


    getAllCharacters(
      name?: string,
      status?: string,
      species?: string,
      type?: string,
      gender?: string
    ): Observable<Character[]> {
  
      let apiUrl = `${this.BASE_URL}/character/`;
  
      const queryParams = new URLSearchParams();
  
      if (name) queryParams.set('name', name);
      if (status) queryParams.set('status', status);
      if (species) queryParams.set('species', species);
      if (type) queryParams.set('type', type);
      if (gender) queryParams.set('gender', gender);
  
      const queryString = queryParams.toString();
      if (queryString) {
        apiUrl += `?${queryString}`;
      }
  
      return this.fetchAllPages<Character>(apiUrl, this.objToCharacter.bind(this));
    }
    
    getAllLocations(
      name?: string,
      type?: string,
      dimension?: string
    ): Observable<Location[]> {
  
      let apiUrl = `${this.BASE_URL}/location/`;
  
      const queryParams = new URLSearchParams();
  
      if (name) queryParams.set('name', name);
      if (type) queryParams.set('type', type);
      if (dimension) queryParams.set('dimension', dimension);
  
      const queryString = queryParams.toString();
      if (queryString) {
        apiUrl += `?${queryString}`;
      }
  
      return this.fetchAllPages<Location>(apiUrl, this.objToLocation.bind(this));
    }
      
    getAllEpisodes(
      name?: string,
      episode?: string
    ): Observable<Episode[]> {
  
      let apiUrl = `${this.BASE_URL}/episode/`;
  
      const queryParams = new URLSearchParams();
  
      if (name) queryParams.set('name', name);
      if (episode) queryParams.set('episode', episode);
  
      const queryString = queryParams.toString();
      if (queryString) {
        apiUrl += `?${queryString}`;
      }
  
      return this.fetchAllPages<Episode>(apiUrl, this.objToEpisode.bind(this));
    }

    getCharacterEpisodesByCharacterId(id: number): Observable<Episode[]> {
      return this.getCharacterById(id).pipe(
        switchMap((character: Character) => {
          const episodeIds: number[] = character.episode.map((episodeUrl: string) => {
            const splitUrl = episodeUrl.split('/');
            return parseInt(splitUrl[splitUrl.length - 1], 10);
          });

          const episodesString: string = episodeIds.join(',');
          console.log(episodesString)
          return this.http.get<any>(`${this.BASE_URL}/episode/${episodesString}`).pipe(
            map((data: any | any[]) => {
              if (Array.isArray(data)) {
                return data.map(item => this.objToEpisode(item));
              } else {
                return [this.objToEpisode(data)];
              }
            })
          );
        })
      );
    }

    getEpisodeCharactersByEpisodeId(id: number): Observable<Character[]> {
      return this.getEpisodeById(id).pipe(
        switchMap((episode: Episode) => {
          const characterIds: number[] = episode.characters.map((characterUrl: string) => {
            const splitUrl = characterUrl.split('/');
            return parseInt(splitUrl[splitUrl.length - 1], 10);
          });

          const characterString: string = characterIds.join(',');
          console.log(characterString)
          return this.http.get<any>(`${this.BASE_URL}/character/${characterString}`).pipe(
            map((data: any | any[]) => {
              if (Array.isArray(data)) {
                return data.map(item => this.objToCharacter(item));
              } else {
                return [this.objToCharacter(data)];
              }
            })
          );
        })
      );
    }

    getLocationCharactersByLocationId(id: number): Observable<Character[]> {
      return this.getLocationById(id).pipe(
        switchMap((location: Location) => {
          const characterIds: number[] = location.residents.map((characterUrl: string) => {
            const splitUrl = characterUrl.split('/');
            return parseInt(splitUrl[splitUrl.length - 1], 10);
          });

          const characterString: string = characterIds.join(',');
          console.log(characterString)
          return this.http.get<any>(`${this.BASE_URL}/character/${characterString}`).pipe(
            map((data: any | any[]) => {
              if (Array.isArray(data)) {
                return data.map(item => this.objToCharacter(item));
              } else {
                return [this.objToCharacter(data)];
              }
            })
          );
        })
      );
    }
    
      getCharacterById(id: number): Observable<Character> {
        return this.http.get<any>(`${this.BASE_URL}/character/${id}`).pipe(
          map((data: any) => this.objToCharacter(data))
        );
      }
      
      getLocationById(id: number): Observable<Location> {
        return this.http.get<any>(`${this.BASE_URL}/location/${id}`).pipe(
          map((data: any) => this.objToLocation(data))
        );
      }
      
      getEpisodeById(id: number): Observable<Episode> {
        return this.http.get<any>(`${this.BASE_URL}/episode/${id}`).pipe(
          map((data: any) => this.objToEpisode(data))
        );
      }

      private fetchAllPages<T>(
        url: string,
        conversionFn: (obj: any) => T,
      ): Observable<T[]> {
        const items: T[] = [];
        return this.http.get<any>(url).pipe(
          switchMap((data: any) => {
            const results = data.results || [];
            results.forEach((result: any) => {
              items.push(conversionFn(result));
            });
      
            const nextPageUrl = data.info?.next;
            if (nextPageUrl) {
              return this.fetchAllPages<T>(nextPageUrl, conversionFn).pipe(
                map((subItems: T[]) => {
                  items.push(...subItems);
                  return items;
                })
              );
            } else {
              return of(items);
            }
          })
        );
      }

protected objToCharacter(obj: any): Character {
  return {
    id: obj.id,
    name: obj.name,
    status: obj.status,
    species: obj.species,
    type: obj.type,
    gender: obj.gender,
    origin: obj.origin,
    location: obj.location,
    image: obj.image,
    episode: obj.episode
  };
}

protected objToLocation(obj: any): Location {
  return {
    id: obj.id,
    name: obj.name,
    type: obj.type,
    dimension: obj.dimension,
    residents: obj.residents
  };
}

protected objToEpisode(obj: any): Episode {
  return {
    id: obj.id,
    name: obj.name,
    air_date: obj.air_date,
    episode: obj.episode,
    characters: obj.characters
  };
}
}