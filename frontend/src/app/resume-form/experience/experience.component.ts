// experience.component.ts
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ModalComponent } from '../modal/modal.component';
import { DynamicFormService } from '../../dynamic-form.service';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent implements OnInit {
  experienceFields: string[] = [];

  constructor(private dialog: MatDialog, private dynamicFormService: DynamicFormService) {}

  ngOnInit(): void {
    this.fetchExperienceFields();
  }

  fetchExperienceFields(): void {
    this.dynamicFormService.fetchFieldNames('Experience').subscribe((fields: string[]) => {
      this.experienceFields = fields;
      console.log('Fields for Experience:', this.experienceFields);
    });
  }

  openModal() {
    const dialogRef = this.dialog.open(ModalComponent, {
      width: '400px',
      data: { section: 'Experience', fields: this.experienceFields },
    });

    dialogRef.afterClosed().subscribe(result => {
      // Handle the result if needed
      console.log('The dialog was closed with result:', result);
    });
  }
}
