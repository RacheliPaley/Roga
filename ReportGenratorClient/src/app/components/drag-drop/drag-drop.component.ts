import { Component, ElementRef, ViewChild } from '@angular/core';

import ControlTypesModel from 'src/app/models/controlTypesModel';
import { ControlService } from 'src/app/services/control.service';
import * as pdfMake from "pdfmake/build/pdfmake";
import * as pdfFonts from "pdfmake/build/vfs_fonts";
import { ReportService } from 'src/app/services/report.service';
import ReportControlsModel from 'src/app/models/reportControlModel';
import * as html2pdf from 'html2pdf.js'
import * as $ from 'jquery';
import * as htmlToPdfmake from 'html-to-pdfmake';

// const htmlToPdfmake = require("html-to-pdfmake");

@Component({
  selector: 'app-drag-drop',
  templateUrl: './drag-drop.component.html',
  styleUrls: ['./drag-drop.component.css']
})
export class DragDropComponent {
  availableControls: ControlService | any;
  selectedControls: ReportControlsModel[] | any;
  draggedControl: ReportControlsModel | any | null;
  controlsServiceL: ControlService | any

  constructor(public controlsService: ControlService, public reportService: ReportService) { }

  ngOnInit() {
    // this.availableControls = this.controlsService.ControlsList
    // console.log(this.availableControls)
    this.selectedControls = [];

    this.controlsService.getControls()
      .then((value) => {
        this.availableControls = value;
      })
      .catch((reason) => {
        console.log(reason);
        console.log('eror')
      })
  }

  dragStart(control: ReportControlsModel) {
    this.draggedControl = control;
  }

  drop() {
    if (this.draggedControl) {
      let draggedControlIndex = this.findIndex(this.draggedControl);
      // this.selectedControls = [
      //   ...(this.selectedControls as ReportControlsModel[]),
      //   this.draggedControl,
      // ];
      this.selectedControls.push(this.draggedControl);

      // this.reportService.report.reportControlList = this.selectedControls;
      this.controlsService = this.availableControls?.filter(
        (val: any, i: number) => i != draggedControlIndex
      );
      this.draggedControl = null;
    }
  }

  dragEnd() {
    this.draggedControl = null;
  }

  findIndex(control: ReportControlsModel) {
    let index = -1;
    for (let i = 0; i < (this.availableControls as Component[]).length;
      i++) {
      if (
        control.Id === (this.availableControls as
          ReportControlsModel[])[i].Id
      ) {
        index = i;
        break;
      }
    }
    return index;
  }

  @ViewChild('divToExport') divToExport!: ElementRef;
  public exportPDF() {
    const divToExport = this.divToExport.nativeElement;

    // Convert the HTML content to pdfmake-compatible JSON
    const pdfmakeContent = htmlToPdfmake(divToExport.innerHTML);

    // Define the font definition
    const fontDefinition = {
      'DejaVu Sans Hebrew': {
        normal: 'DejaVuSans.ttf',  // Replace with the actual font file name and path
        bold: 'DejaVuSans-Bold.ttf',  // Replace with the actual bold font file if needed
        italics: 'DejaVuSans-Oblique.ttf',  // Replace with the actual italics font file if needed
        bolditalics: 'DejaVuSans-BoldOblique.ttf',  // Replace with the actual bold italics font file if needed
      }
    };

    // Define the document definition for pdfmake
    const documentDefinition = {
      content: pdfmakeContent,
      defaultStyle: {
        font: 'DejaVu Sans Hebrew'  // Specify the font name that matches the font definition
      },
      fonts: fontDefinition  // Add the font definition to the document definition
    };

    // Generate and download the PDF
    pdfMake.createPdf(documentDefinition)

  }
  exportPdf() {
    debugger;
    var html = $("#docsToPdf").html();
    var options = {
      pagesplit: true
    };
    html2pdf().from(html).set(options).save('report');
  }
}
