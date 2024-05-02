"use client";

export const TextInput = ({
  placeholder,
  onChange,
  label,
  value,
  type = "text",
}: {
  placeholder: string;
  onChange: (value: string) => void;
  label: string;
  value: string | number;
  type: string;
}) => {
  return (
    <div className="pt-2">
      <label className="block mb-2 text-sm font-medium text-gray-900">
        {label}
      </label>
      <input
        value={value}
        onChange={(e) => onChange(e.target.value)}
        type={type}
        id="first_name"
        className=" border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-gray-400 focus:border-gray-400 block w-full p-2.5 outline-none"
        placeholder={placeholder}
      />
    </div>
  );
};
