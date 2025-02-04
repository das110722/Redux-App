import { updateStart, updateError, updateSuccess } from "./userSlice";
import axios from "axios";


export const updateUser = async (user, dispatch) => {
    dispatch(updateStart());
    try {
        const res = await axios.post('http://localhost:9000/v1/update', user);
        dispatch(updateSuccess(res.data));
    } catch (err) {
        dispatch(updateError());
        console.error(err);
    }
}

