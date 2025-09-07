"use server";
import { save } from "./meals";
import { redirect } from "next/navigation";
function InvalidText(text) {
  return !text || text.trim() ===""
}
 export async function shareMeal(formData) {

const meal = {
  title:formData.get("title"),
  summary:formData.get("summary"),
  instructions: formData.get("instructions"),
  image:formData.get("image"),
  creator: formData.get("name"),
  creator_email : formData.get("email")
 
}
if (
  InvalidText(meal.title || 
  InvalidText(meal.summary || InvalidText(meal.creator) ) 
  ||InvalidText( meal.creator_email) ||
   InvalidText(meal.image)) 
   ||InvalidText(meal.instructions)
   ||
   !meal.creator_email.includes("@")
||
   !meal.image || meal.image.size ===0
  ) {
throw new Error("invalid Input")
  
}

await save(meal)
redirect("/meals")
 }