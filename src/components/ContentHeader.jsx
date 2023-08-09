import React from 'react';

function ContentHeader(props) {
    return (
        <>
            <section class="content-header">
                <h1>
                    { props.headerTitle }
                </h1>
            </section>
        </>
    )
}

export default ContentHeader;