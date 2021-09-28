export const stockTakeEvMod = [
  "ANNUAL STOCKTAKE",
  "STOCK AUDIT",
  "INTERNAL AUDIT",
  "PHYSICAL CHECK REQUEST",
];

export interface stocTakeType {
  date: Date;
  eventID: any;
  eventName: string;
  type: string;
  user: string;
}
