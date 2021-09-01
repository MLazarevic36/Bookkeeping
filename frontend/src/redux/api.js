export const base_url = "http://localhost:8080/api"

//AUTH
export const loginURL = "/auth/signin"

export const meURL = "/users/me"

const conto = "/conto"

export const contoURL = conto
export const contoPageURL = (pageNumber, pageSize, contoPlanId) => `${conto}/plan/${contoPlanId}?pageNumber=${pageNumber}&pageSize=${pageSize}`
export const contoClassURL = conto + "/classes"