export function Button({ children, onClick, className, disabled }) {
    return (
      <button
        onClick={onClick}
        className={`px-4 py-2 rounded-lg font-semibold transition-all ${
          disabled ? "bg-gray-400 cursor-not-allowed" : "bg-blue-600 text-white hover:bg-blue-800"
        } ${className}`}
        disabled={disabled}
      >
        {children}
      </button>
    );
  }