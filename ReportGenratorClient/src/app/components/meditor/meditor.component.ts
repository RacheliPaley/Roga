import { Component, OnInit,Output,EventEmitter } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DynamicDialogConfig } from 'primeng/dynamicdialog';
@Component({
  selector: 'app-meditor',
  templateUrl: './meditor.component.html',
  styleUrls: ['./meditor.component.css']
})
export class MeditorComponent implements OnInit {

  chief: string = ""

  constructor(private route: ActivatedRoute, public config: DynamicDialogConfig) { }

  ngOnInit(): void {
    this.chief = this.config.data.chief
    console.log(this.chief)
  }
    
@Output() dialogResult = new EventEmitter<boolean>();

// saveChanges() {
//   // Perform save logic here
//   this.dialogResult.emit(true);
// }

// cancel() {
//   this.dialogResult.emit(false);
// }
}
