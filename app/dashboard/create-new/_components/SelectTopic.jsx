"use client";

import React from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";

function SelectTopic({ onUserSelect }) {
  const options = [
    "Custom Prompt",
    "Random AI Story",
    "Scary Story",
    "Historical Story",
    "Bed Time Story",
    "Motivational Story",
    "Fun Facts",
  ];
  const [selectedOption, setSelectedOption] = React.useState("");
  return (
    <div>
      <h2 className="font-bold text-2xl text-blue-600 dark:text-lime-500">
        Content
      </h2>
      <p className="text-gray-700 dark:text-gray-300">
        What is the topic of your video
      </p>
      <Select
        onValueChange={(value) => {
          setSelectedOption(value);
          value !== "Custom Prompt" && onUserSelect("topic", value);
        }}
      >
        <SelectTrigger className="w-full mt-2 p-6 text-lg border-gray-300 bg-white text-gray-900 dark:border-gray-600 dark:bg-gray-800 dark:text-white">
          <SelectValue
            className="placeholder: font-bold"
            placeholder="Content Type"
          />
        </SelectTrigger>
        <SelectContent className="border-gray-600 bg-white dark:bg-gray-800 dark:text-white">
          <SelectGroup>
            {options.map((option) => (
              <SelectItem
                key={option}
                value={option}
                className="dark:focus:bg-gray-700 dark:focus:text-lime-400"
              >
                {option}
              </SelectItem>
            ))}
          </SelectGroup>
        </SelectContent>
      </Select>
      {selectedOption === "Custom Prompt" && (
        <Textarea
          className="mt-3 border-gray-300 bg-white text-gray-900 placeholder:text-gray-500 focus-visible:border-lime-500 dark:border-gray-600 dark:bg-gray-800 dark:text-white dark:placeholder:text-gray-400 dark:focus-visible:border-lime-400"
          placeholder="Write prompt on which you want to generate video"
          onChange={(e) => onUserSelect("topic", e.target.value)}
        />
      )}
    </div>
  );
}

export default SelectTopic;
