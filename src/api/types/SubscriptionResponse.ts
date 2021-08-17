interface SubscriptionValue<T> {
  data: T;
}

export interface SubscriptionResponse<T> {
  provider: any;
  value: SubscriptionValue<T>;
}
