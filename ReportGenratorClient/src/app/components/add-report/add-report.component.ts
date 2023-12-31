import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import ReportControlsModel from 'src/app/models/reportControlModel';
import ReportModel from 'src/app/models/reportModel';
import { ReportService } from 'src/app/services/report.service';

@Component({
  selector: 'app-add-report',
  templateUrl: './add-report.component.html',
  styleUrls: ['./add-report.component.css']
})

export class AddReportComponent {
  public form:FormGroup;
  public reportName:string;
  constructor(public router: Router, public reportService: ReportService, fb:FormBuilder) { 
    this.form = fb.group({
      reportName:[null , Validators.required]
    })}
  addReport() {
    var reportCcontrolList: ReportControlsModel[]
    this.reportService.report = new ReportModel(1, this.reportName, 1, 1, new Date(), reportCcontrolList);

    this.router.navigate(["/report"]);
  }
}
