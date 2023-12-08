export interface Location {
    id: number;
    name: string;
    type: string;
    dimension: string;
    residents: string[]; // Array of URLs to characters who have been last seen in the location
}