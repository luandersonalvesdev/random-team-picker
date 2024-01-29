import { Navigate } from 'react-router-dom'
import { getFromLs } from '../../utils/localStorage';
import PropTypes from 'prop-types';


export default function RedirectDashboardRoute({ children }) {
  const isTokenSaved = getFromLs('rtp-token');

  return isTokenSaved ? <Navigate to="/dashboard" /> : children ;
}

RedirectDashboardRoute.propTypes = {
  children: PropTypes.node
}
