
import { animate, keyframes, state, style, transition, trigger } from '@angular/animations';
import {    Component, OnInit, inject } from '@angular/core'
import { MatSnackBar, MatSnackBarRef } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
const keyFrames = [
  style({ transform: 'rotate(0deg)', offset: '0'}),
  style({ transform: 'rotate(1turn)', offset: '1'})
];
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
  animations: [
    trigger("rotate", [

      transition("* => close", [
        animate('1500ms', keyframes(keyFrames))
      ])
    ]),
  ]
})
export class SidebarComponent implements OnInit {
  private snaclBar = inject(MatSnackBar)

  private router = inject(Router);
  ngOnInit() { }

  onSignOut(){
   this.snaclBar.open("You have Signed out!", "Dismiss");
    this.router.navigate(["login"])
  }
}
