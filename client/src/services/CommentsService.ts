import {CommentModel} from "@models/CommentModel.ts";
import {Role} from "@models/UserModel.ts";

export class CommentsService {
    static async getComments(ticketId: string): Promise<CommentModel[]> {
        // try {
        //     const response = await axios.get('/tickets');
        //     return response.data;
        // } catch (e) {
        //     console.error(e);
        // }
        return Promise.resolve([
            {
                id: '1',
                author: {
                    id: '1',
                    email: 'johndoe@gmail.com',
                    name: 'John Doe',
                    role: Role.Admin,
                    token: '123qwe',
                },
                ticketId: '1',
                text: 'low',
                createdAt: '18.05.2024'
            },
            {
                id: '2',
                author: {
                    id: '1',
                    email: 'johndoe@gmail.com',
                    name: 'John Doe',
                    role: Role.Admin,
                    token: '123qwe',
                },
                ticketId: '1',
                text: 'low',
                createdAt: '18.05.2024'
            },
        ]);
    }

    static async createComment(data: CommentModel): Promise<CommentModel> {
        // try {
        //     const response = await axios.post('/tickets', data);
        //     return response.data;
        // } catch (e) {
        //     console.error(e);
        // }
        return Promise.resolve(
            {
                id: '3',
                author: {
                    id: '1',
                    email: 'johndoe@gmail.com',
                    name: 'John Doe',
                    role: Role.Admin,
                    token: '123qwe',
                },
                ticketId: '1',
                text: 'low',
                createdAt: '18.05.2024'
            },
        );
    }

    static async update(data: CommentModel): Promise<CommentModel> {
        // try {
        //     const response = await axios.post('/tickets', data);
        //     return response.data;
        // } catch (e) {
        //     console.error(e);
        // }
        return Promise.resolve(
            {
                id: '3',
                author: {
                    id: '1',
                    email: 'johndoe@gmail.com',
                    name: 'John Doe',
                    role: Role.Admin,
                    token: '123qwe',
                },
                ticketId: '1',
                text: 'low',
                createdAt: '18.05.2024'
            },
        );
    }

    static async delete(data: CommentModel): Promise<CommentModel> {
        // try {
        //     const response = await axios.post('/tickets', data);
        //     return response.data;
        // } catch (e) {
        //     console.error(e);
        // }
        return Promise.resolve(
            {
                id: '3',
                author: {
                    id: '1',
                    email: 'johndoe@gmail.com',
                    name: 'John Doe',
                    role: Role.Admin,
                    token: '123qwe',
                },
                ticketId: '1',
                text: 'low',
                createdAt: '18.05.2024'
            },
        );
    }
}