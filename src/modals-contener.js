import React, { Component } from 'react';
import { connect } from 'react-redux';
import { map } from 'lodash';
import { eventNames } from './event-emmiter';

import Modal from './modal';

import { openModalAction } from './actions';

class ModalsContener extends Component {
  componentDidMount() {
    document.addEventListener(eventNames.open, (event) => {
      console.log('~~~> kk-react-modals ', eventNames.open, event.detail);

      const id = Math.floor(Math.random() * 100);
      this.props.openModalAction(id, event.detail);
    });
  }

  render() {
    return (
      <div className="kk-modals-contener">
        {map(this.props.modals, modal => (
          <Modal closeModal={() => {}} store={this.props.store}>
            xxxxxx
          </Modal>
        ))}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  modals: state.modals,
});

export default connect(mapStateToProps, { openModalAction })(ModalsContener);
