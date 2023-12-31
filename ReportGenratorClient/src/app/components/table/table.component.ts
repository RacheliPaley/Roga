import { Component } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent {

  show: boolean = false

  data1 = {
    "name": "data1", "data": [
      { code: 1, name: 'John', age: 25, height: 180 },
      { code: 2, name: 'Jane', age: 30, height: 165 },
      { code: 3, name: 'Mike', age: 35, height: 175 }
    ]
  }
  data2 = {
    "name": "data2", "data": [
      { code: 4, name: 'John', age: 25, height: 180 },
      { code: 5, name: 'Jane', age: 30, height: 165 },
      { code: 6, name: 'Mike', age: 35, height: 175 }
    ]
  }
  data = [
    this.data1, this.data2
  ];
  
  choosenData: any
  colWidth: Number = 50
  rowWidth: Number = 50

  fonttypeOptions: string[] = ['Arial', 'Times New Roman', 'Verdana', 'Helvetica', 'Courier New']
  tableSize: string = 'small'
  finallCols: any = [
  ];
  fields: any[] = []
  ngOnInit(): void {

  }
  changHeader(event: any) {
    console.log(event.target.value)
  }
  addColumn() {
    let flag = true
    this.fields.forEach((e) => {
      if (!e.field) { alert("לא בחרת את 2 העמודות "); flag = false; return; }
    })
    if (flag)
      this.fields.push({ "field": "", "header": "", "style": { "color": "", "hasunderline": false, "isemphassis": true, "fonttype": "Arial" } })
  }
  showMyFields() {
    this.show = true
  }
  coverMyFields() {
    this.show = false
  }
  chooseData() {
    for (const key in this.choosenData.data[0])
      this.finallCols.push({ "field": key, "header": key, "style": { "color": "", "hasunderline": false, "isemphassis": true, "fonttype": "Arial" } })
    this.fields.push({ "field": "", "header": "", "style": { "color": "", "hasunderline": false, "isemphassis": true, "fonttype": "Arial" } }, { "field": "", "header": "", "style": { "color": "", "hasunderline": false, "isemphassis": true, "fonttype": "Arial" } })
  }

}
