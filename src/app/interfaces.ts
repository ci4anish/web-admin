export interface User {
    id: number;
    displayName: string;
    email: string;
    firstName: string;
    groups: any[];
    lastName: string;
    phone: string;
    userType: string;
}

export interface TeamMate {
    id: number,
    name: string
}