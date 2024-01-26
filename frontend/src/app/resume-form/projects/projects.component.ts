// projects.component.ts
import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ModalComponent } from '../modal/modal.component';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent {
  constructor(private dialog: MatDialog) {}

  openModal() {
    const dialogRef = this.dialog.open(ModalComponent, {
      width: '400px',
      data: { section: 'projects' },
       // Pass the section type
    });

    dialogRef.afterClosed().subscribe(result => {
      // Handle the result if needed
      console.log('The dialog was closed with result:', result);
    });
  }
}
