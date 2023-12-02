import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { ModalComponent } from './components/modal.component';

@NgModule({
  declarations: [
    ModalComponent
  ],
  imports: [
    HttpClientModule
  ],
  exports: [
    ModalComponent
  ]
})
export class ModalModule { }
