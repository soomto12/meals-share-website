import Link from "next/link"
import Classes from "./page.module.css"
import MealsGrid from "@/components/meals-grid"
import {GetMeals} from "@/libs/meals"
import { Suspense } from "react"

async function Meals(){
   const meals = await GetMeals()
 return <MealsGrid meals={meals} />
}

 export default  async function MealsPage(){

    return(
           <div>
        <header className={Classes.header}>
            <h1> Delicious meals, created {" "}</h1>
            <p>
                choose Your favourite recipe and cook it yourself. It is easy and fun
            </p>
            <p className={Classes.cta}> 
              <Link href="/meals/share">
            Share Your favourite Recipe
              </Link>  
             
         </p> 
        </header>
        <main>
          <Suspense fallback={ <p className={Classes.loading}> Fetching meals ....</p>}>
            <Meals/>
          </Suspense>

        </main>
        </div>

    )
}