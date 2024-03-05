import { BaseResponse } from "./typings";

export const postSuggestion = async (email: string, suggestion: string): Promise<BaseResponse<string>> => {
  const body = {
    email,
    suggestion
  };
  const response = await fetch(`/api/submit`, {
    method: 'POST',
    body: JSON.stringify(body),
    headers: {
      'content-type': 'application/json',
    },
  });
  const result = await response.json();
  return result;
}