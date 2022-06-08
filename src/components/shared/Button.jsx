import PropTypes from 'prop-types';

function Button({ children, isDisabled, type, version }) {
  return (
      <button type={type} disabled={isDisabled} className={`btn btn-${version}`}>
          {children}
    </button>
  )
}

Button.defaultProps = {
    type: 'button',
    version: 'primary',
    isDisabled: false
}

Button.propTypes = {
    children: PropTypes.node.isRequired,
    isDisabled: PropTypes.bool,
    type: PropTypes.string,
    version: PropTypes.string,
}

export default Button