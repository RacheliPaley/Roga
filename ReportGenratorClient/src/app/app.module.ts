import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import { DragDropModule } from '@angular/cdk/drag-drop';


//primeng
import { AvatarModule } from 'primeng/avatar';
import { BadgeModule } from 'primeng/badge';
import { AppComponent } from './app.component';
import { InputNumberModule } from 'primeng/inputnumber';
import { SharedModule, Header, Footer } from 'primeng/api';
import { Dialog, DialogModule } from 'primeng/dialog';
import { ConfirmDialog, ConfirmDialogModule } from 'primeng/confirmdialog';
import { DropdownModule } from 'primeng/dropdown';
import { MenubarModule } from 'primeng/menubar';
import { ButtonModule } from 'primeng/button';
import { ListboxModule } from 'primeng/listbox';
import { RadioButtonModule } from 'primeng/radiobutton';
import { PanelModule } from 'primeng/panel';
import { CalendarModule } from 'primeng/calendar';
import { AccordionModule } from 'primeng/accordion';
import { TabViewModule } from 'primeng/tabview';
import { FocusTrapModule } from 'primeng/focustrap';
import { CheckboxModule } from 'primeng/checkbox';
import { TreeTableModule } from 'primeng/treetable';
import { TreeModule } from 'primeng/tree';
import { ConfirmationService } from 'primeng/api';
import { TableModule } from 'primeng/table';
import { InputTextModule } from 'primeng/inputtext';
import { MultiSelectModule } from 'primeng/multiselect';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { ImageModule } from 'primeng/image';
import { ColorPickerModule } from 'primeng/colorpicker';
import { ChartModule } from 'primeng/chart';
import { ContextMenuModule } from 'primeng/contextmenu';
import { DataViewModule } from 'primeng/dataview';
import { VirtualScrollerModule } from 'primeng/virtualscroller';
import { ChipModule } from 'primeng/chip';
import { DockModule } from 'primeng/dock';
import { DragDropModule } from 'primeng/dragdrop';
import { DynamicDialogModule } from 'primeng/dynamicdialog';
import { EditorModule } from 'primeng/editor';
import { FieldsetModule } from 'primeng/fieldset';
import { InputSwitchModule } from 'primeng/inputswitch';

//materials
import { MatDialogModule } from '@angular/material/dialog';

//others
import { DndModule } from 'ngx-drag-drop';
import { PdfViewerModule } from 'ng2-pdf-viewer';

//components
import { ControlsFormComponent } from './components/controls-form/controls-form.component';
import { DragDropComponent } from './components/drag-drop/drag-drop.component';
import { AddReportComponent } from '../app/components/add-report/add-report.component';
import { ReportComponent } from '../app/components/report/report.component';
import { ChoiceFieldComponent } from './components/choice-field/choice-field.component';
import { ChoiceTableComponent } from './components/choice-table/choice-table.component';
import { EditImageInDataComponent } from './components/edit-image-in-data/edit-image-in-data.component';
import { TableComponent } from './components/table/table.component';
import { EditComponent } from './components/edit/edit.component';
import { UploadpictureComponent } from './components/uploadpicture/uploadpicture.component';
import { MeditorComponent } from './components/meditor/meditor.component';
import { TextboxComponent } from './components/textbox/textbox.component';

@NgModule({

  declarations: [
    //components
    AppComponent,
    TableComponent,
    AddReportComponent,
    ReportComponent,
    ChoiceFieldComponent,
    ChoiceTableComponent,
    EditImageInDataComponent,
    EditComponent,
    UploadpictureComponent,
    MeditorComponent,
    TextboxComponent,
    ControlsFormComponent,
    DragDropComponent,
  ],

  imports: [
    DragDropModule,
    ReactiveFormsModule,
    HttpClientModule,
    AvatarModule,
    DndModule,
    RouterModule,
    BadgeModule,
    BrowserAnimationsModule,
    PdfViewerModule,
    ColorPickerModule,
    CommonModule,
    BrowserAnimationsModule,
    InputTextModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    SharedModule,
    TableModule,
    InputNumberModule,
    DialogModule,
    ConfirmDialogModule,
    DropdownModule,
    MenubarModule,
    ButtonModule,
    ListboxModule,
    RadioButtonModule,
    PanelModule,
    AccordionModule,
    CalendarModule,
    TabViewModule,
    FocusTrapModule,
    CheckboxModule,
    TreeTableModule,
    TreeModule,
    MultiSelectModule,
    AutoCompleteModule,
    ColorPickerModule,
    PdfViewerModule,
    MatDialogModule,
    ImageModule
  ],

  exports: [Dialog, ConfirmDialog, Header, Footer],
  providers: [
    ConfirmationService
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }

