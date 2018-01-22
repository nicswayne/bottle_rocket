/* eslint no-undef:0 */

declare type Details = {
    name: string,
    category: string,
    backgroundImageURL: string,
    contact: {
        formattedPhone: string,
        twitter: string,
    },
    location: {
        address: string,
        city: string,
        lat: number,
        lng: number,
        postalCode: string,
        state: string,
    },
};
