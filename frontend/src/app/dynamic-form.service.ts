// src/services/dynamic-form.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from './environments/environment';
import { Resumes } from './models/Resumes';

@Injectable({
  providedIn: 'root',
})
export class DynamicFormService {
  private apiUrl = environment.api_base_url + '/api/resumes';

  constructor(private http: HttpClient) {}

  fetchFieldNames(section: string): Observable<any> {
    return this.http.get<Resumes>(this.apiUrl);
  }

  saveFormData(formData: any, section: string): Observable<any> {
    // Adjust the endpoint based on your API
    const saveUrl = `${this.apiUrl}/${section}/save`; 

    return this.http.post(saveUrl, formData);
  }
}
