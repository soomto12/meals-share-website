 "use client"
 import Button from './submit-button';
 import { shareMeal } from '@/libs/action';
 import ImagePicker from '@/components/imagePicker';
 import classes from "../app/meals/share/page.module.css"
 export default function MealFormSubmit(){
   
return(
 <form className={classes.form} action={shareMeal}>
          <div className={classes.row}>
            <p>
              <label htmlFor="name">Your name</label>
              <input type="text" id="name" name="name" required />
            </p>
            <p>
              <label htmlFor="email">Your email</label>
              <input type="email" id="email" name="email" required />
            </p>
          </div>
          <p>
            <label htmlFor="title">Title</label>
            <input type="text" id="title" name="title" required />
          </p>
          <p>
            <label htmlFor="summary">Short Summary</label>
            <input type="text" id="summary" name="summary" required />
          </p>
          <p>
            <label htmlFor="instructions">Instructions</label>
            <textarea
              id="instructions"
              name="instructions"
              rows="10"
              required
            ></textarea>
          </p>
          <ImagePicker label={'your Image'} name={'image'}/>
          <p className={classes.actions}>
            <Button/>
          </p>
        </form> 
)
}