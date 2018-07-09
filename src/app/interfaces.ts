export interface User {
    id: number;
    displayName: string;
    email: string;
    firstName: string;
    groups: any[];
    lastName: string;
    phone: string;
    userType: string;
    teamId: number;
    is_lead: boolean;
}

export interface Team {
    id: number;
    name: string;
}

export interface Notification {
    id: number;
    level: string;
    unread: boolean;
    description: string;
    timestamp: string;
    data: string;
}
