import React, { useState, useCallback } from "react";

export const UseCallback = () => {
  const [age, setAge] = useState(18);
  const [salary, setSalary] = useState(1000);

  const incrementAge = useCallback(() => {
    setAge(age + 1);
  }, [age]);

  const incrementSalary = useCallback(() => {
    setSalary(salary + 1000);
  }, [salary]);

  return (
    <div>
      <h2>UseCallback</h2>
      <div>Age - {age}</div>
      <button onClick={incrementAge}>Increment Age</button>
      <div>Salary - {salary}</div>
      <button onClick={incrementSalary}>Increment Salary</button>
    </div>
  );
};
