import {useState, useRef, useCallback, useEffect} from 'react';

export function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

export function validateEmail(email) {
    var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

export function useStateAsync(initialState) {
    const [state, setState] = useState(initialState);
    const resolveState = useRef();
    const isMounted = useRef(false);
  
    useEffect(() => {
      isMounted.current = true;
  
      return () => {
        isMounted.current = false;
      };
    }, []);
  
    useEffect(() => {
      if (resolveState.current) {
        resolveState.current(state);
      }
    }, [state]);
  
    const setAsyncState = useCallback(
      newState =>
        new Promise(resolve => {
          if (isMounted.current) {
            resolveState.current = resolve;
            setState(newState);
          }
        }),
      []
    );
  
    return [state, setAsyncState];
  };

