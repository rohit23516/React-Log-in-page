import { Field, Form, Formik } from "formik";
import { useNavigate } from "react-router-dom";

const FieldFill = () => {

  const navigate = useNavigate();

  return <>
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

  </>
}

export default FieldFill;