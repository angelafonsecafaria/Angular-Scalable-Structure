import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/dev/environment.dev';
import { Categoria } from '../../models/categorias/categoria.model';

@Injectable({ providedIn: 'root' })

export class CategoriaHttpService {
  private readonly apiUrl: string = environment.apiUrl;
  private readonly version: number = 1;

  constructor(private readonly http: HttpClient) { }

  getCategorias(): Observable<Array<Categoria>> {
    return this.http.get<Array<Categoria>>(`${environment.apiUrl}/v${this.version}/categories`);
  }
}
