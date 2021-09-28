export interface User {
  uid: string;
  email: string;
  displayName: string;
  photoURL: string;
  emailVerified: boolean;
}

export interface userData {
  admin: boolean;
  branch: string;
  fullName: string;
  lastName: string;
  password: string;
  auth: string[];
}
