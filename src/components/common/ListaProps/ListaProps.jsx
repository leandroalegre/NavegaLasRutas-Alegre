import PropTypes from 'prop-types';

export const ListaProps = (props) => {
  return (
    <div>
      <h3>Este es mi saludo</h3>
      <h1>{props.saludo}</h1>
    </div>
  );
};

ListaProps.propTypes = {
  saludo: PropTypes.string.isRequired
};