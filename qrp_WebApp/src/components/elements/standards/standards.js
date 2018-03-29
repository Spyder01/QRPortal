import React from 'react';
import {BodyElement, BodyBlock, BodyTitle, SlidedownMenu, APIQuery} from '../../index';
import {CAST, CISQ, OWASP, CWE} from './elements';
import {businessCrit, qualityStandards} from './queries';
import {Title} from './title';

const idPrefix = 'BC_',
  MainDivClassName = 'bodyRow container block';

export default class Standards extends React.Component {
  constructor(props){
    super(props);
    this.state = {};
  }

  render(){
    return (<div className={MainDivClassName}>
      <BodyTitle value={Title}/>
      <BodyBlock value={[
        <BodyElement value={CAST} onclick={()=> APIQuery(businessCrit, this.getBusinessCritera.bind(this))}/>,
        <BodyElement value={CISQ} onclick={()=> APIQuery(qualityStandards, this.getCisqStandards.bind(this))}/>,
        <BodyElement value={OWASP} onclick={()=> APIQuery(qualityStandards, this.getOwaspStandards.bind(this))}/>,
        <BodyElement value={CWE}/>
      ]}/>
      <SlidedownMenu value={this.state.menuData} visible={this.state.menuVisible} />
    </div>);
  }

  getCisqStandards( res ){
    const data = res.data,
      match = /\/cisq\//g,
      mapping = data.filter( std => match.test(std.href) === true ),
      _mapping = mapping.map( e => {
        return {id: e.id, name:e.id, title:e.name, href: e.href};
      } ),
      menuEls = this.buildSlideDownMenuElements( _mapping ),
      nextScope = CISQ;

    return this.setState({ menuData: menuEls, menuVisible: this.determineMenuVisibility( nextScope ), scope: nextScope });
  }

  getOwaspStandards( res ){
    const data = res.data,
      match = /\/owasp\//g,
      mapping = data.filter( std => match.test(std.href) === true ),
      _mapping = mapping.map( e => {
        return {id: e.id, name:e.id, title:e.name, href: e.href};
      } ),
      menuEls = this.buildSlideDownMenuElements( _mapping ),
      nextScope = OWASP;

    return this.setState({ menuData: menuEls, menuVisible: this.determineMenuVisibility( nextScope ), scope: nextScope });
  }

  getBusinessCritera( res ){
    const data = res.data,
      out = data.map( ( c ) => { 
        return { id: idPrefix + c.id, name: c.name, href: c.href} ;
      });
    // do something with output
    const menuEls = this.buildSlideDownMenuElements( out ),
      nextScope = CAST;
    return this.setState({ menuData: menuEls, menuVisible: this.determineMenuVisibility( nextScope ), scope: nextScope });
  }

  determineMenuVisibility( nextScope ){
    return ( (this.state.scope === nextScope && this.state.menuVisible ) ? false : true );
  }

  buildSlideDownMenuElements( data ){
    return data.map( e => <BodyElement value={e.name} href={e.href} id={e.id} title={e.title}/> );
  }
}
