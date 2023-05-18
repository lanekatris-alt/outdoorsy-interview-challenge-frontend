"use client";

import { useGetRentals } from "../use-get-rentals";
import { Listing } from "../listing/listing";
import "./search-listings.css";
import { useEffect, useState } from "react";

export function SearchListings() {
  const [searchTerm, setSearchTerm] = useState("");
  const { rentals, refetch, loading } = useGetRentals();

  // Would want to debounce this input
  useEffect(() => {
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
      <div className={loading ? "show" : "hide"}>Loading...</div>

      {rentals.map((x) => (
        <Listing
          key={x.id}
          imageUrl={x.attributes.primary_image_url}
          name={x.attributes.name}
        />
      ))}

      {searchTerm && !loading && !rentals.length && (
        <div>
          No results for <b>{searchTerm}</b>
        </div>
      )}
    </>
  );
}
