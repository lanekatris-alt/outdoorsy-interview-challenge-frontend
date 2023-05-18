"use client";

import { useGetRentals } from "./use-get-rentals";
import { Listing } from "./listing";
import "./search-listings.css";
import { useEffect, useState } from "react";

export function SearchListings() {
  const [searchTerm, setSearchTerm] = useState("");
  const { rentals, refetch, loading, called } = useGetRentals();
  console.log("rentals", rentals);
  console.log("searchterm", searchTerm);

  // Would want to debounce this input
  useEffect(() => {
    // if (!searchTerm) return;
    refetch(searchTerm);
  }, [searchTerm, refetch]);

  return (
    <>
      <input
        autoFocus
        type="search"
        className="search"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      {rentals.map((x) => (
        <Listing
          key={x.id}
          imageUrl={x.attributes.primary_image_url}
          name={x.attributes.name}
        />
      ))}
      {loading && <div>Loading...</div>}
      {!loading && !rentals.length && (
        <div>
          No results for <b>{searchTerm}</b>
        </div>
      )}
    </>
  );
}
