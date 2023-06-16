export enum ResponseStatus {
    Pending = 'pending',
    Resolved = 'resolved',
    Rejected = 'rejected',
    Idle = 'idle',
  }

export type ResponseResult = {
  status: ResponseStatus;
  data: any;
  error: string | null;
};
