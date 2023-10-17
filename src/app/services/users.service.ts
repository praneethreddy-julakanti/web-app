import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private users: any[] = [
    {
      fullname: 'John Doe',
      email: 'johndoe@example.com',
      personalcontactnumber: '123-456-7890',
      designation: 'Senior Engineer',
      department: 'it',
      role: 'manager',
      status: 'Active',
    },
    {
      fullname: 'Jane Smith',
      email: 'janesmith@example.com',
      personalcontactnumber: '987-654-3210',
      designation: 'HR Manager',
      department: 'hr',
      role: 'manager',
      status: 'Active',
    },
    {
      fullname: 'Mike Johnson',
      email: 'mikejohnson@example.com',
      personalcontactnumber: '555-555-5555',
      designation: 'Software Developer',
      department: 'it',
      role: 'developer',
      status: 'Active',
    },
    {
      fullname: 'Sara Williams',
      email: 'sarawilliams@example.com',
      personalcontactnumber: '777-777-7777',
      designation: 'Sales Director',
      department: 'sales',
      role: 'manager',
      status: 'Inactive',
    },
    {
      fullname: 'Emily Brown',
      email: 'emilybrown@example.com',
      personalcontactnumber: '444-444-4444',
      designation: 'Sales Representative',
      department: 'sales',
      role: 'salesperson',
      status: 'Inactive',
    },
    {
      fullname: 'David Lee',
      email: 'davidlee@example.com',
      personalcontactnumber: '222-222-2222',
      designation: 'Software Engineer',
      department: 'it',
      role: 'developer',
      status: 'Active',
    },
    {
      fullname: 'Alice Clark',
      email: 'aliceclark@example.com',
      personalcontactnumber: '999-999-9999',
      designation: 'HR Specialist',
      department: 'hr',
      role: 'manager',
      status: 'Active',
    },
    {
      fullname: 'Chris Taylor',
      email: 'christaylor@example.com',
      personalcontactnumber: '333-333-3333',
      designation: 'Sales Manager',
      department: 'sales',
      role: 'manager',
      status: 'Active',
    },
    {
      fullname: 'Eva Miller',
      email: 'evamiller@example.com',
      personalcontactnumber: '666-666-6666',
      designation: 'Software Developer',
      department: 'it',
      role: 'developer',
      status: 'Active',
    },
    {
      fullname: 'Tom Anderson',
      email: 'tomanderson@example.com',
      personalcontactnumber: '111-111-1111',
      designation: 'Sales Representative',
      department: 'sales',
      role: 'salesperson',
      status: 'Active',
    },
    {
      fullname: 'Jane Smith',
      email: 'janesmith@example.com',
      personalcontactnumber: '987-654-3210',
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
