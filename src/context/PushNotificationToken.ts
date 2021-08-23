import React, { SetStateAction } from "react";

interface PushNotificationTokenContextProps {
  token: string | undefined;
  setToken: React.Dispatch<SetStateAction<string | undefined>>;
}

// eslint-disable-next-line import/prefer-default-export
export const PushNotificationTokenContext =
  React.createContext<PushNotificationTokenContextProps>({
    token: undefined,
    setToken: () => null,
  });
