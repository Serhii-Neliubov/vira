import {UserModel} from "@models/UserModel.ts";

export interface CommentModel {
    id?: string;
    ticketId: string;
    author: UserModel;
    text: string;
    createdAt: string;
}