import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function NotFound() {
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      // navigate("/");
      navigate(-1);
    }, 3000);
  }, []);

  return (
    <>
      <div className="alert-404">404</div>;
      <div className="alert-text">
        Page not found. You will be redirected to previous page.
      </div>
      ;
    </>
  );
}
