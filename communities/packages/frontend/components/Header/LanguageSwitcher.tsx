import Image from 'next/image';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import LocaleIcon from '../../../frontend/public/localeIcon.svg';
import DownIcon from '../../../frontend/public/downIcon.svg';
const LanguageSwitcher = () => {
  const { i18n } = useTranslation();
  
  const router = useRouter();
  const pathName=router.pathname
 const [toggle, setToggle] = useState<boolean>(false);
  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
    router.push(router.pathname, router.asPath, { locale: lng });
  };
const lang=['en','fr']
  return (
    <div>
     <button onClick={() => changeLanguage('en')} className='border-xl px-2 py-1'>English</button>
      <button onClick={() => changeLanguage('fr')}>Français</button>
     
    </div>
  );
};

export default LanguageSwitcher;
