import { Injectable } from '@angular/core';
import ControlTypesModel from '../models/controlTypesModel';
import ReportControlsModel from '../models/reportControlModel';

@Injectable({
  providedIn: 'root'
})
export class ControlService {

  ControlsList: ReportControlsModel[] = [
    { Id: 1, Height: 2, Width: 12, ControlTypeName: "טבלה" },
    { Id: 2, Height: 2, Width: 11, ControlTypeName: "טקסט" }
  ];
  
  draggedControl_arry: ReportControlsModel[] | any ;

  constructor() { }
  getControls(): Promise<ReportControlsModel[]> {
    return new Promise((res, rej) => {
      res(this.ControlsList)
    })
  }
}
