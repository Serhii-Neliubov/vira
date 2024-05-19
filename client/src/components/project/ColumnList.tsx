import {TicketModel, TicketState} from "@models/TicketModel.ts";
import TicketList from "@components/project/TicketList.tsx";
import {Column} from "@components/project/Column.tsx";

type ColumnListProps = {
    tickets: TicketModel[];
    search: { value: string };
}

const columns = Object.values(TicketState);
const columnNames = {
    [TicketState.Open]: 'Open',
    [TicketState.InProgress]: 'In Progress',
    [TicketState.Review]: 'Review',
    [TicketState.Done]: 'Done',
};

export default function ColumnList({tickets, search}: ColumnListProps) {
    return (
        columns.map(column =>
            <Column columnName={columnNames[column]} key={column}>
                <TicketList tickets={tickets} ticketListColumn={column} search={search}/>
            </Column>
        )

    )
}