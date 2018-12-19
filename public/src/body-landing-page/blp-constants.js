import { Imgs } from '../view-navigation/vn-constants';

export const SECTIONSQUERY = 'aip/web-navigation';
export const QUERYFAILED = {
  value: 'ERROR: Failed to retrieve navigation data, please try again later.',
  href: '#'
};

export const CLASSES = {
  container: 'qrp_lpCntr',
  SubContainer: 'qrp_lpSCntr',
  iconContainer: 'qrp_lpiCntr',
  welcomeText: 'qrp_lpwtxtCntr',
  navigation: 'qrp_lpnav',
  link: 'qrp_lpslink',
  linkBlock: 'qrp_lpslinkBlk',
  linkContainer: 'qrp_lpslinkCntr',
  linkBlockTitle: 'qrp_lpslinkBlkTlt',
  linkIcon: 'qrp_lpslinkIcon',
  separator: 'qrp_lpSsep',
  title: 'qrp_lptitleCntr',
  logoContainer: 'qrp_lplogoCntr',
  castLogo: 'qrp_lpcastlogo',
  extraInfoContainer: 'qrp_lpsecInfoCntr',
  sectionInfo: 'qrp_lpsecInfo',
  hideOpacity: 'qrp_lpOpa0'
};

export const _oIconStyle = {
  backgroundImage: 'url(' + Imgs.logo.default + ')',
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'center',
  backgroundSize: '80%'
};

export const WELCOMETEXT = 'Welcome to CAST Best Practices, start browsing or searching';
export const TITLE = 'Best Practices';