export interface RentalsResponse {
  data: Rental[];
}

export interface Rental {
  id: string;
  attributes: Attributes;
}

export interface Attributes {
  name: string;
  primary_image_url: string;
}
