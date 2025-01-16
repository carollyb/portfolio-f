import { Box, Button, Tab, Tabs, Typography } from '@mui/material';
import { useState } from 'react';

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

interface FooterProps {
  setViewMode: (view: 'grid' | 'list') => void;
  setTag: (tag: string) => void;
}

export const Footer = ({ setViewMode, setTag }: FooterProps) => {
  const [value, setValue] = useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        position: 'fixed',
        bottom: '0px',
        width: '100%',
        height: '80px',
        backgroundColor: 'background.paper',
        paddingX: 10,
        borderTop: '2px solid #1300A2',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'row',
          gap: '20px',
        }}
      >
        <Button onClick={() => setViewMode('grid')}>
          <Typography
            variant='subtitle2'
            sx={{ color: 'primary.contrastText' }}
          >
            Grid
          </Typography>
        </Button>
        <Button onClick={() => setViewMode('list')}>
          <Typography
            variant='subtitle2'
            sx={{ color: 'primary.contrastText' }}
          >
            List
          </Typography>
        </Button>
      </Box>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'row',
          gap: '20px',
        }}
      >
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label='basic tabs example'
          >
            <Tab
              onClick={() => setTag('all')}
              label='View All'
              {...a11yProps(0)}
            />
            <Tab
              onClick={() => setTag('ux')}
              label='UX/UI Design'
              {...a11yProps(1)}
            />
            <Tab
              onClick={() => setTag('art')}
              label='Art Direction'
              {...a11yProps(2)}
            />
            <Tab
              onClick={() => setTag('illustration')}
              label='Illustrations'
              {...a11yProps(2)}
            />
          </Tabs>
        </Box>
      </Box>
    </Box>
  );
};
