import { Injectable } from '@angular/core';
import { environment } from '../environment/environment';
import Tables from '../models/tablesModel';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class ChoicetableService {
  listTable = [
    {Id:1, Name:'marks'},
    {Id:2, Name:'s'},
    {Id:3, Name:'g'}
];
baseRouteUrl = `${environment.baseUrl}/Tables`;
  // listFieldInTable: import("c:/Users/User/Documents/more21/בחירת טבלה ושדות ללא הנוד מודולס/src/app/Models/FieldInTable").default[];
constructor(public http: HttpClient) { }
getAll() {
  return this.http.get<Tables[]>(this.baseRouteUrl);
}
}

