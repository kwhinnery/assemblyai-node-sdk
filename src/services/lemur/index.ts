import {
  LemurSummaryParameters,
  LemurActionItemsParameters,
  LemurQuestionAnswerParameters,
  LemurTaskParameters,
  LemurSummaryResponse,
  LemurQuestionAnswerResponse,
  LemurActionItemsResponse,
  LemurTaskResponse,
} from "@/types";
import BaseService from "@/services/base";

export default class LemurService extends BaseService {
  async summary(params: LemurSummaryParameters): Promise<LemurSummaryResponse> {
    const { data } = await this.client.post<LemurSummaryResponse>(
      "/lemur/v3/generate/summary",
      params
    );
    return data;
  }

  async questionAnswer(
    params: LemurQuestionAnswerParameters
  ): Promise<LemurQuestionAnswerResponse> {
    const { data } = await this.client.post<LemurQuestionAnswerResponse>(
      "/lemur/v3/generate/question-answer",
      params
    );
    return data;
  }

  async actionItems(
    params: LemurActionItemsParameters
  ): Promise<LemurActionItemsResponse> {
    const { data } = await this.client.post<LemurActionItemsResponse>(
      "/lemur/v3/generate/action-items",
      params
    );
    return data;
  }

  async task(params: LemurTaskParameters): Promise<LemurTaskResponse> {
    const { data } = await this.client.post<LemurTaskResponse>(
      "/lemur/v3/generate/task",
      params
    );
    return data;
  }
}