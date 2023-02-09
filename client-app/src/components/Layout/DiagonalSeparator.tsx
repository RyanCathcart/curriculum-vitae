import { Box } from '@mui/material';

interface DiagonalSeparatorProps {
  flip?: boolean;
  height?: string;
  colorBottom?: string;
}

/*
This is a React component for separating sections of a website with a diagonal 
line instead of a horizontal line. The way this component works is: a color 
for the bottom-side of the diagonal line (colorBottom) is chosen, and that color
is overlayed onto the previous section of the website.

Properties:
  - flip: Controls whether the diagonal line goes up and to the right, or down 
    and to the right.
  - height: Controls the height and thus the steepness of the diagonal line.
  - colorBottom: Controls the color of the underside of the diagonal line.
*/
export default function DiagonalSeparator(props: DiagonalSeparatorProps) {
  const { flip = false, height = '5vw', colorBottom = 'white' } = props;

  return flip ? (
    <Box
      className='DiagonalSeparator'
      sx={{
        width: 0,
        height: 0,
        borderLeft: '100vw solid transparent',
        borderBottom: height + ' solid ' + colorBottom,
        marginTop: '-' + height,
      }}
    />
  ) : (
    <Box
      className='DiagonalSeparator'
      sx={{
        width: 0,
        height: 0,
        borderRight: '100vw solid transparent',
        borderBottom: height + ' solid ' + colorBottom,
        marginTop: '-' + height,
      }}
    />
  );
}
