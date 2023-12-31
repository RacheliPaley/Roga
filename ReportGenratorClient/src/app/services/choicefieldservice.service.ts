import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
// import { environment } from '../environment/environment';

import FieldInTable from '../models/FieldInTableModel';
import { environment } from '../environment/environment';

@Injectable({
   providedIn: 'root'
})
export class choicefieldservice{
   listFieldInTable = [
      {Id:1, Name:'98',DataType:5,TableId:1,FieldNameInDb: 'marks'},
      {Id:2, Name:'85',DataType:4,TableId:1,FieldNameInDb: 'marks'},
      {Id:3, Name:'65',DataType:3,TableId:1,FieldNameInDb: 'marks'}
  ];


baseRouteUrl = `${environment.baseUrl}/Fields`;
constructor(public http: HttpClient) { }
getById(id:number) {
   return this.http.get<FieldInTable[]>(`${this.baseRouteUrl}/GetById/${id}`);
 }
 getAll() {
   return this.http.get<FieldInTable[]>(this.baseRouteUrl);
 }

}
