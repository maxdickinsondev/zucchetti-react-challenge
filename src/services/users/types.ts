type Geo = {
  lat: string;
  lng: string;
};

type Address = {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  geo: Geo;
};

type Company = {
  name: string;
  catchPhrase: string;
  bs: string;
};

export type User = Address &
  Company & {
    id: number;
    name: string;
    username: string;
    email: string;
    phone: string;
    website: string;
  };
