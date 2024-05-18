export enum Role {
    Admin = 'Admin',
    User = 'User'
}

export interface UserModel {
    id?: string;
    email: string;
    password?: string;
    name: string;
    role: Role;
    token?: string;
}