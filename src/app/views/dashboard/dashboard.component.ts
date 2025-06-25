import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule, MatTableDataSource } from '@angular/material/table';
import { SelectionModel } from '@angular/cdk/collections';
import { MatCheckboxModule } from '@angular/material/checkbox';

import { RouterLink } from '@angular/router';

export interface PeriodicElement {
  packageTitle: string;
  status: string;
  createdBy: string;
  createdOn: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {
    packageTitle: 'Sample Package 1',
    status: 'In Progress',
    createdBy: 'Leigh Dickinson',
    createdOn: 'Apr 18, 2025',
  },
  {
    packageTitle: 'Sample Package 2',
    status: 'Rejected',
    createdBy: 'Akash Parmar',
    createdOn: 'Apr 7, 2025',
  },
  {
    packageTitle: 'Sample Package 3',
    status: 'Completed',
    createdBy: 'Suresh Lakum',
    createdOn: 'Apr 22, 2025',
  },
  {
    packageTitle: 'Sample Package 4',
    status: 'Pending',
    createdBy: 'Sandip Lakum',
    createdOn: 'Apr 5, 2025',
  },
  {
    packageTitle: 'Sample Package 5',
    status: 'In Progress',
    createdBy: 'Jiten Vaghela',
    createdOn: 'Apr 10, 2025',
  },
];

interface todos {
  id: number;
  name: string;
  username: string;
  email: string;
}

@Component({
  templateUrl: 'dashboard.component.html',
  styleUrls: ['dashboard.component.scss'],
  imports: [
    CommonModule,
    FormsModule,
    MatButtonModule,
    MatMenuModule,
    RouterLink,
    MatCheckboxModule,
    MatTableModule,
  ],
})
export class DashboardComponent {
  todoList: any[] = [];
  selectedTodo!: todos;

  products: any[] = [
    {
      packageTitle: 'Sample Package 1',
      status: 'In Progress',
      createdBy: 'Leigh Dickinson',
      createdOn: 'Apr 18, 2025',
    },
    {
      packageTitle: 'Sample Package 2',
      status: 'Rejected',
      createdBy: 'Akash Parmar',
      createdOn: 'Apr 7, 2025',
    },
    {
      packageTitle: 'Sample Package 3',
      status: 'Completed',
      createdBy: 'Suresh Lakum',
      createdOn: 'Apr 22, 2025',
    },
    {
      packageTitle: 'Sample Package 4',
      status: 'Pending',
      createdBy: 'Sandip Lakum',
      createdOn: 'Apr 5, 2025',
    },
    {
      packageTitle: 'Sample Package 5',
      status: 'In Progress',
      createdBy: 'Jiten Vaghela',
      createdOn: 'Apr 10, 2025',
    },
  ];

  displayedColumns: string[] = [
    'select',
    'packageTitle',
    'status',
    'createdBy',
    'createdOn',
    'action',
  ];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);
  selection = new SelectionModel<PeriodicElement>(true, []);

  /** Whether the number of selected elements matches the total number of rows. */
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  masterToggle() {
    this.isAllSelected()
      ? this.selection.clear()
      : this.dataSource.data.forEach((row) => this.selection.select(row));
  }
}
