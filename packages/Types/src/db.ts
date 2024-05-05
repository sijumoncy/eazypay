export enum OnRampStatusTypeEnum {
  Success = "Success",
  Failure = "Failure",
  Processing = "Processing",
}

export interface ITransactionData {
  time: Date;
  amount: number;
  status: OnRampStatusTypeEnum;
  provider: string;
}


export type ITransactionDataArr = ITransactionData[]