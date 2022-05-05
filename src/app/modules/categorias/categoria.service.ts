import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Categoria } from 'src/app/core/models/categorias/categoria.model';
import { CategoriaHttpService } from 'src/app/core/services/categorias/categoria-http.service';

@Injectable({ providedIn: 'root' })

export class CategoriaService {

  constructor(private readonly categoriaHttpService: CategoriaHttpService){}

  getCategorias():Observable<Array<Categoria>>{
    return this.categoriaHttpService.getCategorias();
  }
}
