import React from 'react';

class Future extends React.Component {
    render() {
        return (
            <React.Fragment>
                <h2>Future Application Features</h2>
                <p>
                    Here is a list of features that are planned for this site.
                </p>
                <ul>
                    <li>
                        <strong>Trail Conditions:</strong> The ability to update trail conditions for your trail for the riding community to view.
                    </li>
                    <li>
                        <strong>User Trail Reporting:</strong> If trail users find issues on the trail they will be able to report them directly to the trail organization using this app.
                    </li>
                </ul>
            </React.Fragment>
        );
    }
}

export default Future;