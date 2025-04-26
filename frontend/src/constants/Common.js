
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;
const GENERAL_URL = `${API_BASE_URL}/api/v1`;
const GENERAL_API_END_POINT = `${API_BASE_URL}/api/v1`;

export const apiEndPoints = {
    login: GENERAL_URL +"/auth/login",
    getCode: GENERAL_URL + "/get-code"
}

