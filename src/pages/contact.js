import React, { useState} from "react";
import Header from "../components/header/header";
import ContactForm from "../components/Contactform/Contactform";


export default function ContactUs() {
    const [name, setName] = useState("");
    const [hasSubmitted, setHasSubmitted] = useState(false);
    const handleSubmit = (e) => {
        e.preventDefault();
                    // write code to send your data to the backend
        setHasSubmitted(true);
    }
    return(
        <React.Fragment>
            <Header />
            
             <h1>Our contact page</h1>
            {
                hasSubmitted
                ? "The form has been submitted. We will get back to you shortly!"
                : <form onSubmit={e => handleSubmit(e)}>
                    <label>
                        Name;
                        <input
                            type="text"
                            value={name}
                            onChange={e => setName(e.target.value)}
                        />
                    </label>
                    <input type="submit" value="Submit" />

                    <label/>
                </form>

            
            }


            <div>

                <section>
                    <ContactForm/>
                </section>

                <footer>
                    <p> &copy;MyBookcase.2023</p>
                </footer>
            </div>

        </React.Fragment>
    );
};
