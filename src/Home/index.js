import React from 'react';
import { Button, IconButton, TextareaAutosize, TextField } from '@mui/material';
import axios from 'axios';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';

class Home extends React.Component {
    constructor() {
        super()

        this.state = {
            header: "",
            description: "",
            list: []
        }
    }
    // componentDidMount() {
    //     axios.get("https://jsonplaceholder.typicode.com/users")
    //         .then(res => res.data)
    //         .then(getUser => this.setState({
    //             list: getUser
    //         }))
    // }
    setTodo = (e) => {
        e.preventDefault();
        console.log("first");
        var getAllValues = [{ header: this.state.header, description: this.state.description }];
        this.setState({
            list: [...this.state.list, ...getAllValues]
        })
    }
    header = (e) => {
        var value = e.target.value
        this.setState({
            header: value
        })
    }
    description = (e) => {
        var value = e.target.value
        this.setState({
            description: value
        })
    }
    getDelete = (e) => {
        console.log(e)
    }
    render() {
        // var { list } = this.state
        return (
            <div>
                <p>Todo</p>
                <form onSubmit={this.setTodo}>
                    <TextField
                        id="demo-helper-text-misaligned-no-helper"
                        label="Name of the task"
                        onChange={this.header}
                        name='header'
                    /><br />
                    <TextareaAutosize
                        name='description'
                        aria-label="minimum height"
                        minRows={3}
                        placeholder="Minimum 3 rows"
                        style={{ width: 220 }}
                        onChange={this.description}
                    /><br />
                    <Button type='submit' variant="outlined">Primary</Button>
                </form>
                {/* {console.log(list)} */}
                {/* <Table tableList={list} /> */}
                {/* {list.map(list => {
                    return <p>{list.header}</p>
                })} */}
                <table className="table table-dark">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">First</th>
                            <th scope="col">Last</th>
                            <th scope='col'>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.list.map(listTable => {
                            return (<tr>
                                <td>1</td>
                                <td>{listTable.header}</td>
                                <td>{listTable.description}</td>
                                <IconButton color="primary" aria-label="upload picture" component="span">
                                    <DeleteForeverIcon />
                                </IconButton>
                            </tr>)
                        })}

                    </tbody>
                </table>
            </div>
        )
    }
}

export default Home