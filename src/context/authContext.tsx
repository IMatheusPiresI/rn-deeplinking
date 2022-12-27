import {createContext, ReactNode, useContext, useState} from 'react';

const initialValues = {
  user: {
    name: '',
  },
  setUser: () => {},
};

type InitialTypes = {
  user: {
    name: string;
  } | null;
  setUser: (newState: {name: string} | null) => void;
};
export const UserContext = createContext<InitialTypes>(initialValues);

type Props = {
  children: ReactNode;
};

export const UserContextProvider = ({children}: Props) => {
  const [user, setUser] = useState<{name: string} | null>(null);

  return (
    <UserContext.Provider
      value={{
        user,
        setUser,
      }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUserContext = () => useContext(UserContext);
