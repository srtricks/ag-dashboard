import { NgModule } from '@angular/core';
import { CommonModule, AsyncPipe } from '@angular/common';

import { TemplateRoutingModule } from './template-routing.module';
import { ListComponent } from './pages';

import { MatStepperModule } from '@angular/material/stepper';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { provideNativeDateAdapter } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatListModule } from '@angular/material/list';

@NgModule({
  declarations: [ListComponent],
  imports: [
    CommonModule,
    AsyncPipe,
    TemplateRoutingModule,
    MatStepperModule,
    MatTableModule,
    MatPaginator,
    MatPaginatorModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatIconModule,
    MatSelectModule,
    MatTooltipModule,
    MatListModule,
  ],
  providers: [provideNativeDateAdapter()],
})
export class TemplateModule {}
