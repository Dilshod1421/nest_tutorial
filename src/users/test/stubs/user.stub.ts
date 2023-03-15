import { User } from '../../../users/models/user.model';

export const userStub = (): Partial<User> => {
  return {
    id: 1,
    first_name: "Toshmat",
    last_name: "Hoshimov",
    username: "HoshimTosh",
    hashed_password: "$2b$07$PtBnR0xINXKbPmp/XadhVehRUYV4Cu3IhiHfk8riLLpnfmaLFfi8S",
    email: "tosh@gmail.com",
    phone: "+998887028030",
    birthday: '2023-03-14',
    is_active: false,
    is_owner: false,
  };
};
