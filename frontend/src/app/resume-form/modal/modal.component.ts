import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { FormBuilder, FormGroup } from '@angular/forms';
import { DynamicFieldDetail } from 'src/app/models/Resumes';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {
  dynamicForm!: FormGroup;
  dynamicFields: DynamicFieldDetail[] = []; // Assuming DynamicFieldDetail is the correct type

  constructor(
    public dialogRef: MatDialogRef<ModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { section: string, fields: string[] },
    private fb: FormBuilder,
    // private dynamicFormService: DynamicFormService 
  ) {}

  ngOnInit(): void {
    // Assuming your dynamicFields property is of type DynamicFieldDetail[]
    this.dynamicFields = this.data.fields.map(field => ({ id: 0, title: field }));
    console.log('Dynamic Fields:', this.dynamicFields);
    this.createDynamicForm();
  }

  private createDynamicForm(): void {
    const formGroupConfig: { [key: string]: any } = {};

    if (Array.isArray(this.dynamicFields)) {
      this.dynamicFields.forEach(field => {
        formGroupConfig[field.title] = [''];
      });
    }

    this.dynamicForm = this.fb.group(formGroupConfig);
  }

  onSubmit(): void {
    console.log('Form data submitted:', this.dynamicForm.value);
    // Handle form submission as needed
    // ...
  }

  onCancelClick(): void {
    this.dialogRef.close();
  }
}
