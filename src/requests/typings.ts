
export interface GenerateVideoData {
  revised_prompt: string;
  url: string;
}
export interface GenerateVideoResponse {
  data: Array<GenerateVideoData>;
}

export interface BaseResponse<T = any> {
  status: number,
  data: T,
  error?: string
}