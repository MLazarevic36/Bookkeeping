import { useDispatch, useSelector } from "react-redux";
import { login, logout, cleanMessage, fetchMyData } from "../reducers/userReducer";

export default function useUser() {
	const dispatch = useDispatch();
	const token = useSelector((state) => state.user.token);
	const message = useSelector((state) => state.user.message);
	const loading = useSelector((state) => state.user.loading);
	const id = useSelector((state) => state.user.id);
	const username = useSelector((state) => state.user.username);
	const role = useSelector((state) => state.user.role);
	const employee = useSelector((state) => state.user.employee);

	const signin = async (data) => {
		dispatch(login(data));
	};

	const signout = async () => {
		dispatch(logout());
	};

	const cleanToast = async () => {
		dispatch(cleanMessage());
	};

	const fetchData = async () => {
		dispatch(fetchMyData())
	}

	return {
		signin,
		signout,
		cleanToast,
		fetchData,
		token,
		message,
		loading,
		id,
		username,
		role,
		employee
	};
}
