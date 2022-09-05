const host = import.meta.env.VITE_SERVER_HOST || "http://localhost:8000"
export const registerRoute = `${host}/users/register`
export const loginRoute = `${host}/users/login`