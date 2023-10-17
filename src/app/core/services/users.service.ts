import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private users: any[] = [
    {
      firstName: 'John',
      lastName: 'Doe',
      email: 'johndoe@example.com',
      mobileNumber: '123-456-7890',
      designation: 'Senior Engineer',
      department: 'it',
      role: 'manager',
      status: 'Active',
    },
    {
      firstName: 'Jane',
      lastName: 'Smith',
      email: 'janesmith@example.com',
      mobileNumber: '987-654-3210',
      designation: 'HR Manager',
      department: 'hr',
      role: 'manager',
      status: 'Active',
    },
    {
      firstName: 'Mike',
      lastName: 'Johnson',
      email: 'mikejohnson@example.com',
      mobileNumber: '555-555-5555',
      designation: 'Software Developer',
      department: 'it',
      role: 'developer',
      status: 'Active',
    },
    {
      firstName: 'Sara',
      lastName: 'Williams',
      email: 'sarawilliams@example.com',
      mobileNumber: '777-777-7777',
      designation: 'Sales Director',
      department: 'sales',
      role: 'manager',
      status: 'Inactive',
    },
    {
      firstName: 'Emily',
      lastName: 'Brown',
      email: 'emilybrown@example.com',
      mobileNumber: '444-444-4444',
      designation: 'Sales Representative',
      department: 'sales',
      role: 'salesperson',
      status: 'Inactive',
    },
    {
      firstName: 'David',
      lastName: 'Lee',
      email: 'davidlee@example.com',
      mobileNumber: '222-222-2222',
      designation: 'Software Engineer',
      department: 'it',
      role: 'developer',
      status: 'Active',
    },
    {
      firstName: 'Alice',
      lastName: 'Clark',
      email: 'aliceclark@example.com',
      mobileNumber: '999-999-9999',
      designation: 'HR Specialist',
      department: 'hr',
      role: 'manager',
      status: 'Active',
    },
    {
      firstName: 'Chris',
      lastName: 'Taylor',
      email: 'christaylor@example.com',
      mobileNumber: '333-333-3333',
      designation: 'Sales Manager',
      department: 'sales',
      role: 'manager',
      status: 'Active',
    },
    {
      firstName: 'Eva',
      lastName: 'Miller',
      email: 'evamiller@example.com',
      mobileNumber: '666-666-6666',
      designation: 'Software Developer',
      department: 'it',
      role: 'developer',
      status: 'Active',
    },
    {
      firstName: 'Tom',
      lastName: 'Anderson',
      email: 'tomanderson@example.com',
      mobileNumber: '111-111-1111',
      designation: 'Sales Representative',
      department: 'sales',
      role: 'salesperson',
      status: 'Active',
    },
    {
      firstName: 'Jane',
      lastName: 'Smith',
      email: 'janesmith@example.com',
      mobileNumber: '987-654-3210',
      designation: 'HR Manager',
      department: 'hr',
      role: 'manager',
      status: 'Inactive',
    }
  ];
  private usersSubject = new BehaviorSubject<any[]>(this.users);

  constructor() { }

  getUsers(): Observable<any[]> {
    return this.usersSubject.asObservable();
  }

  addUser(user: any) {
    this.users.push(user);
    this.usersSubject.next([...this.users]);
    console.log(this.users);
  }

}
