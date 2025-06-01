"use client"

import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import { useState } from 'react';

function CustomTabPanel(props) {
    const { children, value, index } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
        >
            {value === index &&
                <Box>
                    {children}
                </Box>
            }
        </div>
    );
}

export default function BasicTabs({ tabsList, children }) {

    const [value, setValue] = useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <Box sx={{ width: '100%' }}>
            <Tabs
                sx={{
                    borderBottom: 1, borderColor: 'divider', "& .MuiTabs-indicator": {
                        backgroundColor: " rgba(0, 0, 0, 0.699)",
                    },
                    "& .MuiTab-root.Mui-selected": {
                        color: 'black'
                    }
                }}
                value={value}
                onChange={handleChange}
                centered
            >
                {tabsList.map((item, index) =>
                    <Tab label={item} key={index} />
                )}
            </Tabs>
            {children.map((item, index) => (
                <CustomTabPanel value={value} index={index} key={index}>
                    {item}
                </CustomTabPanel>
            ))}
        </Box>
    );
}
