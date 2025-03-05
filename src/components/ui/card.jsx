export function Card({ children }) {
    return <div className="p-4 shadow-lg rounded-lg bg-white">{children}</div>;
  }
  
  export function CardContent({ children }) {
    return <div className="p-2">{children}</div>;
  }
  
  export function CardHeader({ children }) {
    return <h2 className="text-xl font-bold">{children}</h2>;
  }
  // src/components/ui/card.jsx
