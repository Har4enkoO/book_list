import React, { useContext, createContext } from "react";

const role = {
  admin: {
    type: "admin",
    class: "hard",
  },
  user: {
    type: "user",
    class: "simple",
  },
};

const RoleContext = createContext(role.admin);

export const UseContext = () => {
  const roleType = useContext(RoleContext);
  return (
    <RoleContext.Provider value={RoleContext.admin}>
      <div>
        I am {roleType.type} with class {roleType.class}
      </div>
    </RoleContext.Provider>
  );
};
