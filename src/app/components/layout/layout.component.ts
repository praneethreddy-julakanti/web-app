import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { animate, keyframes, style, transition, trigger } from '@angular/animations';
import { SnackbarService } from 'src/app/services/snackbar.service';

const keyFrames = [
  style({ transform: 'rotate(0deg)', offset: '0' }),
  style({ transform: 'rotate(1turn)', offset: '1' })
];

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
  animations: [
    trigger("rotate", [
      transition("* => close", [
        animate('1500ms', keyframes(keyFrames))
      ])
    ]),
  ],
})
export class LayoutComponent implements OnInit {
  isSidebarOpen = false;
  isSubMenuOpen: boolean[] = [];
  menuList: any[] = [];

  constructor(
    private http: HttpClient,
    private snackbar: SnackbarService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.http.get<any>('assets/side-navbar-items.json').subscribe((data) => {
      this.menuList = data;
      this.isSubMenuOpen = new Array(this.menuList.length).fill(false);
    });
  }

  toggleSidenav() {
    this.isSidebarOpen = !this.isSidebarOpen;
  }

  onSignOut() {
    this.snackbar.showSnackBar('You have Signed out!', ['red-snackbar']);
    this.router.navigate(['login']);
  }

  toggleSubMenu(index: number) {
    if (this.isSubMenuOpen[index]) {
      this.isSubMenuOpen[index] = false;
    } else {
      this.isSubMenuOpen = this.isSubMenuOpen.map((_, i) => i === index);
    }
  }
}
