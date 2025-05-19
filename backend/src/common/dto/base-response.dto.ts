export class BaseResponse<T> {
  success: boolean;
  data: T;
  timestamp: string;
}
