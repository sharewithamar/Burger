/*
import React, { Fragment, Component } from 'react';
import Modal from '../../components/UI/Modal/Modal';

const withErrorHandler = (WrappedComponent, axios) => {
  return class extends Component {
    state = { error: null };

    ///using constructor instead of component did mount
    //since  componentDidmount will only happen after child's component did mount
    //use UNSAFE_componentWillMount instead of constructor if required

    constructor(props) {
      super(props);
      this.reqInterceptor = axios.interceptors.request.use((req) => {
        this.setState({ error: null });
        return req;
      });
      this.resInterceptor = axios.interceptors.response.use(
        (res) => res,
        (error) => {
          //this.setState({ error: error }); - it will cause issue
          this.state = { error: error };
          return Promise.reject(error);
        }
      );
    }

    componentWillUnmount() {
      //console.log('Will unmount', this.reqInterceptor, this.resInterceptor);
      axios.interceptors.request.eject(this.reqInterceptor);
      axios.interceptors.response.eject(this.resInterceptor);
    }
    errorConfirmedHandler = () => {
      this.setState({ error: null });
    };
    render() {
      return (
        <Fragment>
          <Modal
            show={this.state.error}
            modalClosed={this.errorConfirmedHandler}
          >
            {this.state.error ? this.state.error.message : null}
          </Modal>
          <WrappedComponent {...this.props} />;
        </Fragment>
      );
    }
  };
};

export default withErrorHandler;
*/

import React, { useEffect, useState } from 'react';
import Modal from '../../components/UI/Modal/Modal';
const withErrorHandler = (WrappedComponent, axios) => {
  const WithErrorHandler = (props) => {
    const [error, setError] = useState(null);
    const requestInterceptor = axios.interceptors.request.use((req) => {
      setError(null);
      return req;
    });
    const responseInterceptor = axios.interceptors.response.use(
      (res) => res,
      (error) => {
        setError(error);
        console.log('WithErrorHandler: ', error);
        return Promise.reject(error);
      }
    );
    useEffect(() => {
      return () => {
        axios.interceptors.request.eject(requestInterceptor);
        axios.interceptors.response.eject(responseInterceptor);
      };
    }, [requestInterceptor, responseInterceptor]);
    return (
      <>
        <Modal show={error !== null} modalClosed={() => setError(null)}>
          {error !== null ? error.message : null}
        </Modal>
        <WrappedComponent {...props} />
      </>
    );
  };
  return WithErrorHandler;
};
export default withErrorHandler;
