import "./listing.css";

interface ListingProps {
  imageUrl: string;
  name: string;
}

// I could use Next images here
export function Listing({ imageUrl, name }: ListingProps) {
  return (
    <div className="listing">
      <img
        alt={name}
        src={imageUrl}
        height={150}
        width={150}
        className="rounded"
      />
      {name}
    </div>
  );
}
