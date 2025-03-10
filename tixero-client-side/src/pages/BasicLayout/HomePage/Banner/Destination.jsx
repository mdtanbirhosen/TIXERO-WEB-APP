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
      <div className='bg-white rounded-lg w-2/3'>
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
                    bgcolor: value === "1" ? '#E30B13' : 'transparent',
                    color: value === "1" ? 'white' : 'black',
                    borderRadius:"8px 0px 0px 0px",
                    '&.Mui-selected': { bgcolor: '#E30B13', color: 'white' }
                  }}
                />
                <Tab 
                  label="Item Two" 
                  value="2" 
                  sx={{
                    bgcolor: value === "2" ? '#E30B13' : 'transparent',
                    color: value === "2" ? 'white' : 'black',
                    borderRadius:"0px 8px 0px 0px",
                    '&.Mui-selected': { bgcolor: '#E30B13', color: 'white' }
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
