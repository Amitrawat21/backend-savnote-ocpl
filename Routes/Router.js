import UserController from "../Controller/Controller.js";
import NoteController from "../Controller/NoteController.js";
import express from "express"
const router = express.Router()



// user routes
router.post("/register", UserController.userRegistration)
router.post("/login", UserController.login)


// note route




export default router
