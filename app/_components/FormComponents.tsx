interface TextInputProps {
  type: string;
  placeholder: string;
  name?: string;
  required?: boolean;
}

export function TextInput({
  type = "text",
  placeholder = "e.g KIS/2023/001",
  name,
  required = false,
}: TextInputProps) {
  return (
    <input
      type={type}
      placeholder={placeholder}
      name={name}
      required={required}
      className="p-2 border border-gray-300 w-full rounded-md mt-1"
    />
  );
}
