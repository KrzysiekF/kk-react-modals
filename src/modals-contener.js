import React, { Component } from 'react';
import { connect } from 'react-redux';
import { map, size } from 'lodash';
import { eventNames } from './event-emmiter';

import Modal from './modal';

import { openModalAction , closeModalAction } from './actions';

class ModalsContener extends Component {
  componentDidMount() {
    document.addEventListener(eventNames.open, (event) => {
      console.log('~~~> kk-react-modals ', eventNames.open, event.detail);

      const id = Math.floor(Math.random() * 100);
      this.props.openModalAction(id, { id, ...event.detail });
    });

    document.addEventListener(eventNames.close, (event) => {
      console.log('~~~> kk-react-modals ', eventNames.close, event.detail);

      this.props.closeModalAction(event.detail.id);
    });
  }

  render() {
    return (
      <div className="kk-modals-contener">
        {map(this.props.modals, (modal, id) => (
          <Modal closeModal={() => {}} id={id} {...modal.settings} store={this.props.store}>
            xxxxxx
          </Modal>
        ))}
        {size(this.props.modals) > 10 ? <div className="kk-modal-overflow" /> : ''}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  modals: state.modals,
});

export default connect(mapStateToProps, { openModalAction, closeModalAction })(ModalsContener);
