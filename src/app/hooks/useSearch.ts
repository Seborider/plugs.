import useFetch from './useFetch';
import type { Gear } from '../../types';
import { useEffect, useState } from 'react';

export default function useSearch(searchValue: string): {
  gear: Gear[] | null;
  errorMessage: string | null;
  isLoading: boolean;
} {
  const [gear, setGear] = useState<Gear[] | null>(null);
  const { data, errorMessage, isLoading } = useFetch<Gear[]>(
    `/api/gear/search?query=${searchValue}`
  );
  useEffect(() => {
    if (searchValue) {
      setGear(data);
    } else {
      setGear(null);
    }
  }, [searchValue, data]);
  return {
    gear,
    errorMessage,
    isLoading,
  };
}
