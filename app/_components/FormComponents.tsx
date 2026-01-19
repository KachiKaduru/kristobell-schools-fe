interface TextInputProps {
  type: string;
  placeholder: string;
}

export function TextInput({type = "text", placeholder = "e.g KIS/2023/001"}: TextInputProps) {
  return (
    <input
      type={type}
      placeholder={placeholder}
      className="p-2 border border-gray-300 w-full rounded-md mt-1"
    />
  );
}
