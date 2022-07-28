import { rest } from "msw"
    
const baseURL = "https://gemma-moments-drf-api.herokuapp.com/";

export const handlers = [
    rest.get(`${baseURL}dj-rest-auth/user/`, (req, res, ctx) => {
        return res(ctx.json({
            
                pk: 73,
                username: "Gemma9",
                email: "",
                first_name: "",
                last_name: "",
                profile_id: 73,
                profile_image: "https://res.cloudinary.com/dxayohilv/image/upload/v1/media/../default_profile_qx7nrz"
                
        })
    );
    }),
    rest.post(`${baseURL}dj-rest-auth/logout/`, (req, res, ctx) => {
        return res(ctx.status(200));
    }),
];