import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { finalize, takeUntil } from 'rxjs/operators';
import { Categoria } from '../../../core/models/categorias/categoria.model';
import { CategoriaService } from '../categoria.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  public categorias: Array<Categoria> = [];
  public isLoading: boolean = false;
  private unsubscribeAll: Subject<any>;

  constructor(private readonly categoriaService: CategoriaService) {
    this.unsubscribeAll = new Subject();
  }

  ngOnInit(): void {
    this.getCategorias();
  }

  getCategorias(): void {
    this.isLoading = true;

    this.categoriaService.getCategorias()
      .pipe(takeUntil(this.unsubscribeAll),
        finalize(() => this.isLoading = false))
      .subscribe((categorias: Array<Categoria>) => {
        this.categorias = categorias;
      });
  }


  ngOnDestroy(): void {
    this.unsubscribeAll.next();
    this.unsubscribeAll.complete();
  }

}
