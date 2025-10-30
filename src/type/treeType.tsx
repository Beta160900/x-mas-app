export interface elementType {
  page: number;
  position: number;
  type: number;
  sender: string;
  message: string;
}

export interface receivedDataType {
  id: string;
  name: string;
  background: number;
  elements: elementType[];
}
