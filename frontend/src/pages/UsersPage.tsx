import React from 'react';
import UserTable from '../components/tables/UserTable';

const UsersPage: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <UserTable />
    </div>
  );
};

export default UsersPage;