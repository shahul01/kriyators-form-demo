
// ### Account Details ###
export interface IImage {
  id: number;
  isThumbnail: boolean;
  mime: string;
  data: string;
}

export interface IFormAccDetails {
  firstName: string;
  lastName: string;
  displayName: string;
  email: string;
  phoneNo1: string;
  phoneNo2: string;
  location: string;
  images?: IImage[];
}

export interface IAccDetails extends IFormAccDetails {
  jobTitle: string;
  userName: string;
}
