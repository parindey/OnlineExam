// import { Injectable } from '@angular/core';

// @Injectable({
//   providedIn: 'root'
// })
// export class ReportService {

//   constructor() { }
// }

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Report } from '../appmodel/report';

@Injectable({
  providedIn: 'root'
})
export class ReportService {
  constructor(private http: HttpClient) { }

  report(userid:any) : Observable<any> {
    let url = "http://localhost:8082/report/user-restapi/report/"+userid;
   return this.http.get<Report[]>(url);
  }
}

