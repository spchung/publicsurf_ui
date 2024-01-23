export interface PhotoListItem {
  id: number;
  userId: number;
  name: string;
  s3Path: string;
  url: string;
}

export interface PhotoList {
  items: PhotoListItem[]
}