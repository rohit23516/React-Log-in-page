import { Field, Form, Formik } from "formik";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const FieldFill = () => {


  const navigate = useNavigate();
  const [data, setData] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetch('http://localhost:2000/contact/');
        const json = await data.json();
        setData(json);
        console.log(res)
      } catch (err) {
        console.error(err);
      }
    }
    fetchData();
  }, [data?.status])
  if (!data) {
    return <div>Loading...</div>;
  }
  return <>

    {/* {data?.user?.map((element) => {
      return <div key={element?._id}>{element.name}
        <button onClick={() => {
          navigate(`/field/${element._id}`);
          }}>Edit</button>
      </div>
    })} */}

    <Formik initialValues={{
      name: '',
      email: '',
      phone: '',
      password: ''
    }} onSubmit={(e) => {
      console.log(e);

      const postData = async () => {

        fetch("http://localhost:2000/contact/", {
          method: "POST",
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(e)
        }).then((res) => res.json()).then((res) => {
          console.log(res)
          navigate('/home');
        }).catch((err) => {
          navigate('/error')
          // console.log(err);

        });



      }
      postData();


    }}>
      <Form>

        <h1>Home Page</h1>
        <label htmlFor="email">Name:</label>
        <br />
        <Field type="text" id="name" name="name" />
        <br />
        <label htmlFor="email">Email:</label>
        <br />
        <Field type="email" id="email" name="email" />
        <br />
        <label htmlFor="phone">Phone:</label>
        <br />
        <Field type="tel" id="phone" name="phone" />
        <br />

        <label htmlFor="password">Password:</label>
        <br />
        <Field type="password" id="password" name="password" />
        <br />
        <br />

        <button type='submit' >Submit</button>
      </Form>

    </Formik>
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

export default FieldFill;