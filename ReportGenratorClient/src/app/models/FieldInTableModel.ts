export default class FieldInTable {
    constructor(
        public Id: number,
        public Name: string,
        public DataType: number,
        public TableId: number,
        public FieldNameInDb: string
    ) { }

} 