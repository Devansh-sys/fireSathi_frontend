export function Table({ children, className }) {
    return <table className={`w-full border-collapse ${className}`}>{children}</table>;
  }
  
  export function TableHeader({ children }) {
    return <thead className="bg-gray-100">{children}</thead>;
  }
  
  export function TableBody({ children }) {
    return <tbody>{children}</tbody>;
  }
  
  export function TableRow({ children }) {
    return <tr className="border-b">{children}</tr>;
  }
  
  export function TableCell({ children, className }) {
    return <td className={`p-2 border ${className}`}>{children}</td>;
  }
  