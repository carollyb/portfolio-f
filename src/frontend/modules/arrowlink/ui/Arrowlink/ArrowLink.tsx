import { Avatar } from '@mui/material';
import { AvatarSx } from './styles';
import Image from 'next/image';

export const ArrowLink = () => {
  return (
    <Avatar sx={AvatarSx}>
      <Image src='/arrow.png' alt='arrow' width={27} height={27} />
    </Avatar>
  );
};
