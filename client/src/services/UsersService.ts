import {Role, UserModel} from "../models/UserModel.ts";

export class UsersService {
    static async register(data: UserModel): Promise<UserModel> {
        // try {
        //     return axios.post('/users/register', data);
        // } catch (e) {
        //     console.error(e);
        // }
        return Promise.resolve({
            id: '1',
            email: 'johndoe@gmail.com',
            name: 'John Doe',
            role: Role.Admin,
            password: 'papamama@babushka',
            token: '123qwe',
        });
    }

    static async login(data: UserModel): Promise<UserModel> {
        // try {
        //     return axios.post('/users/login', data);
        // } catch (e) {
        //     console.error(e);
        // }
        return Promise.resolve({
            id: '1',
            email: 'johndoe@gmail.com',
            name: 'John Doe',
            role: Role.Admin,
            password: 'papamama@babushka',
            token: '123qwe',
        });
    }

    static async logout(): Promise<boolean> {
        // try {
        //     return axios.post('/users/logout');
        // } catch (e) {
        //     console.error(e);
        // }
        return Promise.resolve(true);
    }

    // async recovery(data) {
    //     try {
    //         return axios.post('/users/recovery', data);
    //     } catch (e) {
    //         console.error(e);
    //     }
    // }
}