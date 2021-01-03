import React, { Component } from 'react';
import { render } from 'react-dom';

import axios from 'axios';

export default class Student extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data : []
        };
    }

    componentDidMount() {
        this.getStudent();
    }

    getStudent = () => {
        axios
            .get("http://localhost:8000/api/students/123456")
            .then(res => this.setState({data : [res.data]}))
            .catch(err => console.log(err))             
    };

    render() {
        return (
            <ul>
                {this.state.data.map(student => {
                    return (
                        <li key={student.student_id}>
                            {student.tract_id} - {student.neighborhood_rating}
                        </li>
                    )
                })}
            </ul>
        );
    }
}