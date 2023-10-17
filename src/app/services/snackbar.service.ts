import { Injectable } from '@angular/core';
import { MatSnackBar, MatSnackBarConfig  } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class SnackbarService {

  constructor(private snackBar: MatSnackBar) { }

  showSnackBar(message: string, panelClass: string[], duration = 2000) {
    const config = new MatSnackBarConfig();
    config.panelClass = panelClass; 
    config.verticalPosition = 'top'; 
    config.horizontalPosition = 'right'
    config.duration = duration;
    this.snackBar.open(message, 'Close', config);
  }

}
