import { ACTIONS } from "./App";
export default function OperationButton({dispatch,operaton}){
return(
<button onClick={()=> dispatch({type: ACTIONS.CHOOSE_OPERATION,payload:{operaton}})}>
{operaton}
</button>


)

}