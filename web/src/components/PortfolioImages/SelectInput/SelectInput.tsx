import { ParsedQuery } from "query-string";
import React, { useCallback, useMemo, VFC } from "react";
import Select, { ActionMeta, OptionsType } from "react-select";
import { todo } from "../../../migration.types";
import { getQueryStringFromOption, getValuesForAttribute } from "../lib";

interface SelectInputProps {
  allImages: Array<todo>;
  attribute: string;
  label?: string;
  query: ParsedQuery<string>;
  selectedValues: Array<todo>;
  setQuery: (values: object) => void;
}

export const SelectInput: VFC<SelectInputProps> = ({
  allImages,
  attribute,
  label,
  query,
  selectedValues,
  setQuery,
}) => {
  const allValues = useMemo(
    () => getValuesForAttribute({ allImages, attr: attribute }),
    [allImages, attribute]
  );

  const handleChange = useCallback(
    (values: OptionsType<todo>, event: ActionMeta<todo>) => {
      // If there are no values, remove attribute from the query
      if (!values || !values.length) {
        setQuery({
          ...query,
          [attribute]: [],
        });

        return;
      }

      if (event.action === "select-option" && event.option.value === "all") {
        setQuery({
          ...query,
          [attribute]: allValues.join(","),
        });
      } else {
        setQuery({
          ...query,
          [attribute]: getQueryStringFromOption(values),
        });
      }
    },
    [allValues, attribute, query, setQuery]
  );

  return (
    <label htmlFor="labels-select" className="mb-6 col-span-4 block">
      <div className="capitalize mb-1">{label || attribute}</div>
      <Select
        value={selectedValues.map((label: todo) => ({
          id: label,
          value: label,
          label: label,
        }))}
        id={`${attribute}-select`}
        isMulti
        options={[
          {
            id: "all",
            value: "all",
            label: "Select All",
          },
          {
            label: "",
            options: allValues.map((label: todo) => ({
              id: label,
              value: label,
              label: label,
            })),
          },
        ]}
        onChange={handleChange}
      />
    </label>
  );
};
