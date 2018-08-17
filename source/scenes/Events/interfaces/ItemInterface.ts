export default interface ItemInterface {
    id: number;
    title: string;
    description?: string;
    date: string;
    price?: number;
    location: string;
    photo?: string[];
}