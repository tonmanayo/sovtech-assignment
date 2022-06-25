import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSpinner } from '@fortawesome/free-solid-svg-icons'

/**
 * A Loading component
 */
const Loader = () => {
  return (
    <div className={'fa flex fa-spinner fa-spin'}>
      <FontAwesomeIcon icon={faSpinner} />
    </div>
  );
}

export default Loader;