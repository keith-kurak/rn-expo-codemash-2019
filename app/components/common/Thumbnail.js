import React from 'react';
import PropTypes from 'prop-types';
import MaterialInitials from 'react-native-material-initials/native';

const Thumbnail = ({ diameter, name }) => {
  const colors = [
    '#1abc9c',
    '#2ecc71',
    '#3498db',
    '#9b59b6',
    '#34495e',
    '#16a085',
    '#27ae60',
    '#2980b9',
    '#8e44ad',
    '#2c3e50',
    '#f1c40f',
    '#e67e22',
    '#e74c3c',
    '#95a5a6',
    '#f39c12',
    '#d35400',
    '#c0392b',
    '#bdc3c7',
    '#7f8c8d',
  ];
  const charIndex = name.charCodeAt(0) - 65;
  const colorIndex = charIndex % 19;
  return (
    <MaterialInitials
      size={diameter}
      color="white"
      backgroundColor={colors[colorIndex]}
      single={false}
      text={name}
    />
  );
}

Thumbnail.propTypes = {
  diameter: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
};

export default Thumbnail;