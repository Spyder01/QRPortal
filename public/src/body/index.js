import { connect } from 'react-redux';
import ContentBody from './body-model';

const mapStateToProps = (state) => {
  return {
    view: state.contentBody.view,
    listCount: state.contentBody.listCount,
    viewType: state.viewType.viewType,
    searchVisible: state.search.resultsVisible,
    isComparing: state.compare.isComparing
  };
};

export default connect(mapStateToProps)(ContentBody);