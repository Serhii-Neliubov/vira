import {UserModel} from "@models/UserModel.ts";

export interface ProjectModel {
    id?: string;
    title: string;
    description: string;
    owner: UserModel;
}