import { Field, Form, Formik } from "formik";
import FieldFill from "./formicpage";

const HomePage = ()=>{

    return <>
    <h1 style={
        {color:"yellow"}
    }>Login Successfully</h1>

<div>
      <table className="table">
        <thead>
          <tr>
            <th className="td">Name</th>
            <th className="td">Password</th>
            <th className="td">Email</th>
            <th className="td">Phone</th>
          </tr>
        </thead>
        <tbody>
          {data?.user?.map((element) => (
            <tr key={element?._id}>
              <td className="td">{element?.name}</td>
              <td className="td">{element?.password}</td>
              <td className="td">{element?.email}</td>
              <td className="td">{element?.phone}</td>
              <td className="td">
                <button
                  onClick={() => {
                    navigate(`/field/${element._id}`);
                  }}
                >
                  Edit
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

    </div>
   </>
}

export default HomePage;