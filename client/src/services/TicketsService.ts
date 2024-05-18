import {TicketModel, TicketPriority, TicketState} from "../models/TicketModel.ts";

export class TicketsService {
    static async getTickets(): Promise<TicketModel[]> {
        // try {
        //     const response = await axios.get('/tickets');
        //     return response.data;
        // } catch (e) {
        //     console.error(e);
        // }
        return Promise.resolve([
            {
                id: '1',
                title: 'First ticket',
                description: 'First ticket description',
                state: TicketState.Open,
                priority: TicketPriority.Low,
                kanbanId: '1'
            },
            {
                id: '2',
                title: 'Second ticket',
                description: 'Second ticket description',
                state: TicketState.InProgress,
                priority: TicketPriority.Medium,
                kanbanId: '1'
            },
            {
                id: '3',
                title: 'Third ticket',
                description: 'Third ticket description',
                state: TicketState.Done,
                priority: TicketPriority.High,
                kanbanId: '1'
            },
            {
                id: '4',
                title: 'Fourth ticket',
                description: 'Third ticket description',
                state: TicketState.Review,
                priority: TicketPriority.High,
                kanbanId: '1'
            },
            {
                id: '5',
                title: 'Fifth ticket',
                description: 'Fifth ticket description',
                state: TicketState.Open,
                priority: TicketPriority.High,
                kanbanId: '1'
            }
        ]);
    }

    static async createTicket(data: TicketModel): Promise<TicketModel> {
        // try {
        //     const response = await axios.post('/tickets', data);
        //     return response.data;
        // } catch (e) {
        //     console.error(e);
        // }
        return Promise.resolve({
            id: '6',
            title: 'Fourth ticket',
            description: 'Fourth ticket description',
            state: TicketState.Open,
            priority: TicketPriority.Low,
            kanbanId: '1'
        });
    }

    static async updateTicket(data: TicketModel): Promise<TicketModel> {
        // try {
        //     const response = await axios.put(`/tickets/${data.id}`, data);
        //     return response.data;
        // } catch (e) {
        //     console.error(e);
        // }
        return Promise.resolve({
            id: '4',
            title: 'Fourth ticket',
            description: 'Fourth ticket description',
            state: TicketState.Open,
            priority: TicketPriority.Low,
            kanbanId: '1'
        });
    }

    static async deleteTicket(id: string): Promise<TicketModel> {
        // try {
        //     const response = await axios.delete(`/tickets/${id}`);
        //     return response.data;
        // } catch (e) {
        //     console.error(e);
        // }
        return Promise.resolve(
            {
                id: '1',
                title: 'First ticket',
                description: 'First ticket description',
                state: TicketState.Open,
                priority: TicketPriority.Low,
                kanbanId: '1'
            }
        );
    }
}