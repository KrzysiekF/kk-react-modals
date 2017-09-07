import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import './assets/styles/modals.css';

class Modal extends Component {
  static defaultProps = {
    title: '',
    big: false,
    children: [],
  };

  static propTypes = {
    title: PropTypes.string,
    big: PropTypes.bool,
    closeModal: PropTypes.func.isRequired,
    children: PropTypes.any,
  };

  constructor(props) {
    super(props);
    this.closeModal = this.closeModal.bind(this);
    this.state = this.props;
  }

  componentDidMount() {
    this.modalTarget = document.createElement('div');
    this.modalTarget.className = 'kk-modal';
    document.body.appendChild(this.modalTarget);
    this._render();
  }

  componentWillReceiveProps(nextProps) {
    this.state = nextProps;
    this._render();
  }

  componentWillUnmount() {
    ReactDOM.unmountComponentAtNode(this.modalTarget);
    document.body.removeChild(this.modalTarget);
  }

  closeModal() {
    this.props.closeModal();
  }

  renderTitle() {
    if (!this.state.title) {
      return false;
    }

    return (
      <div className="kk-modal-title grid-noGutter">
        <div className="col">
          {this.state.title}
        </div>
        <div className="col-1 text-right">
          <button onClick={this.closeModal}>
            <i className="fa fa-times" />
          </button>
        </div>
      </div>
    );
  }

  renderModalBox() {
    return (
      <div className={`kk-modal-box ${this.props.big ? 'big' : ''}`}>
        {this.renderTitle()}
        <div className="kk-modal-body">
          {this.props.children}
        </div>
      </div>
    );
  }

  _render() {
    ReactDOM.render(
      <Provider store={this.props.store}>
        <div>
          {this.renderModalBox()}
          <div className="kk-modal-overflow" />
        </div>
      </Provider>,
      this.modalTarget,
    );
  }

  render() {
    return <noscript />;
  }
}

export default Modal;
