import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

export default function NotFound() {
  const navigate = useNavigate();
  const params = useParams();

  useEffect(() => {
    setTimeout(() => {
      navigate(Object.values(params)[0] === '404'?-2:-1);
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
