import ReportControlsModel from './reportControlModel';

export default class ReportModel {
  constructor(
    public Id?: number,

    public Name?: string,

    public SchoolId?: number,

    public creatorId?: number,

    public ProductionDate?: Date,

    public reportControlList?: ReportControlsModel[]
  ) {}
}
