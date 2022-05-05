import { HttpClientModule } from "@angular/common/http";
import { inject, TestBed } from "@angular/core/testing";
import { Categoria } from "src/app/core/models/categorias/categoria.model";
import { CategoriaHttpService } from "src/app/core/services/categorias/categoria-http.service";
import { CategoriaService } from "src/app/modules/categorias/categoria.service";

describe('Service: CategoriaService', () => {
    let service: CategoriaService;
    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [HttpClientModule],
            providers: [CategoriaHttpService]
        });
        service = TestBed.inject(CategoriaService);
    });

    it('Deve recuperar as categorias de CategoriaHttpService', () => {
        service.getCategorias()
            .subscribe((categoria: Array<Categoria>) => {
                expect(categoria).toBeTruthy();
            });
    });
});