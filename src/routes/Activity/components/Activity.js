import React from 'react';
import RequireAuth from 'components/Auth/RequireAuth.js';

import Table from 'grommet/components/Table';
import TableRow from 'grommet/components/TableRow';


//returns the value used to display activity in list
function ParseActivity(props) {
	//currently simply returns the item as is because the array expected is a simple literal string
	return (
		<TableRow>
			<td>pending</td>
			<td>{props.activity}</td>
		</TableRow>
	);
}

//Generate the list of activities to view depending on the list provided
//todo: figure out how to make react.js get functions
function ActivityList(props) {
	return (
		<Table style={props.style}>
			<thead>
				<tr>
					<th>Status</th>
					<th width={'80%'}>Activity</th>
				</tr>
			</thead>
			<tbody>
				{props.generate.map(function(value, iter) {
					return <ParseActivity activity={value} key={iter}/>;
				})}
			</tbody>
		</Table>
	);
}



class Activity extends React.Component {
    //The constructor for activity page.
    //Accepts properties:
    //  user - The user this activity page is for
    constructor(props) {
        super(props)

        //The list of all activities that can be associated with the user provided
        this.activities = {
            pending: this.getPendingActivities(props.user),
            history: this.getHistoryOfActivities(props.user),
            every: this.getEveryActivities()
        };
    }

    //returns every pending activities of the user
    getPendingActivities(user) {
        //currently returns a temporary list that represents the pending activities of the user
        return [
            'tempact1', 'tempact2', 'tempact3', 'tempact4'
        ];
    }

    //returns every activities done by the user
    getHistoryOfActivities(user) {
        //currently returns a temporary list that represents all activities done by user
        return [
            'tempact1', 'tempact2', 'tempact3', 'tempact4', 'tempact5'
        ];
    }

    //returns list of all activities stored in the database
    //may be moved to a more general class as this is too general for the scope of activity.
    getEveryActivities() {
        //currently returns a temporary list that represents all activities stored in the database
        return [
            'tempact1', 'tempact2', 'tempact3', 'tempact4', 'tempact5', 'tempact6', 'tempact7', 'tempact9'
        ];
    }

    //The render function for students
    renderStudent() {
        return (
            <div style={{margin: 'auto'}}>
                <h2>This is the activity page for students</h2>
                <ActivityList generate={this.activities.pending} style={{margin: 'auto'}}/>
            </div>
        );
    }

    //The render function that gets called whenever this page is loaded
    render() {
        return this.renderStudent();
    }
}

export default RequireAuth(Activity);
