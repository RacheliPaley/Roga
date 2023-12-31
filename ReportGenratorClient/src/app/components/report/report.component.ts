// import { CdkDragDrop, CdkDrag } from '@angular/cdk/drag-drop';
import { Component, ElementRef, ViewChild, HostListener } from '@angular/core';
import { ReportService } from 'src/app/services/report.service';
import * as pdfMake from "pdfmake/build/pdfmake";
import * as pdfFonts from "pdfmake/build/vfs_fonts";

// declare var require: any;

// const htmlToPdfmake = require("html-to-pdfmake");

// (pdfMake as any).vfs = pdfFonts.pdfMake.vfs;

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.css']
})

export class ReportComponent {
  // @ViewChild('divToExport') divToExport!: ElementRef;
  // @ViewChild('listTwoContainer', { static: true }) listTwoContainer!: ElementRef<HTMLElement>;

  // item: string = ""
  // items = ['table', 'input', 'image', 'Three'];
  // editControoler: boolean = false
  // items2;
  // items3 = [];
  // flag: boolean = false

  constructor(
    // public reportService: ReportService,
    // private elementRef: ElementRef
    ) { }

  ngOnInit() {
    // this.resetList();
  }

  // exportPDF() {
  //   const divToExport = this.divToExport.nativeElement;
  //   var html = htmlToPdfmake(divToExport.innerHTML);
  //   const documentDefinition = { content: html };
  //   pdfMake.createPdf(documentDefinition).download();

  // }

  // edit(event: any) {
  //   this.item = event
  //   this.editControoler = true

  // }

  // closeEdit() {
  //   this.editControoler = false
  // }

  // private resetList() {
  //   this.items2 = [];
  //   setTimeout(() => {
  //     this.items2 = this.items.slice();
  //   }, 0);
  // }

  // isAllowed = (drag?: CdkDrag, drop?: any) => {
  //   return false;
  // };

  // f() {
  //   debugger
  //   const element = document.getElementById("your-element-id");
  //   const rect = element.getBoundingClientRect();
  //   console.log("Element position (top, left):", rect.top, rect.left);
  // }

  // addToList(event: CdkDragDrop<string[]>) {
  //   this.flag = true
  //   // Get the drop point coordinates (X and Y)
  //   const dropX = event.dropPoint.x;
  //   const dropY = event.dropPoint.y;
  //   const droppedElement = event.item.element.nativeElement;
  //   const elementRect = droppedElement.getBoundingClientRect();
  //   const x = elementRect.left;
  //   const y = elementRect.top;

  //   // Get the position of the "List Two" container
  //   const listTwoContainerX = this.listTwoContainer.nativeElement.offsetLeft;
  //   const listTwoContainerY = this.listTwoContainer.nativeElement.offsetTop;

  //   // Calculate the relative drop position inside "List Two"
  //   const relativeDropX = dropX - listTwoContainerX;
  //   const relativeDropY = dropY - listTwoContainerY;

  //   // Push the dropped item along with the relative drop position into items3
  //   this.items3.push({
  //     item: this.items2[event.previousIndex],
  //     x: dropX,
  //     y: dropY
  //   });

  //   // Log the values to console for debugging
  //   console.log("Drop Position:", dropX, dropY);
  //   console.log("Element Position:", x, y);
  //   console.log("Relative Drop Position:", relativeDropX, relativeDropY);

  //   // Set the position of the dropped element using CSS
  //   droppedElement.style.position = 'absolute';
  //   droppedElement.style.left = `${x}px`;
  //   droppedElement.style.top = `${y}px`;

  //   this.resetList();
  //   setTimeout(() => {
  //     this.flag = false
  //   }, 2000);
  // }

  // getInputElementPosition(event: MouseEvent) {
  //   const inputElement = this.elementRef.nativeElement.querySelector('input');
  //   const rect = inputElement.getBoundingClientRect();
  //   const x = rect.left;
  //   const y = rect.top;

  //   console.log(`מיקום האלמנט על המסך: x=${x}, y=${y}`);
  // }
  // x: number;
  // y: number;

  // @HostListener('mousemove', ['$event'])

  // onMouseMove(event: MouseEvent) {
  //   this.x = event.clientX;
  //   this.y = event.clientY;
  // }

}
