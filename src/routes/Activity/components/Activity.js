import React from 'react';
import RequireAuth from 'components/Auth/RequireAuth.js';


class Activity extends React.Component {
    //The constructor for activity page.
    //Accepts properties:
    //  user - The user this activity page is for
    constructor(props)
    {
        super(props)

        //The list of all activities that can be associated with the user provided
        this.activities = {
            pending: this.getPendingActivities(props.user),
            history: this.getHistoryOfActivities(props.user),
            every: this.getEveryActivities()
        };
    }

    //returns every pending activities of the user
    getPendingActivities(user)
    {
        //currently returns a temporary list that represents the pending activities of the user
        return [
            'tempact1', 'tempact2', 'tempact3', 'tempact4'
        ];
    }

    //returns every activities done by the user
    getHistoryOfActivities(user)
    {
        //currently returns a temporary list that represents all activities done by user
        return [
            'tempact7', 'tempact9'
        ]
    }

    //returns list of all activities stored in the database
    //may be moved to a more general class as this is too general for the scope of activity.
    getEveryActivities()
    {
        //currently returns a temporary list that represents all activities stored in the database
        return [
            'tempact1', 'tempact2', 'tempact3', 'tempact4', 'tempact5', 'tempact6', 'tempact7', 'tempact9'
        ];
    }

    //returns the value used to display activity in list
    parseActivity(props)
    {
        //currently simply returns the item as is because the array expected is a simple literal string
        return <ul>props.activity</ul>;
    }

    //Generate the list of activities to view depending on the list provided
    //todo: figure out how to make react.js get functions
    generateListOfActivities(props)
    {
        /*
        return (
            <li>
                {props.list.map(function(value, index, array){
                    return <parseActivity activity={value} />
                })}
                <ul>test</ul>
            </li>
        );
        */

        return (<h3>test</h3>);
    }

    //The render function for students
    renderStudent()
    {
        return (
            <div>
                <h2>This is the activity page for students</h2>
                <generateListOfActivities list={this.activities.pending} />
            </div>
        );
    }

    //The render function that gets called whenever this page is loaded
    render() {
        return this.renderStudent();
    }
}

export default RequireAuth(Activity);
