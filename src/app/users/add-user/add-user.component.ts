import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormControl, FormGroup } from '@angular/forms';
import { UsersService } from 'src/app/services/users.service';
import { Router } from '@angular/router';
import { Observable, map, startWith } from 'rxjs';
import { SnackbarService } from 'src/app/services/snackbar.service';
import { DialogService } from 'src/app/services/dialog.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss']
})
export class AddUserComponent implements OnInit {

  departmentOptions: string[] = ['Administration', 'Recruiting', 'Bench Sales', 'Sourcing', 'Accounts'];

  roleOptions: string[] = ['Super Admin', 'Admin', 'Manager', 'Team Lead', 'Employee'];

  managerOptions: string[] = ['John Smith', 'Sarah Johnson', 'David Anderson'];

  teamLeadOptions: string[] = ["Alice", "Bob", "Charlie", "David", "Eva"];

  filteredDepartmentOptions: Observable<string[]>;
  filteredRoleOptions: Observable<string[]>;
  filteredManagerOptions: Observable<string[]>;
  filteredTeamLeadOptions: Observable<string[]>;

  private _filterOptions(value: string, options: string[]): string[] {
    const filterValue = value.toLowerCase();
    return options.filter(option => option.toLowerCase().includes(filterValue));
  }

  form = this.formBuilder.group({
    fullname: ['', Validators.required],
    pseudoname: [''],
    email: ['', [Validators.required, Validators.email]],
    personalcontactnumber: ['', Validators.required],
    companycontactnumber: [],
    designation: [],
    department: ['', Validators.required],
    role: ['', Validators.required],
    manager: ['', Validators.required],
    teamlead: ['', Validators.required]
  });


  constructor(private formBuilder: FormBuilder, private usersService: UsersService, private snackBar: SnackbarService, private router: Router) {

    this.filteredDepartmentOptions = this.form.controls.department.valueChanges.pipe(
      startWith(''),
      map(value => this._filterOptions(value || '', this.departmentOptions))
    );

    this.filteredRoleOptions = this.form.controls.role.valueChanges.pipe(
      startWith(''),
      map(value => this._filterOptions(value || '', this.roleOptions))
    );

    this.filteredManagerOptions = this.form.controls.manager.valueChanges.pipe(
      startWith(''),
      map(value => this._filterOptions(value || '', this.managerOptions))
    );

    this.filteredTeamLeadOptions = this.form.controls.teamlead.valueChanges.pipe(
      startWith(''),
      map(value => this._filterOptions(value || '', this.teamLeadOptions))
    );
  }

  ngOnInit(): void {
  }

  onSubmit() {
    if (this.form.valid) {
      this.usersService.addUser(this.form.value);
      this.snackBar.showSnackBar('New User Added', ['green-snackbar']);
      this.router.navigate(['../usit/employees/users']);
      this.form.reset();
    }
  }
}
