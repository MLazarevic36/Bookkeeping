import Select from "react-select"
import { Colors } from "./StyledComponentsGlobal"

const customStyles = () => {
    const colors = Colors()

    return {
        control: (base, state) => ({
            ...base,
            height: "max-content",
            outline: "none",
            border: `2px solid ${colors.colors.mc_bg}`,
            borderColor: state.isFocused
                ? `${colors.colors.dropdownOutline} !important`
                : 0 || state.isActive
                ? `${colors.colors.dropdownOutline} !important`
                : 0,

            paddingLeft: "5px",
            borderRadius: "12px",
            boxShadow: "0px 2px 10px rgba(36, 180, 188, 0.25)",
            backgroundColor: `${colors.colors.mc_bg}`,
            "&:hover": {
                borderColor: "inherit",
            },
        }),

        menu: (base) => ({
            ...base,
            "z-index": 10,
        }),
        multiValue: (base) => {
            return {
                ...base,
                backgroundColor: `${colors.colors.mc_dark}`,
            }
        },
        multiValueLabel: (base) => ({
            ...base,
            color: `${colors.colors.mc_bg}`,
        }),
        multiValueRemove: (base) => ({
            ...base,
            color: `${colors.colors.mc_bg}`,
            ":hover": {
                backgroundColor: `${colors.colors.mc_medium}`,
                color: `${colors.colors.mc_dark}`,
            },
        }),
    }
}

const customTheme = (base) => {
    return {
        ...base,
        colors: {
            ...base.colors,
            primary25: "#24B4BC",
            primary: `#00707C`,
        },
    }
}

export default function SelectDropdown({ options, placeholder, onChange, ...rest }) {

    return (
        <Select
            {...rest}
            styles={customStyles()}
            theme={customTheme}
            options={options}
			placeholder={placeholder ? placeholder : "Izaberi"}
            isClearable
			onChange={onChange}
        ></Select>
    )
}
