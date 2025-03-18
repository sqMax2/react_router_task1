import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

export default function NotFound() {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    setTimeout(() => {
      navigate(-1, {replace: true, state: {from: location.pathname}});
    }, 3000);
  }, []);

  return (
    <>
      <div className="alert-404">404</div>
      <div className="alert-text">
        Page not found. You will be redirected to previous page.
      </div>
    </>
  );
}
