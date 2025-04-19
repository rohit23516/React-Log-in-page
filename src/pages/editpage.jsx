
import { useParams } from "react-router-dom";
const EditPage  =( ) => {

    const  {id} = useParams();
return <>
        {id}
     </>
}

export default EditPage;