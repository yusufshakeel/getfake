export type AnyAddressType = {
  line1: string,
  line2: string,
  line3: string,
  landmark: string,
  city: string,
  state: string,
  country: string,
  countryCode: {
    alpha2: string,
    alpha3: string,
    numeric: string
  },
  postcode: string,
  latitude: number,
  longitude: number
};