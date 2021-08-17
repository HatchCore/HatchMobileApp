import React, { SetStateAction } from "react";

import { User } from "src/api/types/APISchema";

interface UserContextProps {
  user: User | null;
  setUser: React.Dispatch<SetStateAction<User | null>>;
}

// eslint-disable-next-line import/prefer-default-export
export const UserContext = React.createContext<UserContextProps>({
  user: null,
  setUser: () => null,
});
