import React from 'react';

import Form from 'grommet/components/Form';
import FormField from 'grommet/components/FormField';
import Select from 'grommet/components/Select';
import Footer from 'grommet/components/Footer';
import Button from 'grommet/components/Button';

class Register extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            firstName: '',
            lastName: '',
            studentID: '',
            role: 'student'
        };

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSelectChange = this.handleSelectChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleInputChange(event, key) {
        this.setState({
            [key]: event.target.value
        });
    }

    handleSelectChange(event) {
        this.setState({
            role: event.option
        });
    }

    handleSubmit(event) {
        // This prevents a '?' from being appended to the URL
        event.preventDefault();

        var data = {
            email: this.state.email,
            password: this.state.password,
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            studentID: this.state.studentID,
            role: this.state.role
        };

        this.props.handleRegister(data);
    }

    render() {
        var studentIDField = null;
        if(this.state.role === 'student') {
            studentIDField = (
                <FormField label='Student ID'>
                    <input
                        type='text'
                        value={this.state.studentID}
                        onChange={(event) => {
                            this.handleInputChange(event, 'studentID');
                        }}/>
                </FormField>
            );
        }

        return (
            <Form
                pad='small'
                plain={true}>
                <fieldset>
                    <FormField label='Role'>
                        <Select
                            options={['student', 'admin']}
                            value={this.state.role}
                            onChange={(event) => {
                                this.handleSelectChange(event);
                            }}/>
                    </FormField>
                    {studentIDField}
                    <FormField label='First Name'>
                        <input
                            type='text'
                            value={this.state.firstName}
                            onChange={(event) => {
                                this.handleInputChange(event, 'firstName');
                            }}/>
                    </FormField>
                    <FormField label='Last Name'>
                        <input
                            type='text'
                            value={this.state.lastName}
                            onChange={(event) => {
                                this.handleInputChange(event, 'lastName');
                            }}/>
                    </FormField>
                    <FormField label='Email'>
                        <input
                            type='email'
                            value={this.state.email}
                            onChange={(event) => {
                                this.handleInputChange(event, 'email');
                            }}/>
                    </FormField>
                    <FormField label='Password'>
                        <input
                            type='password'
                            value={this.state.password}
                            onChange={(event) => {
                                this.handleInputChange(event, 'password');
                            }}/>
                    </FormField>
                </fieldset>
                <Footer>
                    <Button
                        label='Register'
                        type='submit'
                        primary={true}
                        onClick={(event) => {
                            this.handleSubmit(event);
                        }}/>
                </Footer>
            </Form>
        );
    }
}

export default Register;
