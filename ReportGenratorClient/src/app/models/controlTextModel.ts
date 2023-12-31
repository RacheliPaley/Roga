import FontsTypesModel from "./fontsTypesModel";

export default class ControlTextModel {

    constructor(

        public Id?: number,

        public Size?: number,

        public Bold?: boolean,

        public Italic?: boolean,

        public UnderLined?: boolean,

        public Color?: string,

        public FontTypeId?: FontsTypesModel
    ) { }




}