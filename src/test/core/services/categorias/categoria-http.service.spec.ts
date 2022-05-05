import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { Categoria } from 'src/app/core/models/categorias/categoria.model';
import { CategoriaHttpService } from 'src/app/core/services/categorias/categoria-http.service';

describe('Service: CategoriaHttpService', () => {
    let service: CategoriaHttpService;
    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [HttpClientModule],
            providers: [CategoriaHttpService]
        });
        service = TestBed.inject(CategoriaHttpService);
    });

    it('Deve recuperar as categorias da API via GET', () => {
        service.getCategorias()
            .subscribe((categoria: Array<Categoria>) => {
                expect(categoria).toBeTruthy();
            });
    });

});