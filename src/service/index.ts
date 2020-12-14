/**
 * @desc this is the custome hook to get data from the server.
 * @author Pradeep Gill pradeepgill713@gmail.com
 */

import { useState } from 'react';
import axios from 'axios';
import { useQuery } from 'react-query';

import { CONFIG } from '../config/';

function useGetJoblists(searchQuery: string) {

  const [query, setQuery] = useState(searchQuery);

  // store data retured from axios using react query
  const { data, isLoading, isError } = useQuery(
    query,
    async () => {
      let requestUrl = CONFIG.BASE_URL_DEV;

      if (process.env.NODE_ENV === 'production') {
        requestUrl = CONFIG.BASE_URL_PROD;
      }

      if (query) {
        requestUrl = `${requestUrl}?${query}`;
      }
      return await axios.get(requestUrl);
    },
    {
      refetchOnWindowFocus: false,
    }
  );
  
  // return custome hook response as a const with data, error and loading state
  return [setQuery, { data, isLoading, isError }] as const;
}

export default useGetJoblists;
