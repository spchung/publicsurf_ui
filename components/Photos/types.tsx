export interface PhotoListItem {
  id: number;
  userId: number;
  userImg: string;
  name: string;
  s3Path: string;
  url: string;
}

export interface PhotoList {
  items: PhotoListItem[]
}