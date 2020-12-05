import React, { Fragment, Component, PureComponent } from 'react';
import classes from './Modal.module.css';
import Backdrop from '../Backdrop/Backdrop';

/* const modal = (props) => {
  console.log('being called for render');
  return (
    <Fragment>
      <Backdrop show={props.show} clicked={props.modalClosed} />
      <div
        className={classes.Modal}
        style={{
          transform: props.show ? 'translateY(0)' : 'translateY(-100vh)',
          opacity: props.show ? '1' : '0',
        }}
      >
        {props.children}
      </div>
    </Fragment>
  );
};

export default React.memo(modal); */

class Modal extends PureComponent {
  /*   shouldComponentUpdate(nextProps, nextState) {
    console.log('nextProps.children', nextProps.children);
    console.log('this.props.children', this.props.children);

    return (
      nextProps.show !== this.props.show ||
      nextProps.children !== this.props.children
    );
  }

  componentDidUpdate() {
    console.log('[Modal], Did update');
  }
 */
  render() {
    return (
      <Fragment>
        <Backdrop show={this.props.show} clicked={this.props.modalClosed} />
        <div
          className={classes.Modal}
          style={{
            transform: this.props.show ? 'translateY(0)' : 'translateY(-100vh)',
            opacity: this.props.show ? '1' : '0',
          }}
        >
          {this.props.children}
        </div>
      </Fragment>
    );
  }
}

export default Modal;
