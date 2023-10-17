import { AfterViewInit, CUSTOM_ELEMENTS_SCHEMA, Component, OnDestroy, OnInit, ViewChild, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSort, MatSortModule, Sort } from '@angular/material/sort';
import { MatTableModule, MatTableDataSource } from '@angular/material/table';
import {MatPaginator, MatPaginatorModule, PageEvent} from '@angular/material/paginator';
import { DialogService } from 'src/app/services/dialog.service';
import { IConfirmDialogData } from 'src/app/dialogs/models/confirm-dialog-data';
import { Subscription } from 'rxjs';
import { UsersService } from 'src/app/services/users.service';


@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit, OnDestroy {

  length = 50;
  pageSize = 10;
  pageIndex = 0;
  pageSizeOptions = [5, 10, 25];

  hidePageSize = false;
  showPageSizeOptions = true;
  showFirstLastButtons = true;

  @ViewChild(MatPaginator) paginator!: MatPaginator

  //users: any[] = [];
  users!: MatTableDataSource<any>;
  displayedColumns: string[] =['firstName', 'email', 'mobileNumber', 'designation', 'department', 'status', 'action'];
  private usersSubscription!: Subscription;
  

  constructor(private usersService: UsersService, private dialogService: DialogService) { }

  ngOnInit() {
    this.usersSubscription = this.usersService.getUsers().subscribe((users: any) => {
      this.users = new MatTableDataSource(users);
      this.users.paginator = this.paginator;
    });
  }

  // openDialog() {
  //   this.dialogService.openDialog();
  // }

  openStatusPopup(){
    
  }

  onSort(event: Sort) {

  }

  onFilter(event: any) {
    this.users.filter = event.target.value
  }

  ngOnDestroy(): void {
    this.usersSubscription.unsubscribe();
  }

}
