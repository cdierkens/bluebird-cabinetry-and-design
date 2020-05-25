import PropTypes from "prop-types";
import React from "react";
import Tag from "../Tag/Tag";

const Tags = ({ tags }) => (
  <>
    <span className="block text-blue-dark text-base ml-1 mb-1">Tags</span>
    <div className="p-1 shadow-md flex flex-wrap justify-start">
      {tags.map(({ value, checked, onChange }) => (
        <Tag
          value={value}
          checked={checked}
          onChange={onChange}
          label={value}
          key={value}
        />
      ))}
    </div>
  </>
);

Tags.propTypes = {
  tags: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.string.isRequired,
      checked: PropTypes.bool.isRequired,
      onChange: PropTypes.func.isRequired,
    })
  ).isRequired,
};

export default Tags;
