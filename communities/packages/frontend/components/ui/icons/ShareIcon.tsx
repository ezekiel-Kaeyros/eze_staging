import React, { FC } from 'react';
import theme from '../../../theme';
import get from 'lodash/get';

interface ShareIconProps {
  width?: string;
  color?: string;
}

const ShareIcon: FC<ShareIconProps> = ({ width, color }) => {
  const DEFAULT_WIDTH = '18';
  const DEFAULT_COLOR = theme.colors.general.textSecondary;

  return (
    // <svg
    //   width={width || DEFAULT_WIDTH}
    //   fill={get(theme.colors.general, color) || DEFAULT_COLOR}
    //   viewBox="0 -22 512 511"
    //   xmlns="http://www.w3.org/2000/svg"
    // >
    //   <path d="M512 233.82L299.223.5v139.203h-45.239C113.711 139.703 0 253.414 0 393.687v73.77l20.094-22.02a360.573 360.573 0 01266.324-117.5h12.805v139.204zm0 0" />
    // </svg>

    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        opacity="0.4"
        d="M7.11039 5.96003L16.1304 2.95003C20.1804 1.60003 22.3804 3.81003 21.0404 7.86003L18.0304 16.88C16.0104 22.95 12.6904 22.95 10.6704 16.88L9.78039 14.2L7.10039 13.31C1.04039 11.3 1.04039 7.99003 7.11039 5.96003Z"
        fill="#47586E"
      />
      <path d="M12.1191 11.6301L15.9291 7.81006L12.1191 11.6301Z" fill="#47586E" />
      <path
        d="M12.1205 12.38C11.9305 12.38 11.7405 12.31 11.5905 12.16C11.3005 11.87 11.3005 11.39 11.5905 11.1L15.3905 7.28C15.6805 6.99 16.1605 6.99 16.4505 7.28C16.7405 7.57 16.7405 8.05 16.4505 8.34L12.6505 12.16C12.5005 12.3 12.3105 12.38 12.1205 12.38Z"
        fill="#292D32"
      />
    </svg>
  );
};

export default ShareIcon;
