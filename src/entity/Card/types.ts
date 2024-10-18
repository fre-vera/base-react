type CardData = {
  albumId: number;
  id: number;
  title: string;
  url: string;
  thumbnailUrl: string;
};

export type CardProps = {
  cardData: CardData;
};
