import express from "express"
const router = express.Router()
import NoteController from "../Controller/NoteController.js"


router.post("/addnote", NoteController.saveNote)

router.get("/allNotes", NoteController.getAllNotes)
router.delete("/delete/:id", NoteController.DeleteNotes)

export default router