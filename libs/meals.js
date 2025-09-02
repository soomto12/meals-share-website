
import sql from "better-sqlite3"



const db = sql("meals.db")

export async  function GetMeals(){
   await new Promise((resolve)=> setTimeout(resolve,5555))
 return   db.prepare("SELECT * FROM meals").all()
}

export  function getmeal(slug) {
  return db.prepare("SELECT * FROM meals WHERE slug = ?").get(slug)
}