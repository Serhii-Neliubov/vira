import {ProjectModel} from "@models/ProjectModel.ts";
import {Role} from "@models/UserModel.ts";

export class ProjectsService {
    static async create(data): Promise<ProjectModel> {
        // try {
        //     return axios.post('/projects', data);
        // } catch (e) {
        //     console.error(e);
        // }
        return Promise.resolve({
            id: '1',
            title: 'First project',
            description: 'First project description',
            owner: {
                id: '1',
                email: 'johndoe@gmail.com',
                name: 'John Doe',
                role: Role.Admin,
                token: '123qwe',
            }
        });
    }

    static async getProjects(): Promise<ProjectModel[]> {
        // try {
        //     const response = await axios.get('/projects');
        //     return response.data;
        // } catch (e) {
        //     console.error(e);
        // }
        return Promise.resolve([
            {
                id: '1',
                title: 'First project',
                description: 'First project description',
                owner: {
                    id: '1',
                    email: 'johndoe@gmail.com',
                    name: 'John Doe',
                    role: Role.Admin,
                    token: '123qwe',
                }
            },
            {
                id: '2',
                title: 'Second project',
                description: 'Second project description',
                owner: {
                    id: '1',
                    email: 'johndoe@gmail.com',
                    name: 'John Doe',
                    role: Role.Admin,
                    token: '123qwe',
                }
            },
            {
                id: '3',
                title: 'Third project',
                description: 'Third project description',
                owner: {
                    id: '1',
                    email: 'johndoe@gmail.com',
                    name: 'John Doe',
                    role: Role.Admin,
                    token: '123qwe',
                }
            }
        ]);
    }

    static async update(data): Promise<ProjectModel> {
        // try {
        //     const response = await axios.put(`/projects/${data.id}`, data);
        //     return response.data;
        // } catch (e) {
        //     console.error(e);
        // }
        return Promise.resolve({
            id: '1',
            title: 'First project',
            description: 'First project description',
            owner: {
                id: '1',
                email: 'johndoe@gmail.com',
                name: 'John Doe',
                role: Role.Admin,
                token: '123qwe',
            }
        });
    }

    static async delete(id: string): Promise<ProjectModel> {
        // try {
        //     const response = await axios.delete(`/projects/${id}`);
        //     return response.data;
        // } catch (e) {
        //     console.error(e);
        // }
        return Promise.resolve(
            {
                id: '2',
                title: 'Second project',
                description: 'Second project description',
                owner: {
                    id: '1',
                    email: 'johndoe@gmail.com',
                    name: 'John Doe',
                    role: Role.Admin,
                    token: '123qwe',
                }
            }
        )
    }
}