import classes from "./loading.module.css"

export default function MealsLoadin(){
    return (
        <p className={classes.loading}> Fetching meals ....</p>
    )
}