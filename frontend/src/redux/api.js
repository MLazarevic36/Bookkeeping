export const base_url = "http://192.168.0.16:8080/api" 
// "http://localhost:8080/api"

//AUTH
export const loginURL = "/auth/signin"

export const meURL = "/users/me"

const conto = "/conto"

export const contoURL = conto
export const contoPageURL = (pageNumber, pageSize, contoPlanId) => `${conto}/page/${contoPlanId}?page=${pageNumber}&size=${pageSize}`
export const contoDeleteURL = (id) => `${conto}/${id}`
export const contoClassURL = conto + "/classes"
export const contoDropdownURL  = (companyId) => `${conto}/dropdown/${companyId}`

const company = "/company"

export const companyURL = company
export const companyDivisionURL = (id) => company + `/divisions/${id}`
export const companyPartnerURL = (id) => company + `/partners/${id}`

const accounts = "/accounts"
const items = "/items"

export const accountURL = accounts
export const accountPageURL = (pageNumber, pageSize, companyId) => `${accounts}/page/${companyId}?page=${pageNumber}&size=${pageSize}`
export const creditAccountURL = (id) => `${accounts}/credit/${id}`
export const accountItemDeleteURL = (id) => `${accounts}${items}/${id}`

const mainBook = "/main-book"
export const mainBookPageURL = (pageNumber, pageSize, companyId) =>  `${mainBook}/page/${companyId}?page=${pageNumber}&size=${pageSize}`