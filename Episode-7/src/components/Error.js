import { Link, useRouteError } from "react-router-dom";

const Error = () => {
  const err = useRouteError();
  return (
    <>
      <div>
        <h1>Oops!</h1>
        <h2>Something went wrong!!</h2>
        <h3>
          {err.status}:{err.statusText}
        </h3>
      </div>
      <div>
        <Link to={"/"}>Go to home</Link>
      </div>
    </>
  );
};
export default Error;
