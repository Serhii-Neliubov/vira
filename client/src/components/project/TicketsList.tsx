import {useEffect, useState} from "react";

import {TicketModel} from "@models/TicketModel.ts";
import Ticket from "@components/project/Ticket.tsx";
import {TicketsService} from "@services/TicketsService.ts";

type TicketListProps = {
    ticketState: string;
    search: { value: string };
}

export default function TicketsList({ticketState, search}: TicketListProps) {
    const [tickets, setTickets] = useState<TicketModel[]>([]);

    useEffect(() => {
        TicketsService
            .getTickets()
            .then(tickets => setTickets(tickets));
    }, []);

    const filteredTickets = tickets.filter(ticket => {
        if (search.value) {
            return ticket.state === ticketState && ticket.title.includes(search.value);
        }

        return ticket.state === ticketState
    });

    return (
        filteredTickets.map(ticket =>
            <Ticket key={ticket.id} ticket={ticket}/>
        )
    )
}