
import NoteModel from "../Models/Notes.js"
class NoteController{

    static saveNote = async(req , res)=>{
        const {firstName , title  ,Description } = req.body
        try{
            if (!firstName || ! title|| !Description) {
                res.json({ error: "fill all the detail" })
        }

        else {
            const FinalNOte = new NoteModel({
                firstName: firstName,
                  title : title,
                  Description : Description
            })
            let ans = await FinalNOte.save()
            res.json({ ans : ans })

        }
    }
        catch(error){
            res.json(error)
            console.log(error)
        }

    }

    static getAllNotes =  async(req,res)=>{
        let ans = await NoteModel.find()
        console.log(ans)
        res.send({data : ans})

    }


    static DeleteNotes = async(req,res)=>{
        const{id} = req.params
        let ans = await NoteModel.findByIdAndDelete({_id : id})
        res.json({ans : ans})
    }
}

export default NoteController