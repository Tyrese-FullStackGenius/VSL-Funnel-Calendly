import React from 'react';
import { InlineWidget } from 'react-calendly';
import { CALENDLY_LINK } from '../const/constants';

function Schedule(props) {
    return (
        <div>
            <InlineWidget
                url={CALENDLY_LINK}
                prefill={{
                    email: props.email,
                    name: props.username,
                }} />
        </div>
    )
}

export default Schedule;