import React from 'react'

function Table(props) {
    return (
        <table className="table table-dark">
            <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">First</th>
                    <th scope="col">Last</th>
                    <th scope="col">Handle</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    {props.tableList.map(listTable => {
                        <tr>
                            <td>1</td>
                            <td>{listTable.header}</td>
                            <td>{listTable.description}</td>
                        </tr>
                    })}
                </tr>
                <tr>
                    <th scope="row">3</th>
                    <td>Larry</td>
                    <td>the Bird</td>
                    <td>@twitter</td>
                </tr>

            </tbody>
        </table>

    )
}

export default Table