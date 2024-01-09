// PageSection.jsx
import React from 'react';

const PageSection = ({ IconComponent, pageName }) => (
    <div className='page-section'>
        <div className='page-icon'>
            <IconComponent />
        </div>
        <div className='page-name'>
            {pageName}
        </div>
    </div>
);

export default PageSection;