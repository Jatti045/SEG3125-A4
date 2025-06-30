import Hero from "@/components/contact/Hero.jsx";
import Form from "@/components/contact/Form.jsx"
import CallToAction from "@/components/ui/CallToAction.jsx";
import HowToContact from "@/components/contact/HowToContact.jsx";

const Contact = () => {
    return (
        <>
            <Hero />
            <HowToContact />
            <Form />
            <CallToAction />
        </>
    )
}

export default Contact;