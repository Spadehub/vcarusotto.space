import axios from "axios";

export default (url = "https://gitlab.mi.hdm-stuttgart.de/") => {
    const tokenString = "glpat-9BytHod22z1sMyGvVp6q"
    return axios.create({
        baseURL: url,
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${tokenString}`,
}
    })
}