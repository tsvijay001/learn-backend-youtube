import { Router } from "express";
import { LoginUser, registerUser, LogoutUser, refreshAcessToken } from "../controllers/user.controller.js";
import upload from "../middlewares/multer.middleware.js";
import { verifyJWT } from "../middlewares/auth.middleware.js";

const router = Router();

router.route('/register').post(
    upload.fields([
        {
            name: 'avatar', maxCount: 1
        },
        {
            name: 'coverImage', maxCount: 1
        }
    ]),
    registerUser
)

router.route('/login').post(
    LoginUser
)

// Protected route for logout
router.route('/logout').post(
    verifyJWT,
    LogoutUser
)
router.route('/refresh-token').post(
    refreshAcessToken
)


export default router;