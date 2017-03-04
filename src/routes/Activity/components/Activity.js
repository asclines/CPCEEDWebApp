import React from 'react';

import RequireAuth from 'components/Auth/RequireAuth.js';

import Table from 'grommet/components/Table';
import TableRow from 'grommet/components/TableRow';
import TableHeader from 'grommet/components/TableHeader';
import Tabs from 'grommet/components/Tabs';
import Tab from 'grommet/components/Tab';


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
                    <th><center>Activity</center></th>
                </tr>
            </thead>
            <tbody>
                {props.generate.pending.map(function(value, iter) {
                    return <ParseActivity activity={value} status={'pending'} key={iter} style={{bgcolor: '#EEEEEE'}}/>;
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

        var uid = '12345'

        this.state = {
            index: 0,
            activities: this.getActivities(uid),
            score: this.getScore(uid),
        }

        this.handleTabChange = this.handleTabChange.bind(this)
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

    handleTabChange(changed) {
        this.setState({
            index: changed
        })
    }

    //The render function for students
    renderStudent() {
        var score = (
            <Tab title="Score">
                <ScoreList generate={this.state.score} />
            </Tab>
        )

        var activities = (
            <Tab title="Activities">
                <ActivityList generate={this.state.activities} />
            </Tab>
        )

        return (
            <Tabs
                justify='center'
                activeIndex={this.state.index}
                onActive={(event) => {this.handleTabChange(event)}}>
                {score}
                {activities}
            </Tabs>
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
