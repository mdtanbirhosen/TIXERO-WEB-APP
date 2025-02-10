import * as React from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';

const Destination = () => {
    const [value, setValue] = React.useState('1');

    const handleChange = (event, newValue) => {
      setValue(newValue);
    };

    return (
      <div className='bg-white rounded-xl'>
        <Box sx={{ width: '100%', typography: 'body1' }}>
          <TabContext value={value}>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
              <TabList 
                onChange={handleChange} 
                aria-label="lab API tabs example"
                variant="fullWidth"
                sx={{ '& .MuiTab-root': { width: '50%' } }} 
              >
                <Tab 
                  label="Item One" 
                  value="1" 
                  sx={{
                    bgcolor: value === "1" ? '#7F1891' : 'transparent',
                    color: value === "1" ? 'white' : 'black',
                    borderRadius:"12px 0px 0px 0px",
                    '&.Mui-selected': { bgcolor: '#7F1891', color: 'white' }
                  }}
                />
                <Tab 
                  label="Item Two" 
                  value="2" 
                  sx={{
                    bgcolor: value === "2" ? '#7F1891' : 'transparent',
                    color: value === "2" ? 'white' : 'black',
                    borderRadius:"0px 12px 0px 0px",
                    '&.Mui-selected': { bgcolor: '#7F1891', color: 'white' }
                  }}
                />
              </TabList>
            </Box>
            <TabPanel sx={{color:'black'}} value="1">Item One</TabPanel>
            <TabPanel sx={{color:'black'}} value="2">Item Two</TabPanel>
          </TabContext>
        </Box>
      </div>
    );
};

export default Destination;
