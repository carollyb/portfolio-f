import { Avatar, Box } from '@mui/material';
import { AvatarSx, IconContainerSx } from './styles';
import Image from 'next/image';

export const ArrowLink = () => {
  return (
    <Avatar sx={AvatarSx}>
      <Box sx={IconContainerSx}>
        <Image
          src='/arrow.png'
          alt='arrow'
          width={27}
          height={27}
          layout='responsive'
        />
      </Box>
    </Avatar>
  );
};
