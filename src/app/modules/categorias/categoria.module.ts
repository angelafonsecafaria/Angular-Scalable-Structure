import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CategoriaRoutingModule } from './categoria-routing.module';
import { CategoriaService } from './categoria.service';
import { ListComponent } from './list/list.component';

@NgModule({
  declarations: [ListComponent],
  imports: [
    CommonModule,
    CategoriaRoutingModule
  ],
  providers: [CategoriaService],
  exports: [ListComponent]
})
export class CategoriaModule {}
