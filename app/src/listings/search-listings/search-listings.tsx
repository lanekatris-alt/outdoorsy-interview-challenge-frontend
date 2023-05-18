"use client";

import { useGetRentals } from "../use-get-rentals";
import { Listing } from "../listing/listing";
import "./search-listings.css";
import { useEffect, useState } from "react";
import { Rental } from "@/listings/types";

interface SearchListingsProps {
  searchTerm: string;
  setSearchTerm: (newSearchTerm: string) => void;
  rentals: Rental[];
  loading: boolean;
  error?: string;
}

export function SearchListings({
  searchTerm,
  setSearchTerm,
  rentals = [],
  loading,
  error,
}: SearchListingsProps) {
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
          imageUrl={x.custom_image_url}
          name={x.attributes.name}
        />
      ))}

      {searchTerm && !error && !loading && !rentals.length && (
        <div>
          No results for <b>{searchTerm}</b>
        </div>
      )}

      {error && <div className="red">Failed to search: {error}</div>}
    </>
  );
}

// I'm not saying I like this style of components, but I wanted to show different storybook states.
// I've seen this done a few ways, would love to hear how you all organize your components

// With more time I would show price and other `attribute` data

// I would show: "Showing result 4 of 250" with more time
export default function SearchListingsWired() {
  const [searchTerm, setSearchTerm] = useState("");
  const { rentals, refetch, loading } = useGetRentals();

  // Would want to debounce this input
  useEffect(() => {
    refetch(searchTerm);
  }, [searchTerm, refetch]);

  return (
    <SearchListings
      searchTerm={searchTerm}
      setSearchTerm={setSearchTerm}
      rentals={rentals}
      loading={loading}
    />
  );
}
