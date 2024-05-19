import {TicketModel} from "@models/TicketModel.ts";
import Ticket from "@components/project/Ticket.tsx";

type TicketListProps = {
    tickets: TicketModel[];
    ticketListColumn: string;
    search: { value: string };
}

export default function TicketList({tickets, ticketListColumn, search}: TicketListProps) {
    const filteredTickets = tickets.filter(ticket => {
        if (search.value.length > 0) {
            return ticket.state === ticketListColumn && ticket.title.includes(search.value);
        }

        return ticket.state === ticketListColumn
    });

    return (
        filteredTickets.map(ticket =>
            <Ticket key={ticket.id} ticket={ticket}/>
        )
    )
}