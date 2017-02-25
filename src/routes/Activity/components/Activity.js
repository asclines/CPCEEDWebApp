import React from 'react';

import RequireAuth from 'components/Auth/RequireAuth.js';

import Table from 'grommet/components/Table';
import TableRow from 'grommet/components/TableRow';


//returns the value used to display activity in list
function ParseActivity(props) {
    //currently simply returns the item as is because the array expected is a simple literal string
    return (
        <TableRow>
            <td>{props.status}</td>
            <td><center>{props.activity}</center></td>
        </TableRow>
    );
}

//Generate the list of activities to view depending on the list provided
function ActivityList(props) {
    return (
        <Table>
            <thead>
                <tr>
                    <th><center>Status</center></th>
                    <th width={'80%'}><center>Activity</center></th>
                </tr>
            </thead>
            <tbody>
                {props.generate.pending.map(function(value, iter) {
                    return <ParseActivity activity={value} status={'pending'} key={iter} />;
                })}
                {props.generate.confirmed.map(function(value, iter) {
                    return <ParseActivity activity={value} status={'confirmed'} key={iter} />
                })}
            </tbody>
        </Table>
    );
}



class Activity {

}

class ActivityPage extends React.Component {

    //The constructor for activity page.
    //Accepts properties:
    //  user - The user this activity page is for
    //may be changed according to the specification.
    constructor(props) {
        super(props)

        //The list of all activities that can be associated with the user provided
        this.activities = this.getActivities('')
    }

    //returns every pending activities of the user
    getActivities(user) {
        //currently returns a temporary list that represents the pending activities of the user
        return {
            pending: ['tempact1', 'tempact2', 'tempact3', 'tempact4'],
            confirmed: ['tempact5', 'tempact6']
        };
    }

    //returns list of all activities stored in the database
    //may be moved to a more general class as this is too general for the activity (should only contain stuff for individual users, not every activities)
    getEveryActivities() {
        //currently returns a temporary list that represents all activities stored in the database
        return {
            pending: ['tempact1', 'tempact2', 'tempact3', 'tempact4'],
            confirmed: ['tempact5', 'tempact6', 'tempact7', 'tempact9']
        };
    }

    //The render function for students
    renderStudent() {
        return (
            <div>
                <h2 style={{margin: '0px'}}>Score</h2>
                <div style={{margin: 'auto'}}>
                    <ScoreList generate={this.score} />
                </div>
            </div>
            <div>
                <h2 style={{margin: '0px'}}>Activity Report</h2>
                <div style={{margin: 'auto'}}>
                    <ActivityList generate={this.activities} />
                </div>
            </div>
        );
    }

    //The render function that gets called whenever this page is loaded
    render() {
        //Only provides student's page for now
        return this.renderStudent();
    }
}

// Defining the permissions required to access this component
const requiredState = {
    viewActivity: true
};

export default RequireAuth(ActivityPage, requiredState);
