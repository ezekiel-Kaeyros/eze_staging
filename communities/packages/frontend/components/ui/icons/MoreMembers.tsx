import React, { FC } from 'react';
import theme from '../../../theme';

interface MoreMemebersProps {
  width?: string;
  color?: string;
}

const MoreMemebers: FC<MoreMemebersProps> = ({ width }) => {
  const DEFAULT_WIDTH = '22';

  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        opacity="0.4"
        d="M13.2297 8.52002L8.17969 12.31V17.92C8.17969 18.88 9.33969 19.36 10.0197 18.68L15.1997 13.5C16.0297 12.67 16.0297 11.32 15.1997 10.49L13.2297 8.52002Z"
        fill="#015E44"
      />
      <path
        d="M8.17969 6.07993V12.3099L13.2297 8.51993L10.0197 5.30993C9.33969 4.63993 8.17969 5.11993 8.17969 6.07993Z"
        fill="#015E44"
      />
    </svg>
  );
};

export default MoreMemebers;
