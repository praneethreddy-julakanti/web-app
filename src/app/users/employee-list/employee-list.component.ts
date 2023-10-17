import { Component, AfterViewInit, ViewChild, inject } from '@angular/core';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { MatSort, Sort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { DialogService } from 'src/app/services/dialog.service';
import { IConfirmDialogData } from 'src/app/dialogs/models/confirm-dialog-data';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.scss'],
})
export class EmployeeListComponent implements AfterViewInit {
  displayedColumns: string[] = ['fullname', 'email', 'personalcontactnumber', 'designation', 'department', 'status', 'action'];
  dataSource = new MatTableDataSource<any>([]);
  users: any[] = [];

  length = 50;
  pageSize = 10;
  pageIndex = 0;
  pageSizeOptions = [5, 10, 25];

  hidePageSize = false;
  showPageSizeOptions = true;
  showFirstLastButtons = true;

  pageEvent!: PageEvent;
  @ViewChild(MatSort) sort!: MatSort;
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private dialogServ: DialogService, private usersService: UsersService) { }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.usersService.getUsers().subscribe(users => {
      this.dataSource.data = users;
    });
  }

  onSort(event: Sort) {
    // Handle sorting logic here
  }

  onFilter(event: any) {
    this.dataSource.filter = event.target.value;
  }

  addEmployee() {
    const dataToBeSentToDialog: IConfirmDialogData = {
      title: 'Confirmation',
      message: 'Are you sure?',
      confirmText: 'Yes',
      cancelText: 'No',
    };
    this.dialogServ.openDialogWithComponent(dataToBeSentToDialog);
  }

  handlePageEvent(e: PageEvent) {
    this.pageEvent = e;
    this.length = e.length;
    this.pageSize = e.pageSize;
    this.pageIndex = e.pageIndex;
  }
}
