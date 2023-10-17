import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersComponent } from './users/users.component';
import { AddUserComponent } from './add-user/add-user.component';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { ReactiveFormsModule } from '@angular/forms';
import { MatTableModule } from '@angular/material/table';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { UsersRoutingModule } from './users-routing.module';
import { MatDialogModule } from '@angular/material/dialog'
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatListModule } from '@angular/material/list';
import { MatPaginatorModule } from '@angular/material/paginator';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { MatSortModule } from '@angular/material/sort';
import { EditUserComponent } from './edit-user/edit-user.component';


@NgModule({
  declarations: [
    UsersComponent,
    AddUserComponent,
    EmployeeListComponent,
    EditUserComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    MatTableModule,
    MatCardModule,
    MatToolbarModule,
    MatIconModule,
    UsersRoutingModule,
    MatDialogModule,
    MatAutocompleteModule,
    MatListModule,
    MatPaginatorModule,
    MatSortModule
  ],
  exports: [
    UsersComponent,
    AddUserComponent
  ]
})
export class UsersModule { }
