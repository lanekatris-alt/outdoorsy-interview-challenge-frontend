import { useCallback, useEffect, useState } from "react";
import { client } from "./axios-instance";
import { Daum, RentalsResponse } from "./types";

export function useGetRentals() {
  const [rentals, setRentals] = useState<Daum[]>([]);
  const [loading, setLoading] = useState(false);
  // const [called, ]

  // useEffect(() => {
  //   refetch('trailer')
  // }, []);

  const refetch = useCallback(async (searchTerm: string, limit = 5) => {
    if (!searchTerm) {
      setRentals([]);
      return;
    }
    setLoading(true);
    const { data } = await client.get<RentalsResponse>(
      `/rentals?filter[keywords]=${searchTerm}&page[limit]=${limit}`
    );
    setRentals(data.data);
    setLoading(false);
  }, []);

  return {
    rentals,
    refetch,
    loading,
  };
}
