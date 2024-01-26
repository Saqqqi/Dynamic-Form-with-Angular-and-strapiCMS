// resume-form.component.ts
import { Component, OnInit } from '@angular/core';
import { DynamicFormService } from 'src/app/dynamic-form.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { DynamicFieldDetail } from '../../models/Resumes'; // Update the path accordingly

@Component({
  selector: 'app-resume-form',
  templateUrl: './resume-form.component.html',
  styleUrls: ['./resume-form.component.css']
})
export class ResumeFormComponent implements OnInit {
  dynamicForm: FormGroup = this.fb.group({});
  experienceFields: DynamicFieldDetail[] = [];

  constructor(
    private dynamicFormService: DynamicFormService,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.fetchExperienceFields();
    this.createDynamicForm('Education', 'education');
  }
  
  private fetchExperienceFields(): void {
    this.dynamicFormService.fetchFieldNames('Experience').subscribe(
      (response: any) => {
        console.log('API Response:', response);
  
        this.experienceFields = response?.data[0]?.attributes.Experience || [];
        console.log(`Fields for Experience:`, this.experienceFields.map(field => field.title));
  
        if (this.experienceFields && this.experienceFields.length > 0) {
          // Now, you can use 'this.experienceFields' to create your dynamic form controls
        }
      },
      (error: any) => {
        console.error('Error fetching Experience fields:', error);
      }
    );
  }
  
  private createDynamicForm(section: string, formGroupName: string): void {
    // Your existing code for creating dynamic forms
    // ...
  }
  onSubmit(): void {
    console.log('Form data submitted:', this.dynamicForm.value);
    
    // Uncomment and customize the following block based on your API integration
    /*
    this.dynamicFormService.saveFormData(this.dynamicForm.value, 'Experience').subscribe(
      (response: any) => {
        // Handle the response from Strapi if needed
        console.log('Response from Strapi:', response);
    
        // Close the form or perform other actions on successful submission
      },
      (error: any) => {
        // Handle the error
        console.error('Error from Strapi:', error);
      }
    );
    */
  }
}
