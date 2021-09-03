export const base_url = "http://192.168.0.16:8080/api" 
// "http://localhost:8080/api"

//AUTH
export const loginURL = "/auth/signin"

export const meURL = "/users/me"

const conto = "/conto"

export const contoURL = conto
export const contoPageURL = (pageNumber, pageSize, contoPlanId) => `${conto}/plan/${contoPlanId}?page=${pageNumber}&size=${pageSize}`
export const contoDeleteURL = (id) => `${conto}/${id}`
export const contoClassURL = conto + "/classes"