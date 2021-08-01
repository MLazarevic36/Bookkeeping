import { useDispatch, useSelector } from "react-redux"
import { login, logout, cleanMessage } from "../reducers/userReducer"

export default function useUser() {

    const dispatch = useDispatch()
    const token = useSelector((state) => state.user.token)
    const message = useSelector((state) => state.user.message)
    const loading = useSelector((state) => state.user.loading)
  
    const signin = async (data) => {
        dispatch(login(data))
    }

    const signout = async () => {
        dispatch(logout())
    }

    const cleanToast = async () => {
        dispatch(cleanMessage())
    }

    return {
        signin,
        signout,
        cleanToast,
        token,
        message,
        loading,
    }
}