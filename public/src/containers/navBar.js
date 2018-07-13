import { connect } from 'react-redux';
import { toggleNavBar, setSelectedNavItem, openMenuElement } from '../actions/index';
import NavBar from '../components/navbar';

const mapStateToProps = (state) => {
  return {
    isOpen: state.navBar.isOpen,
    selected: state.navBar.selected,
    children: state.navItems,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onClick: () => {
      dispatch(toggleNavBar());
    },
    onMenuOpen: ( index ) => {
      dispatch( openMenuElement(index) );
    },
    onItemClick: ( ref, props, title, data ) => {
      dispatch(setSelectedNavItem(ref));
      console.log( props );
      console.log( title );
      console.log( data );
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);