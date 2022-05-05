import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, inject, TestBed } from '@angular/core/testing';
import { CategoriaService } from 'src/app/modules/categorias/categoria.service';
import { ListComponent } from 'src/app/modules/categorias/list/list.component';


describe('Categoria: ListComponent', () => {

  let component: ListComponent;
  let fixture: ComponentFixture<ListComponent>;
  let service: CategoriaService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListComponent],
      imports: [HttpClientModule], 
      providers: [{ provide: CategoriaService }],
    });

    fixture = TestBed.createComponent(ListComponent);
    component = fixture.componentInstance;
    service = TestBed.inject(CategoriaService);
    fixture.detectChanges();
  });

  it('Deve carregar as categorias no componente', () => {
    spyOn(service, 'getCategorias')
      .and
      .callThrough();
    component.ngOnInit();
    fixture.detectChanges();
  });
});
