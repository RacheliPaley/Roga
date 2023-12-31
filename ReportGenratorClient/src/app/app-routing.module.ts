import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReportComponent } from './components/report/report.component';
import { EditComponent } from './components/edit/edit.component';
import { TableComponent } from './components/table/table.component';
import { TextboxComponent } from './components/textbox/textbox.component';
import { UploadpictureComponent } from './components/uploadpicture/uploadpicture.component';
import { AddReportComponent } from './components/add-report/add-report.component';
import { MeditorComponent } from './components/meditor/meditor.component';
import { ControlsFormComponent } from './components/controls-form/controls-form.component';
import { DragDropComponent } from './components/drag-drop/drag-drop.component';

const routes: Routes = [
 
  { path: '', component:AddReportComponent },
  { path: 'addReport', component: AddReportComponent },
  // { path: 'report', component: ReportComponent },
  { path: 'meditor', component: MeditorComponent },
  { path: 'uploadpicture', component: UploadpictureComponent },
  { path: 'textbox', component: TextboxComponent },
  { path: 'table', component: TableComponent },
  { path: 'edit', component: EditComponent },
  { path: 'formControl', component: ControlsFormComponent },
  { path: 'report', component: DragDropComponent },
]



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
