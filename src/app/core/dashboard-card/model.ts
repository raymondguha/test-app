export enum CardType {
    RequestByTransferDate,
    NewRequests,
    RequestsCreatedToday,
    RequestsCompletedToday
}

export interface DashboardCard {
    type: CardType;
    enabled: boolean;
}