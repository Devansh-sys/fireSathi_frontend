import React from "react";

export function Textarea({
  name,
  value,
  onChange,
  placeholder,
  className,
}) {
  return (
    <textarea
      name={name}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className={`w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${className}`}
      rows={4}
    />
  );
}
