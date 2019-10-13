import { Injectable } from '@angular/core';
import { HttpClient , HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import { ApplicationData } from '../model/ApplicationData';
import { CCAgenda } from '../model/CCAgenda'; 
import { CCApproval } from '../model/CCApproval';  

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
}

@Injectable({
  providedIn: 'root'
})
export class DataService {

  dataUrl: string = 'http://localhost:8080';

  applicationDataURI: string = '/getApplicationData';
  ccApprovalURI: string = '/receiveCCApproval';
  ccAgenda: string = '/getCCAgenda';

  constructor(private http: HttpClient) { }

  getApplicationData(request: any): Observable<string>
  {
    return this.http.post<string>(this.dataUrl+this.applicationDataURI,request, httpOptions);
  }

  getCCApproval(request: any): Observable<string>
  {
    return this.http.post<string>(this.dataUrl+this.ccApprovalURI,request, httpOptions);
  }

  getCCAgenda(): Observable<string>
  {
    return this.http.get<string>(this.dataUrl+this.ccAgenda);
  }

}
