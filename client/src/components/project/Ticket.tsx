type TicketProps = {
    ticket: {
        id: string;
        title: string;
        description: string;
    }
}

export default function Ticket({ticket}: TicketProps) {
    return (
        <div key={ticket.id}
             className='bg-white p-[8px] rounded mt-[8px] hover:bg-gray-200 transition-all'>
            <h3 className='text-[16px] font-semibold'>{ticket.title}</h3>
            <p className='text-[14px]'>{ticket.description}</p>
        </div>
    )
}