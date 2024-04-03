export default function ContactForm() {


    const handleSubmit = () => {
        const contactForm = document.getElementsByTagName("form")[0]
        let message = "Thank you for contacting me. I will get back to you as soon as I can."
        document.getElementById("contact-message").innerText = message;
        document.getElementById("submit").setAttribute("disabled","disabled")
        contactForm.style.opacity = ".5";
        setInterval(() => {
            document.getElementById("contact-message").innerText = "You can even send another message!";
            document.getElementById("submit").removeAttribute("disabled")
            contactForm.reset();
            contactForm.style.opacity = "1";
        },10000)


    }

    const contactForm = 
        <form target="_blank" action="https://formsubmit.co/c2397b4c10fcc0156b17d509a2a7f85a" method="POST" onSubmit={handleSubmit}>
            <label htmlFor="username">Name: </label>
            <input type="text" name="username" id="username" required placeholder=" John Doe"/>
            <label htmlFor="usermail">Email: </label>
            <input type="email" name="usermail" id="usermail" required placeholder=" johndoe@mail.com"/>
            <br/>
            <label htmlFor="message">Your message: </label>
            <br/>
            <textarea name="message" id="message" cols="30" rows="10" required ></textarea>
            <br/>
            <button type="submit" id="submit"> Send </button>
        </form>

    return (
        <div className="contact-form">
            <h2 id="contact-message">Feel free to contact me</h2>
            {contactForm}
        </div>
    )
}