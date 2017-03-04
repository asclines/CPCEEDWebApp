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

function ParseScore(props) {
    return (
        <TableRow>
            <td>{props.categories}</td>
            <td>{props.points}</td>
        </TableRow>
    );
}

//Draws a table that displays the score of the user.  It requires properties "categories" and "points".
function DrawScoreTable(props) {
    var rows = [];
    for (var i = 0; i < props.categories.length; i++) {
        rows.push(<ParseScore categories={props.categories[i]} points={props.points[i]} key={i}/>)
    }

    return <tbody>{rows}</tbody>
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

function ScoreList(props)
{
    return (
        <Table>
            <thead>
                <tr>
                    <th><center>Categories</center></th>
                    <th><center>Score</center></th>
                </tr>
            </thead>
            <DrawScoreTable categories={props.generate.categories} points={props.generate.points} />
        </Table>
    )
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
        this.score = this.getScore('')
    }

    //returns every pending activities of the user
    getActivities(user) {
        //currently returns a temporary list that represents the pending activities of the user
        return {
            pending: ['tempact1', 'tempact2', 'tempact3', 'tempact4'],
            confirmed: ['tempact5', 'tempact6']
        };
    }

    getScore(user) {
        return {
            categories: ['cat', 'cat','cat','cat','cat','cat','cat','cat','cat','cat'],
            points: [1, 2, 1, 1, 1, 4, 6, 3, 2, 2]
        }
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
                <div className={'tab'}>
                    
                </div>

                <div>
                    <h2 style={{margin: '0px'}}>Score</h2>
                    <div>
                        <ScoreList generate={this.score} />
                    </div>
                </div>

                <div>
                    <h2 style={{margin: '0px'}}>Activity Report</h2>
                    <div style={{margin: 'auto'}}>
                        <ActivityList generate={this.activities} />
                    </div>
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

/*
    Defining the permissions required to access this component. This is a
    JavaScript object, so it consists of comma separated key-value pairs.
    The permissions defined here must already be defined in
    `src/redux/actions.js`. But you do not have to use all permissions
    defined in `actions.js`, just a subset that fits your situation.
*/
const requiredState = {
    viewActivity: true
};

export default RequireAuth(ActivityPage, requiredState);
