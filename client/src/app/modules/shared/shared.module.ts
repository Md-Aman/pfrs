import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MessageDialogComponent } from './message-dialog/message-dialog.component';
import { FormDialogComponent } from './form-dialog/form-dialog.component';
import { NgBootstrapFormValidationModule } from 'ng-bootstrap-form-validation';

@NgModule({
  declarations: [
    MessageDialogComponent,
    FormDialogComponent,
  ],
  imports: [
    CommonModule,
    NgBootstrapFormValidationModule
  ]
})
export class SharedModule { }
