import { Component, Input } from '@angular/core';
import { ChoicetableService } from 'src/app/services/choicetable.service.service';
import { Table } from 'primeng/table';
import Tables from 'src/app/models/tablesModel';
import { choicefieldservice } from 'src/app/services/choicefieldservice.service';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-choice-table',
  templateUrl: './choice-table.component.html',
  styleUrls: ['./choice-table.component.css']
})
export class ChoiceTableComponent {
  Id: number = 0;
  listTable!: Tables[];
  selectedTables!: Tables[];

  constructor(public choicetableservice: ChoicetableService, private router: Router) { }

  ngOnInit(): void {
    // this.choicetableservice.getAll().subscribe(succ => {
    //   this.listTable = succ;
    //   console.log("listFieldInTable arr", this.choicetableservice)
    // });

    // שורת בדיקה כתובה רק כדי לראות אם הפונקציה עובדת עי שרת מקומי
    this.listTable = this.choicetableservice.listTable;

    console.log(this.listTable)
  }

  fullselectedTables() {
    this.choicetableservice.listTable = this.selectedTables;
    const jsonString = JSON.stringify(this.selectedTables);
    alert("this.selectedTables" + jsonString)

    // this.router.navigate(['choicefields',this.selectedOption.Id]);
  }



}

