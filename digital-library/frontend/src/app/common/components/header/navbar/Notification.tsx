import React, { FC } from 'react';

type Measurements = {
  size: number;
  height: number;
  width: number;
};
export const NotificationIcon: FC<Measurements> = ({
  size,
  height,
  width,
  ...props
}) => {
  return (
    <svg
      width={size || width || 24}
      height={size || height || 24}
      {...props}
      viewBox="0 0 24 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12.0196 3.41003C8.7096 3.41003 6.0196 6.10003 6.0196 9.41003V12.3C6.0196 12.91 5.7596 13.84 5.4496 14.36L4.2996 16.27C3.5896 17.45 4.0796 18.76 5.3796 19.2C9.6896 20.64 14.3396 20.64 18.6496 19.2C19.8596 18.8 20.3896 17.37 19.7296 16.27L18.5796 14.36C18.2796 13.84 18.0196 12.91 18.0196 12.3V9.41003C18.0196 6.11003 15.3196 3.41003 12.0196 3.41003Z"
        // stroke="#0C1618"
        // stroke-width="1.5"
        // stroke-miterlimit="10"
        // stroke-linecap="round"
      />
      <path
        d="M13.8699 3.69994C13.5599 3.60994 13.2399 3.53994 12.9099 3.49994C11.9499 3.37994 11.0299 3.44994 10.1699 3.69994C10.4599 2.95994 11.1799 2.43994 12.0199 2.43994C12.8599 2.43994 13.5799 2.95994 13.8699 3.69994Z"
        // stroke="#0C1618"
        // stroke-width="1.5"
        // stroke-miterlimit="10"
        // stroke-linecap="round"
        // stroke-linejoin="round"
      />
      <path
        d="M15.0195 19.5601C15.0195 21.2101 13.6695 22.5601 12.0195 22.5601C11.1995 22.5601 10.4395 22.2201 9.89953 21.6801C9.35953 21.1401 9.01953 20.3801 9.01953 19.5601"
        // stroke="#0C1618"
        // stroke-width="1.5"
        // stroke-miterlimit="10"
      />
    </svg>
  );
};
