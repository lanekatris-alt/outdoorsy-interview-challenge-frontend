export interface RentalsResponse {
  data: Rental[];
  included: Included[];
}

export interface Rental {
  id: string;
  attributes: Attributes;
  custom_image_url: string; // My custom added image lookup value, needs better naming
  relationships: {
    primary_image: {
      data: {
        id: string;
        type: string;
      };
    };
  };
}

export interface Attributes {
  name: string;
}

export interface Included {
  attributes: {
    url: string;
  };
  id: string;
  type: string;
}
