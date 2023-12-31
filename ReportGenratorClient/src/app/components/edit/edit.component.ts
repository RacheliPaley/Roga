import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';

import { MeditorComponent } from '../meditor/meditor.component'
@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css'],
  providers: [DialogService]

})
export class EditComponent implements OnInit {
  ref: DynamicDialogRef | undefined;
  @Output() dialogResult = new EventEmitter<boolean>();

  // 
  constructor(public dialogService: DialogService, private dialog: MatDialog) { }
  ngOnInit(): void {
    this.ref = this.dialogService.open(MeditorComponent
      , { data: { chief: this.chief }, header: 'ערוך את הפקד' });
    console.log(this.ref)

    this.ref.onClose.subscribe(() => {
      this.dialogResult.emit(true);
    });
  }

  @Input() chief = "ass"


}
