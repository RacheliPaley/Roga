import { Component } from '@angular/core';
// import {NgForm} from '@angular/forms';
import Tables from 'src/app/models/tablesModel';
import { ChoicetableService } from 'src/app/services/choicetable.service.service';
import { AutoCompleteCompleteEvent } from 'primeng/autocomplete';
import FieldInTable from 'src/app/models/FieldInTableModel';
import { choicefieldservice } from 'src/app/services/choicefieldservice.service';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-edit-image-in-data',
  templateUrl: './edit-image-in-data.component.html',
  styleUrls: ['./edit-image-in-data.component.css']
})
export class EditImageInDataComponent {

  constructor(public choicetableservice: ChoicetableService, public choiceFieldservice: choicefieldservice, private fb: FormBuilder) { }
  Table!: Tables[];
  Field!: FieldInTable[];
  selectTable: Tables | undefined;
  selectField: FieldInTable | undefined;
  filteredTables!: Tables[];
  filteredField!: FieldInTable[];
  height!: number;
  width!: number;


  onSubmit(f: any) {

  }
  
  ngOnInit() {
    this.Table = this.choicetableservice.listTable;
    const jsonString = JSON.stringify(this.Table);
    console.log("table" + jsonString)
    this.Field = this.choiceFieldservice.listFieldInTable;
    console.log("f" + this.Field)
    //הפונקציות מיורקות כי כרגע אין שרת אמיתי
    // this.choicetableservice.getAll().subscribe(succ => {
    //   this.listTable = succ;
    //   console.log("listFieldInTable arr", this.choicetableservice)
    // });
    // this.choicefieldservice.getById(id).subscribe(succ => {
    //   this.listFieldInTable = succ;
    //   console.log("selectedField arr", this.selectedField)
    // });

  }
  filterTable(event: AutoCompleteCompleteEvent) {
    let filter: Tables[] = [];
    let query = event.query;

    for (let i = 0; i < (this.Table as any[]).length; i++) {
      let t = (this.Table as any[])[i];
      if (t.Name.toLowerCase().indexOf(query.toLowerCase()) == 0) {
        filter.push(t);
      }
  }
  this.filteredTables = filter;
}
filterField(event: AutoCompleteCompleteEvent) {
  let filtered: FieldInTable[] = [];
  let query = event.query;

    for (let i = 0; i < (this.Field as FieldInTable[]).length; i++) {
      let country = (this.Field as FieldInTable[])[i];
      if (country.Name.toLowerCase().indexOf(query.toLowerCase()) == 0) {
        filtered.push(country);
      }
  }
  this.filteredField = filtered;
}
showSquare(): void {
  const squareheight = this.height;
  const squareWidth = this.width;
  const squareSize = squareheight* squareWidth;
  
  const square = document.getElementById("square");
  square!.style.width = squareSize + "px";
  square!.style.height = squareSize + "px";
}
 showForm() {
  var form = document.getElementById('myForm');
  form!.style.display = 'block';
}


}

