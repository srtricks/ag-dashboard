import { AfterViewInit, Component, ViewChild } from '@angular/core';

import { BreakpointObserver } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { StepperOrientation } from '@angular/material/stepper';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss',
})
export class ListComponent implements AfterViewInit {
  isExpanded = true;
  showSubmenu: boolean = false;
  isShowing = false;
  showSubSubMenu: boolean = false;
  stepperOrientation: Observable<StepperOrientation>;

  constructor(breakpointObserver: BreakpointObserver) {
    {
      this.stepperOrientation = breakpointObserver
        .observe('(min-width: 800px)')
        .pipe(map(({ matches }) => (matches ? 'horizontal' : 'vertical')));
    }
  }

  displayedColumns: string[] = [
    'id',
    'name',
    'region',
    'modifiedBy',
    'modifiedOn',
    'action',
  ];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  foods: Food[] = [
    { value: '1', viewValue: '1' },
    { value: '2', viewValue: '2' },
    { value: '3', viewValue: '3' },
  ];
}

interface Food {
  value: string;
  viewValue: string;
}

export interface PeriodicElement {
  id: string;
  name: string;
  region: string;
  modifiedBy: string;
  modifiedOn: string;
  action: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {
    id: 'T01',
    name: 'US-FDA-01',
    region: 'USA',
    modifiedBy: 'CuneSoft Support',
    modifiedOn: '01-01-1970',
    action: '',
  },
  {
    id: 'T02',
    name: 'US-FDA-01',
    region: 'USA',
    modifiedBy: 'CuneSoft Support',
    modifiedOn: '01-01-1970',
    action: '',
  },
  {
    id: 'T03',
    name: 'US-FDA-01',
    region: 'USA',
    modifiedBy: 'CuneSoft Support',
    modifiedOn: '01-01-1970',
    action: '',
  },
  {
    id: 'T04',
    name: 'US-FDA-01',
    region: 'USA',
    modifiedBy: 'CuneSoft Support',
    modifiedOn: '01-01-1970',
    action: '',
  },
  {
    id: 'T05',
    name: 'US-FDA-01',
    region: 'USA',
    modifiedBy: 'CuneSoft Support',
    modifiedOn: '01-01-1970',
    action: '',
  },
  {
    id: 'T06',
    name: 'US-FDA-01',
    region: 'USA',
    modifiedBy: 'CuneSoft Support',
    modifiedOn: '01-01-1970',
    action: '',
  },
  {
    id: 'T07',
    name: 'US-FDA-01',
    region: 'USA',
    modifiedBy: 'CuneSoft Support',
    modifiedOn: '01-01-1970',
    action: '',
  },
  {
    id: 'T08',
    name: 'US-FDA-01',
    region: 'USA',
    modifiedBy: 'CuneSoft Support',
    modifiedOn: '01-01-1970',
    action: '',
  },
  {
    id: 'T09',
    name: 'US-FDA-01',
    region: 'USA',
    modifiedBy: 'CuneSoft Support',
    modifiedOn: '01-01-1970',
    action: '',
  },
  {
    id: 'T010',
    name: 'US-FDA-01',
    region: 'USA',
    modifiedBy: 'CuneSoft Support',
    modifiedOn: '01-01-1970',
    action: '',
  },
];
