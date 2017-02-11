import React from 'react';
import RequireAuth from 'components/Auth/RequireAuth.js';

class Activity extends React.Component {
    constructor(props)
    {
        super(props)
        this.testState = { role: 'STUDENT' }
    }

    render() {
        switch (this.testState.role) {
            case 'STUDENT':
                return (
                    <div>
                        <h2>This is the activity page for students</h2>
                    </div>
                );
                break;
            case 'COORDINATOR':
                return (
                    <div>
                        <h2>This is the activity page for coordinators</h2>
                    </div>
                );
                break;
            case 'GUEST':
                return (
                    <div>
                        <h2>Hide activity page for guests</h2>
                    </div>
                );
                break;
            default:
                return (
                    <div>
                        <h2>Error, this page should not be loaded.  Invalid authstate</h2>
                    </div>
                );
                break;
        }
    }
}

export default RequireAuth(Activity);
