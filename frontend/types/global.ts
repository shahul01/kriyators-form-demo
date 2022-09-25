
// ### Account Details ###
export interface IFormAccDetails {
  firstName: string;
  lastName: string;
  displayName: string;
  email: string;
  phoneNo1: string;
  phoneNo2: string;
  location: string;
}

export interface IAccDetails extends IFormAccDetails {
  jobTitle: string;
  userName: string;
}
