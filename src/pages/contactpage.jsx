const ContactPage = () => {
    return (
        <>
            <h1>Contact Page</h1>
            <form>
                <label htmlFor="name">Name:</label><br />
                <input type="text" name="name" id="name" /><br />

                <label htmlFor="phone">Phone:</label><br />
                <input type="tel" name="phone" id="phone" /><br />

                <label htmlFor="email">Email:</label><br />
                <input type="email" name="email" id="email" /><br />

                <label htmlFor="password">Password:</label><br />
                <input type="password" name="password" id="password" /><br />

                <button type="submit">Submit</button>
            </form>
        </>
    );
};

export default ContactPage;
