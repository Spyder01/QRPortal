import React from 'react';
import NavBar from './NavBar';
import { createClassName } from '../common/lib';
import MKT_Wrapper from '../marketing/mkt-pubLink';
import ConnectedNav from '../view-navigation/vn-model';

const mktContent = [
  {
    id: '594073bf-120d-450e-b17e-65c45ec78702',
    alt: 'SAST remains the best prerelease testing tool for catching tricky data flow  issues and issues such as cross-site request forgery (CSRF) that tools such as  dynamic application security testing have trouble finding. The Forrester Wave:  Static Application Security Testing, Q4 2017 Analyst Paper',
    href: 'https://cta-redirect.hubspot.com/cta/redirect/10154/594073bf-120d-450e-b17e-65c45ec78702'
  },
  {
    id: 'd5369b59-02f3-4ccc-b80c-c5975b534976',
    alt: 'This study by CAST reveals potential reasons for poor software quality that  puts businesses at risk, including clashes with management and little  understanding of system architecture. What Motivates Today’s Top Performing Developers Survey',
    href: 'https://cta-redirect.hubspot.com/cta/redirect/10154/d5369b59-02f3-4ccc-b80c-c5975b534976'
  }
];

export default class App extends React.PureComponent{
  render(){
    return (
      <div className={createClassName( 'flxr', 'txtcenter' )}>
        <ConnectedNav/>
        <div className={'marketing-content'}>
          {mktContent.map( (e, i) => <MKT_Wrapper key={i} id={e.id} alt={e.alt} href={e.href}/> )}
        </div>
      </div>
    );
  }
}