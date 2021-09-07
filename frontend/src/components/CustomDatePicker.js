import styled from "styled-components"
import DatePicker from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css"
import { Box } from "@chakra-ui/layout"
import { FormLabel } from "@chakra-ui/form-control"

const DatePickerWrapper = styled(({ className, label, ...props }) => (
	<Box w="20%" minW="450px" minH={"100px"}>
		<FormLabel color="#012C31" fontSize="16px">
			{label}
		</FormLabel>
		<DatePicker {...props} wrapperClassName={className} />
	</Box>
))`
    width: 100%;
    input {
        width: 100%;
        background: var(--mc_bg);
        border-radius: 12px;
        height: 40px;
        border: 2px solid var(--mc_bg);
        box-shadow: 0px 2px 10px rgba(66, 146, 220, 0.25);
        padding: 0 40px 0 20px;
        color: var(--mc_black);
        background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' height='20' width='20' viewBox='0 0 20 20' aria-hidden='true' focusable='false' className='css-tj5bde-Svg'%3E%3Cpath d='M4.516 7.548c0.436-0.446 1.043-0.481 1.576 0l3.908 3.747 3.908-3.747c0.533-0.481 1.141-0.446 1.574 0 0.436 0.445 0.408 1.197 0 1.615-0.406 0.418-4.695 4.502-4.695 4.502-0.217 0.223-0.502 0.335-0.787 0.335s-0.57-0.112-0.789-0.335c0 0-4.287-4.084-4.695-4.502s-0.436-1.17 0-1.615z'%3E%3C/path%3E%3C/svg%3E");
        background-repeat: no-repeat;
        background-position: 96%;
        &:focus {
            /* box-shadow: 2px solid var(--mc_dropdownOutline); */
            /* outline: 2px solid var(--mc_dropdownOutline); */
            outline: none;
            border: 2px solid var(--mc_dropdownOutline);
        }
    }
`
export const Calendar = styled.div`
    border-radius: 10px;
    box-shadow: 0 6px 12px rgba(27, 37, 86, 0.16);
    overflow: hidden;
`
export default DatePickerWrapper