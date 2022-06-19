export interface Record {
  records: Year[];
}

export interface Year {
  id: string;
  createdTime: string;
  fields: ImageRoot;
}

interface ImageRoot {
  Name: number;
  Image: Image;
}

interface Image {
  id: string;
  width: number;
  height: number;
  url: string;
  filename: string;
  size: number;
  type: string;
  thumbnails: ThumbnailRoot;
}

interface ThumbnailRoot {
  small: Thumbnail;
  large: Thumbnail;
  full: Thumbnail;
}

interface Thumbnail {
  url: string;
  width: number;
  height: number;
}
