import styled from "styled-components";

export const TablesStyles = styled.div`
    display: flex;
    flex-direction: column;
    /* overflow-x: auto; */
    .table-responsive {
    }
    table.table-bordered.TablesStyles {
        width: 100%;
        max-height: 95vh;
        min-width: 1200px;
        font-size: 16px;
        color: var(--mc_black);
        border-radius: 40px;
    }
    table.table-bordered.TablesStyles th {
        border: 1.5px solid var(--mc_dark);
        height: 40px;
        min-width: 120px !important;
    }
    table.table-bordered.TablesStyles tbody tr {
        max-height: 50px !important;
        -webkit-line-clamp: 3;
        height: 35px;
        -webkit-box-orient: vertical;
        :hover {
            background: var(--mc_dark);
            color: var(--mc_bg);
        }
    }
    table.table-bordered.TablesStyles td {
        border: 1.5px solid var(--mc_dark);
        line-height: 1;
        padding: 5px 0;
        text-align: center;
    }
    td {
        text-overflow: ellipsis;
        overflow: hidden;
    }
    .expandedRow {
        background: var(--mc_dark);
        border-bottom: 1px solid var(--mc_medium) !important;
        height: 50px;
    }
    .parentExpandedRow {
        cursor: pointer;
        background: var(--mc_dark);
        color: var(--mc_bg);
        white-space: wrap !important;
        height: 50px;
    }
    .btns-container {
        display: flex;
        margin-left: 20px;
        column-gap: 20px;
        align-items: center;
    }
`