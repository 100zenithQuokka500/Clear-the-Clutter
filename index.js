import fs from "fs/promises"
import fsn from "fs"
import path from "path"
const basepath="/workspaces/Clear-the-Clutter"
let files=await fs.readdir(basepath)
for(const item of files){
    console.log("running for",item)
    let ext=item.split(".")[item.split(".").length-1];
    if(ext != 'js' && ext !='json' && ext != "md" && ext !="git" && item.split(".").length >1){
        if(fsn.existsSync(path.join(basepath,ext))){
            fs.rename(path.join(basepath,item),path.join(basepath,ext,item))
        }
        else{
            fs.mkdir(ext)
            fs.rename(path.join(basepath,item),path.join(basepath,ext,item))
        }

    }
}