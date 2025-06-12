import React, { createContext, useState, useContext, ReactNode } from 'react';
import { User } from '../types/User';

interface UserContextType {
  users: User[];
  addUser: (user: User) => void;
  updateUser: (id: string, updatedUser: User) => void;
  deleteUser: (id: string) => void;
  findUserByDocument: (documentNumber: string) => User | undefined;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

export const UserProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [users, setUsers] = useState<User[]>([
    {
      id: '1',
      firstName: 'Juan',
      secondName: 'Carlos',
      lastName: 'Pérez',
      secondLastName: 'García',
      documentNumber: '12345678',
      area: 'Desarrollo',
      email: 'juan.perez@example.com'
    },
    {
      id: '2',
      firstName: 'María',
      secondName: 'Elena',
      lastName: 'López',
      secondLastName: 'Sánchez',
      documentNumber: '87654321',
      area: 'Recursos Humanos',
      email: 'maria.lopez@example.com'
    }
  ]);

  const addUser = (user: User) => {
    setUsers([...users, { ...user, id: Date.now().toString() }]);
  };

  const updateUser = (id: string, updatedUser: User) => {
    setUsers(users.map(user => user.id === id ? { ...updatedUser, id } : user));
  };

  const deleteUser = (id: string) => {
    setUsers(users.filter(user => user.id !== id));
  };

  const findUserByDocument = (documentNumber: string) => {
    return users.find(user => user.documentNumber === documentNumber);
  };

  return (
    <UserContext.Provider value={{ users, addUser, updateUser, deleteUser, findUserByDocument }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUserContext = () => {
  const context = useContext(UserContext);
  if (context === undefined) {
    throw new Error('useUserContext must be used within a UserProvider');
  }
  return context;
};