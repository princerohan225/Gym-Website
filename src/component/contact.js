import React from "react";
import './CSS/contact.css';

function Contact(){
    return(

        <>
            <div className="contact_container2">
                <form>
                    <label for="name">Name</label>
                    <input type="text" name="name" placeholder="Your Name"/>
                    <label for="email">Email</label>
                    <input type="email" name="email" placeholder="Your Email"/>

                    <label for="country">Country</label>
                    <select name="country" id="country">
                        <option value="australia">India</option>
                        <option value="canada">Canada</option>
                        <option value="usa">USA</option>
                        <option value="india">Australia</option>
                        <option value="germany">Germany</option>
                     </select>

                    <label for="subject">Subject</label>
                    <textarea id="subjext" Name="subject" cols="30" rows="10" placeholder="Write Something..."></textarea>

                    <input type="submit" name="submit" value="Submit"/>
                </form>

             </div>

            <div className="foot">
                <footer>
                    <p>&copy; Rohan.in</p>
                </footer>
            </div>
        </>
    );
}

export default Contact;