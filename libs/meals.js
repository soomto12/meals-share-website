import sql from "better-sqlite3"
import slugify from "slugify"
import xss from "xss"
import fs from "node:fs"


const db = sql("meals.db")

export async  function GetMeals(){
   await new Promise((resolve)=> setTimeout(resolve,5555))
 return   db.prepare("SELECT * FROM meals").all()
}

export  function getmeal(slug) {
  return db.prepare("SELECT * FROM meals WHERE slug = ?").get(slug)
}

 export async function save(meals){
  meals.slug = slugify(meals.title, {lower:true})
  meals.instructions = xss(meals.instructions)
  const extention = meals.image.name.split(".").pop();
  const filename = `${meals.slug}.${extention}`
  const stream = fs.createWriteStream(`public/images/${filename}`)
  const bufferImage = await meals.image.arrayBuffer()
  stream.write(Buffer.from(bufferImage), (error)=>{
    if (error) {
      throw new Error('saving image failed')
    }
  });
  meals.image = `/images/${filename}`;
  db.prepare(`
    INSERT INTO meals
    (title, summary, instructions, creator, creator_email,image,slug)
    VALUES (
     @title,
         @summary,
         @instructions,
         @creator,
         @creator_email,
          @image,
            @slug
    )
    `).run(meals)
}