import { Constants } from "../common";
import { CosmosHeaders } from "../queryExecutionContext";
import { OperationStats } from "./OperationStatistics";

export class FeedResponse<TResource> {
  constructor(
    public readonly resources: TResource[],
    private readonly headers: CosmosHeaders,
    public readonly hasMoreResults: boolean,
    public readonly operationStats?: OperationStats
  ) {}
  public get continuation(): string {
    return this.headers[Constants.HttpHeaders.Continuation];
  }
  public get queryMetrics(): string {
    return this.headers[Constants.HttpHeaders.QueryMetrics];
  }
  public get requestCharge(): number {
    return this.headers[Constants.HttpHeaders.RequestCharge];
  }
  public get activityId(): string {
    return this.headers[Constants.HttpHeaders.ActivityId];
  }
}
