import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <div className="text-8xl mb-8">🪑</div>
        <h1 className="text-6xl font-crimson font-bold mb-4 text-foreground">404</h1>
        <h2 className="text-2xl font-crimson font-semibold mb-4 text-muted-foreground">
          Page Not Found
        </h2>
        <p className="text-lg text-muted-foreground mb-8 max-w-md mx-auto">
          The page you're looking for seems to have been moved or doesn't exist.
        </p>
        <Link 
          to="/" 
          className="btn-elegant"
        >
          Return to Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
