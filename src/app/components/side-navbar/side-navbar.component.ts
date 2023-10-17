import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { SnackbarService } from 'src/app/services/snackbar.service';


@Component({
  selector: 'app-side-navbar',
  templateUrl: './side-navbar.component.html',
  styleUrls: ['./side-navbar.component.scss']
})
export class SideNavbarComponent implements OnInit {
  

  isSidebarOpen = false;
  isSubMenuOpen: boolean[] = new Array<any>().fill(false);
  menuList: any[] = [];

  toggleSidebar() {
    this.isSidebarOpen = !this.isSidebarOpen;
  }

  constructor(private http: HttpClient, private snackbar: SnackbarService, private router: Router) { }

  ngOnInit(): void {
    this.http.get<any>('assets/side-navbar-items.json').subscribe(data => {
      this.menuList = data;
    });
  }

  onSignOut(){
    this.snackbar.showSnackBar("You have Signed out!", ['red-snackbar']);
     this.router.navigate(["login"])
   }

  toggleSubMenu(index: number) {
    this.isSubMenuOpen = this.isSubMenuOpen.map((_, i) => i === index);
    this.isSubMenuOpen[index] = !this.isSubMenuOpen[index];
  }



}
