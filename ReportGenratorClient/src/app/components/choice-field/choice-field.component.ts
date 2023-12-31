import { Component, Input } from '@angular/core';
import FieldInTable from 'src/app/models/FieldInTableModel';

import { choicefieldservice } from 'src/app/services/choicefieldservice.service';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'ChoiceFieldComponent',
  templateUrl: './choice-field.component.html',
  styleUrls: ['./choice-field.component.css']
})

export class ChoiceFieldComponent {

  listFieldInTable!: FieldInTable[];
  selectedField!: FieldInTable[];

  constructor(
    public choicefieldservice: choicefieldservice, public route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    // this.choicefieldservice.getById(1).subscribe(succ => {
    //   this.listFieldInTable = succ;
    //   console.log("selectedField arr", this.selectedField)
    // });

    // שורת בדיקה כתובה רק כדי לראות אם הפונקציה עובדת עי שרת מקומי
    this.listFieldInTable = this.choicefieldservice.listFieldInTable;

  }
  fullselectedTables() {
    this.choicefieldservice.listFieldInTable = this.selectedField;
    const jsonString = JSON.stringify(this.selectedField);
    alert("this.selectedField" + jsonString)

  }

}

