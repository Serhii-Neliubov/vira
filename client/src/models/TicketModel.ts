export enum TicketState {
    Open = 'Open',
    InProgress = 'InProgress',
    Review = 'Review',
    Done = 'Done'
}

export enum TicketPriority {
    Tweak = 'Tweak',
    Low = 'Low',
    Medium = 'Medium',
    High = 'High'
}

export interface TicketModel {
    id: string;
    title: string;
    description: string;
    state: TicketState;
    priority: TicketPriority;
    kanbanId: string;
}