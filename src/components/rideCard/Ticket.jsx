import { DataGrid } from "@material-ui/data-grid";
import React from "react";

const Ticket = ({ data, classes }) => {
    let columns = [
        { field: "id", headerName: "Id", width: 100, type: "number" },
        { field: "person", headerName: "Person", width: 100, type: "number" },
        { field: "price", headerName: "Price", width: 100, type: "number" },
    ];
    let rows = [];

    data.tickets.forEach(ticket => {
        rows.push({
            id: ticket.id,
            person: ticket.person,
            price: `$ ${ticket.price}`,
        });
    });

    return (
        <>
            <DataGrid rows={rows} columns={columns} autoPageSize autoHeight />
        </>
    );
};

export default Ticket;
