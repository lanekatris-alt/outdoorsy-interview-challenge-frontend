import './listing.css'

interface Rental {

}

interface ListingProps {
    imageUrl: string
    name: string
}
export function Listing({imageUrl, name}: ListingProps) {
    return <div className="listing">
        <img alt={name} src={imageUrl} height={150} width={150} className="rounded"/>
        {name}

    </div>
}