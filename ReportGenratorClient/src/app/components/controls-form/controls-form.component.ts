import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import ControlTextModel from 'src/app/models/controlTextModel';
import FontsTypesModel from 'src/app/models/fontsTypesModel';
import ReportControlsModel from 'src/app/models/reportControlModel';
import { FontsTypeService } from 'src/app/services/fonts-type.service';
import { ReportService } from 'src/app/services/report.service';

@Component({
  selector: 'app-controls-form',
  templateUrl: './controls-form.component.html',
  styleUrls: ['./controls-form.component.css']
})
export class ControlsFormComponent {

  fonts: FontsTypesModel[] | undefined
  myReport = this.reportService.report;
  myControlsReport = this.myReport?.reportControlList;

  checkoutForm = {
    Width: '',
    Height: '',
    Color: "red",
    UnderLined: false,
    Italic: false,
    Bold: false,
    Size: 4,
    SelectedFont: { Id: 1, Name: 'Arial' }

  };

  constructor(
    public reportService: ReportService,
    public fontTypeService: FontsTypeService,
    public formBuilder: FormBuilder,
  ) { }

  ngOnInit() {
    this.fonts = this.fontTypeService.fontsTypeList

  }

  onSubmit(): void {
    // Process checkout data here
    // this.myReport = this.reportService.clearCart();
    // console.warn('Your order has been submitted', this.checkoutForm.value);
    // this.checkoutForm.reset();
    var reportControl = new ReportControlsModel(1, 1, 1, null, 10, 10, new ControlTextModel(1, this.checkoutForm.Size,
      this.checkoutForm.Bold, this.checkoutForm.Italic, this.checkoutForm.UnderLined, this.checkoutForm.Color, this.checkoutForm.SelectedFont), null, null)
    this.myReport.reportControlList.push(reportControl);
    console.log(this.checkoutForm)

  }
}
