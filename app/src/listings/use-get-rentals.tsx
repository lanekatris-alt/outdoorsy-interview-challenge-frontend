import { useCallback, useState } from "react";
import { client } from "./axios-instance";
import { Rental, RentalsResponse } from "./types";

// I'm going for a similar look and feel to react-query
// No error handling
// Nothing is debounced

// I ran out of time so the image lookup below his hacky 😅
// Finding the proper image with error handling is needed below
// I wanted to abstarct this image lookup to the hook since it deals with data, and I didn't want to do this lookup on each rerender
export function useGetRentals() {
  const [rentals, setRentals] = useState<Rental[]>([]);
  const [loading, setLoading] = useState(false);

  const refetch = useCallback(async (searchTerm: string, limit = 5) => {
    if (!searchTerm) {
      setRentals([]);
      return;
    }
    setLoading(true);
    const { data } = await client.get<RentalsResponse>(
      `/rentals?filter[keywords]=${searchTerm}&page[limit]=${limit}`
    );
    setRentals(
      data.data.map((rental) => ({
        ...rental,
        custom_image_url: data.included.find(
          (i) =>
            i.type === "images" &&
            i.id === rental.relationships.primary_image.data.id
        ).attributes.url,
      }))
    );
    setLoading(false);
  }, []);

  return {
    rentals,
    refetch,
    loading,
  };
}
