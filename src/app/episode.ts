export interface Episode {
    id: number;
    name: string;
    air_date: string;
    episode: string;
    characters: string[]; // Array of URLs to characters who have been seen in the episode
}