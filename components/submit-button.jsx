 
 import { useFormStatus } from "react-dom" 

export default function Button() {
    const {pending} = useFormStatus()
    return(
        <button disabled={pending}>
               {pending ? "submitting" : "shareMeal"}
            </button>
    )
}