export interface ImageContainerProps {
    heartImage: any;
    mainImage: any;
    backButtonImage: any;
    title: string;
    ratingStarImage: any;
    ratingValue: string;
    ratingCount: string;
    price: string;
}
export interface Addon {
    img: any;
    name: string;
    price: string;
}

export interface AddonsProps {
    addOns: Addon[];
}