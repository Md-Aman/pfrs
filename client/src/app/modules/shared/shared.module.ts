import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MessageDialogComponent } from './message-dialog/message-dialog.component';
import { FormDialogComponent } from './form-dialog/form-dialog.component';
import { NgBootstrapFormValidationModule } from 'ng-bootstrap-form-validation';

import { NgxPaginationModule } from 'ngx-pagination';
import { NgxSmartModalModule } from 'ngx-smart-modal';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    MessageDialogComponent,
    FormDialogComponent
  ],
  imports: [
    CommonModule,
    NgxPaginationModule,
    NgBootstrapFormValidationModule,
    NgxSmartModalModule.forRoot(),
    NgxDatatableModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports:[
    NgxSmartModalModule,
    NgxPaginationModule,
    NgxDatatableModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class SharedModule { }
