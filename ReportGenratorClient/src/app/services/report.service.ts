import { Injectable } from '@angular/core';
import ReportModel from '../models/reportModel';

@Injectable({
  providedIn: 'root'
})
export class ReportService {

   report:ReportModel | any;
  constructor() { }
}
