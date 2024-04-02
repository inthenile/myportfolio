export default function ContactForm() {


    const contactForm = 
    
        <form target="_blank" action="https://formsubmit.co/c2397b4c10fcc0156b17d509a2a7f85a" method="POST">
            <label htmlFor="username">Name: </label>
            <input type="text" name="username" id="username" required placeholder=" John Doe"/>
            <label htmlFor="usermail">Email: </label>
            <input type="email" name="usermail" id="usermail" required placeholder=" johndoe@mail.com"/>
            <br/>
            <label htmlFor="message">Your message: </label>
            <br/>
            <textarea name="message" id="message" cols="30" rows="10" required ></textarea>
            <br/>
            <button type="submit"> Send </button>
        </form>

    return (
        <div className="contact-form">
            <h2>Feel free to contact me</h2>
            {contactForm}
        </div>
    )
}