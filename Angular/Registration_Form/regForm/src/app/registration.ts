export class Reg implements RegModel{
  firstname: string;
  lastname: string;
  email: string;
  password: string;
  confirmPassword: string;
  stAddress: string;
  unit: string;
  city: string;
  state: string;
  feelingLucky: string;
}

export interface RegModel {
  firstname: string;
  lastname: string;
  email: string;
  password: string;
  confirmPassword: string;
  stAddress: string;
  unit: string;
  city: string;
  state: string;
  feelingLucky: string;
}
