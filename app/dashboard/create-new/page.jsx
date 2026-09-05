"use client";
import React from "react";
import SelectTopic from "./_components/SelectTopic";
import { useState } from "react";
import SelectStyle from "./_components/SelectStyle";

function CreateNew() {
  const [formData, setFormData] = useState([]);
  const onHandleInputChange = (fieldName, fieldValue) => {
    console.log(fieldName, fieldValue);
  };
  return (
    <div className="md:px-20">
      <h2 className="font-bold text-4xl text-blue-500 text-center dark:text-lime-400">
        Create New
      </h2>
      <div className="mt-10 shadow-md p-10 dark:bg-gray-700 rounded-lg">
        <SelectTopic onUserSelect={onHandleInputChange} />
        <SelectStyle />
      </div>
    </div>
  );
}

export default CreateNew;
