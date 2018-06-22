import React from 'react';

class About extends React.Component {
    render() {
        return (
            <div>
                <h2>About</h2>
                <p>
                    This application is designed to be used by trail building and maintenance organizations to keep track of the conditions of 
                    sections of trail. It is designed to be a useful tool for trail organizations to keep a record of specific parts of the 
                    trail system they manage so they can plan and prioritize maintenance and repairs better.
                </p>
                <p>
                    This tool can used to provide comprehensive reports to the Land Managers (owners of the land the trail is on) for both 
                    information and liability purposes.
                </p>
                <p>
                    By making this application compatible on mobile devices it will be easier for trail workers to reports specific areas of 
                    the trail while they are out in the field.
                </p>
                <p>
                    I hope you find this tool useful and spread they word about this application to other trail organizations. Thank you for 
                    visiting this site. For more information feel free to email me at <a href="mailto:shad.holland@gmail.com">shad.holland@gmail.com</a>.
                </p>
            </div>
        );
    }
}

export default About;