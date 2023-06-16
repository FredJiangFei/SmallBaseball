import React from 'react';
import { ResponseResult, ResponseStatus } from '../types/responseResult';

function asyncReducer(state: any, action: any): ResponseResult {
  switch (action.type) {
    case ResponseStatus.Pending: {
      return { status: ResponseStatus.Pending, data: null, error: null };
    }
    case ResponseStatus.Resolved: {
      return { status: ResponseStatus.Resolved, data: action.data, error: null };
    }
    case ResponseStatus.Rejected: {
      return { status: ResponseStatus.Rejected, data: null, error: action.error };
    }
    default: {
      throw new Error(`Unhandled action type: ${action.type}`);
    }
  }
}

const useAsync = (asyncCallback: any, initialState: any, dependencies: any) => {
  const [state, dispatch] = React.useReducer(asyncReducer, {
    status: 'idle',
    data: null,
    error: null,
    ...initialState,
  });

  React.useEffect(() => {
    const promise = asyncCallback();
    if (!promise) {
      return;
    }

    dispatch({ type: ResponseStatus.Pending });
    promise.then(
      (res: any) => dispatch({ type: ResponseStatus.Resolved, data: res.value }),
      (error: any) => dispatch({ type: ResponseStatus.Rejected, error }),
    );
  }, dependencies);

  return state;
};

export default useAsync;
