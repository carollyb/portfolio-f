import { Box, Button, Tab, Tabs, Typography } from '@mui/material';
import { useState } from 'react';
import {
  ButtonsWrapperSx,
  ButtonSx,
  DividerSx,
  TabsWrapperSx,
  WrapperSx,
} from './styles';

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

interface FooterProps {
  viewMode: 'grid' | 'list';
  setViewMode: (view: 'grid' | 'list') => void;
  setTag: (tag: string) => void;
}

export const Footer = ({ setViewMode, setTag, viewMode }: FooterProps) => {
  const [value, setValue] = useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };
  return (
    <Box sx={WrapperSx}>
      <Box sx={ButtonsWrapperSx}>
        <Button
          sx={{
            ...ButtonSx,
            backgroundColor:
              viewMode === 'grid' ? 'primary.main' : 'background.paper',
          }}
          onClick={() => setViewMode('grid')}
        >
          <Typography
            variant='subtitle2'
            sx={{
              color: viewMode === 'grid' ? 'background.paper' : '#C4C4C4',
            }}
          >
            Grid
          </Typography>
        </Button>
        <Button
          sx={{
            ...ButtonSx,
            backgroundColor:
              viewMode === 'list' ? 'primary.main' : 'background.paper',
          }}
          onClick={() => setViewMode('list')}
        >
          <Typography
            variant='subtitle2'
            sx={{
              color: viewMode === 'list' ? 'background.paper' : '#C4C4C4',
            }}
          >
            List
          </Typography>
        </Button>
      </Box>
      <Box sx={TabsWrapperSx}>
        <Box sx={DividerSx}>
          <Tabs value={value} onChange={handleChange}>
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
