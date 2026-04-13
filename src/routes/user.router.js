import { Router } from "express";
import { LoginUser, registerUser, LogoutUser, refreshAcessToken, changeCurrentPassword, getUser, updateAccountDetails, updateUserAvatar, updateUserCoverImage, getUserChannelProfile, getWatchHistory } from "../controllers/user.controller.js";
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

// secured route
router.route('/logout').post(verifyJWT, LogoutUser)
router.route('/refresh-token').post(refreshAcessToken)
router.route('/change-password').post(verifyJWT, changeCurrentPassword)
router.route('/current-user').get(verifyJWT, getUser)
router.route('/update-account').patch(verifyJWT, updateAccountDetails)
router.route('/avatar').patch(verifyJWT, upload.single('avatar'), updateUserAvatar)
router.route('/cover-image').patch(verifyJWT, upload.single('coverImage'), updateUserCoverImage)
router.route('/c/:username').get(verifyJWT, getUserChannelProfile)
router.route('/history').get(verifyJWT, getWatchHistory)

export default router;