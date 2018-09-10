import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Pastas} from './models/pastas.model';

@Injectable({
  providedIn: 'root'
})
export class PastaService {

  constructor(
    readonly http: HttpClient,
  ) {}

  getPastas(): Observable<Pastas[]> {
    return this.http.get<Pastas[]>('http://localhost:3000/pastas');
  }

  getPasta(id: number): Observable<Pastas> {
    return this.http.get<Pastas>(`http://localhost:3000/pastas/${id}`);
  }

  deletePasta(id: number): Observable<void> {
    return this.http.delete<void>(`http://localhost:3000/pastas/${id}`);
  }
}
