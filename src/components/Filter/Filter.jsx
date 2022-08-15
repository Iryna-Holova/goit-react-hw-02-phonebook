import PropTypes from "prop-types";
import { FilterContainer, FilterInput, FilterLabel } from "./Filter.styled";

const Filter = ({currentValue, onChange}) => (
    <FilterContainer>
        <FilterLabel>Find contacts by name
            <FilterInput
                type="text"
                name="filter"
                value={currentValue}
                onChange={event => {
                    onChange(event.target.value);
                }}
            ></FilterInput>
        </FilterLabel>
    </FilterContainer>
);

export default Filter;

Filter.propTypes = {
    currentValue: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired
};