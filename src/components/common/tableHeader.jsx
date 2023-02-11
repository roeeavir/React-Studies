import React, { Component } from "react";

class TableHeader extends Component {

    handleSort = path => {
        const sortColumn = { ...this.props.sortColumn };
        if (sortColumn.path === path) {
            sortColumn.order = sortColumn.order === 'asc' ? "desc" : "asc";
        } else {
            sortColumn.path = path;
            sortColumn.order = 'asc';
        }
        this.props.onSort(sortColumn);
    }

    renderSortIcon = column => {
        const { sortColumn } = this.props;

        if (column.path !== sortColumn.path) return null;
        if (sortColumn.order === 'asc') return <span className="fa fa-sort-asc">ne</span>
        return <span className="fa fa-sort-desc">ye</span>
    }

    render() {

        return (
            <thead className="table-head">
                <tr>
                    {this.props.columns.map(column => {
                        return <th key={column.path || column.key} onClick={() => this.handleSort(column.path)}>
                            {column.label} {this.renderSortIcon(column)}
                        </th>
                    })}
                </tr>
            </thead>
        );
    }

}

export default TableHeader;