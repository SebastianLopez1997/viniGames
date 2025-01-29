import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable, Observer, map } from 'rxjs';
import { environment } from '../../../../environments/environment.development';

@Injectable({
  providedIn: 'root',
})
export class HarryServicesService {
  personajes = [];

  http = inject(HttpClient);

  getCharacters(number:string): Observable<{ name: string; image: string; species:string }[]> {
    return this.http.get<any>(`${environment.personajes}${number}`).pipe(
      map((response) =>
        response.data.map((char: any) => ({
          name: char.attributes.name,
          image: char.attributes.image,
          species: char.attributes.species,
        }))
      )
    );
  }
  
  
  

  constructor() {}
}
