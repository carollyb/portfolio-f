import { Box, Typography } from '@mui/material';
import Image from 'next/image';
import { BoxSx, TextSx } from './styles';
import Link from 'next/link';

export default function ArrowUp() {
  return (
    <Link href='/'>
      <Box sx={BoxSx}>
        <Image src='/arrow_grey.png' alt='arrow' width={29} height={29} />
        <Typography sx={TextSx}>Return to Projects</Typography>
      </Box>
    </Link>
  );
}
