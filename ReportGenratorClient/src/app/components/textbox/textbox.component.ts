import { Component } from '@angular/core';

@Component({
  selector: 'app-textbox',
  templateUrl: './textbox.component.html',
  styleUrls: ['./textbox.component.css']
})
export class TextboxComponent {
  FontType: string = ""
  isEmphasized: boolean = false
  hasUnderline: boolean = false
  color: string = "#f8f6f6"
  value: any = ""
  width: Number = 50
  height: Number = 50
  displayType: string = "";
  showdisplayType: string = "number"
  setting: boolean = false
  displayTypeOptions = [
    'number',
    'shekels',
    'presents',
    'date',
    'string']

  fonttypeOptions: string[] = ['Arial', 'Times New Roman', 'Verdana', 'Helvetica', 'Courier New']

}
