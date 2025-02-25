import { Box, Button, styled, Tab, Tabs, Typography } from '@mui/material';
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

const AntTabs = styled(Tabs)({
  borderBottom: '1px solid #e8e8e8',
  '& .MuiTabs-indicator': {
    backgroundColor: 'primary.contrastText',
  },
});

interface StyledTabProps {
  label: string;
  onClick: () => void;
}

const AntTab = styled((props: StyledTabProps) => (
  <Tab disableRipple {...props} />
))(({ theme }) => ({
  textTransform: 'none',
  minWidth: 0,
  [theme.breakpoints.up('sm')]: {
    minWidth: 0,
    fontSize: '14px',
  },
  fontSize: '10px',
  fontWeight: theme.typography.fontWeightRegular,
  marginRight: theme.spacing(1),
  color: 'text.primary',
  fontFamily: ['__Inter_81dec9', '__Inter_Fallback_81dec9'],
  '&:hover': {
    color: 'primary.contrastText',
    opacity: 1,
  },
  '&.Mui-selected': {
    color: 'primary.contrastText',
    fontWeight: theme.typography.fontWeightMedium,
  },
  '&.Mui-focusVisible': {
    backgroundColor: '#d1eaff',
  },
}));

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
          <AntTabs
            value={value}
            onChange={handleChange}
            aria-label='ant example'
          >
            <AntTab
              onClick={() => setTag('all')}
              label='View All'
              {...a11yProps(0)}
            />
            <AntTab
              onClick={() => setTag('ux')}
              label='UX/UI Design'
              {...a11yProps(1)}
            />
            <AntTab
              onClick={() => setTag('art')}
              label='Art Direction'
              {...a11yProps(2)}
            />
            <AntTab
              onClick={() => setTag('illustration')}
              label='Illustrations'
              {...a11yProps(2)}
            />
          </AntTabs>
        </Box>
      </Box>
    </Box>
  );
};
