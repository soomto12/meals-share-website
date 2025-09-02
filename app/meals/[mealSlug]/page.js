import Image from "next/image"
import classes from "./page.module.css"
import {getmeal} from "@/libs/meals"
export default async  function MealDetail({params}){
    const meal = await  getmeal(params.mealSlug)
    meal.instructions = meal.instructions.replace(/\n/g, "<br/>")
    return(
     <>
<header className={classes.header}>
    <div className={classes.image}>
        <Image src={meal.image} fill/>
    </div>
    <div className={classes.headerText}>
        <h1>
            {meal.title}
        </h1>
        <p>
by <a href={`mailto:${meal.creator_email}`}> {meal.creator}</a>
        </p>
        <p className={classes.summary}>
{meal.summary}
        </p>
    </div>
</header>
<main>
    <p className={classes.instructions} dangerouslySetInnerHTML={{__html: meal.instructions}}>

    </p>
</main>
     </>
    )
}