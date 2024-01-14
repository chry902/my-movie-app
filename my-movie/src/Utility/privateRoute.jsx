/* eslint-disable react/prop-types */
import { Navigate } from "react-router-dom";
import PropTypes from "prop-types";

const PrivateRoute = ({
  isAuthenticated,

  element: Element,
  ...rest
}) => {
  const localValue = localStorage.getItem("logKey");
  const newLocaValueObj = JSON.parse(localValue);

  const isLog =
    newLocaValueObj?.success || isAuthenticated == true ? true : false;

  return isLog ? <Element {...rest} /> : <Navigate to="/login" />;
};

PrivateRoute.propTypes = {
  element: PropTypes.elementType.isRequired,
};

export default PrivateRoute;
