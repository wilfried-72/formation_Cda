import { Box } from '@mui/system';
import React from 'react';
import ForeCast from './ForeCast';

const Main = () => {
    return (
        <Box sx={{ display: 'flex', flexWrap: 'wrap',justifyContent: 'space-evenly' }}>
            <ForeCast />
            <ForeCast />
            <ForeCast />
            <ForeCast />
            <ForeCast />
            <ForeCast />
        </Box>


    );
};

export default Main;