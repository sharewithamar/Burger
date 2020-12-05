import reducer from './auth';
import * as actionTypes from '../actions/actionTypes';
import { act } from 'react-test-renderer';

describe('auth reducer', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual({
      token: null,
      userId: null,
      error: null,
      loading: false,
      authRedirectPath: '/',
    });
  });

  it('should store the token upon login', () => {
    expect(
      reducer(
        {
          token: null,
          userId: null,
          error: null,
          loading: false,
          authRedirectPath: '/',
        },
        {
          type: actionTypes.AUTH_SUCCESS,
          idToken: 'someToken',
          userId: 'some userid',
        }
      )
    ).toEqual({
      token: 'someToken',
      userId: 'some userid',
      error: null,
      loading: false,
      authRedirectPath: '/',
    });
  });
});
