export function Input({ placeholder, icon, ...props }) {
  return (
    <div className="flex items-center bg-gray-200 p-2 rounded-md">
      {icon && <span className="mr-2 text-gray-500">{icon}</span>}
      <input
        className="bg-transparent outline-none w-full"
        placeholder={placeholder}
        {...props}
      />
    </div>
  );
}
