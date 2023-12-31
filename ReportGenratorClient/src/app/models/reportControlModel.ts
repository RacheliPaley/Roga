import FieldInTable from "./FieldInTableModel";
import ControlTextModel from "./controlTextModel";
import ControlTypesModel from "./controlTypesModel";
import TableColumnModel from "./tableColumnModel";

export default class ReportControlsModel {

    constructor(

        public Id?: number,

        public ReportId?: number,

        public ControlTypeId?: number,

        public ControlTypeName?: string,

        public Width?: number,

        public Height?: number,

        public ControlTextId?: ControlTextModel,

        public FieldInTblId?: FieldInTable,

        public ImgSrc?: string,

        public Text?: string
    ) { }




}