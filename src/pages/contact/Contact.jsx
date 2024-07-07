import { useRef } from 'react';
import Button from '../../components/button/Button'
import classes from './Contact.module.css'
import emailjs from '@emailjs/browser';
import { Toaster, toast } from 'sonner'

const Contact = () => {
    const form = useRef();

    const sendEmail = async (e) => {
        e.preventDefault();
        toast.loading('sending Email...', {
            id: 'loadingState'
        })

        try {
            const response = await emailjs.sendForm('service_ilbfgkc', 'template_3x8x3iv', form.current, {
                publicKey: '4GT_u7B5u0hF9BRxG',
            })

            if (response.status === 200 && response.text == "OK") {
                toast.dismiss('loadingState')
                toast.success('Email Sent Successfully')
                form.current.reset()
            } else {
                toast.dismiss('loadingState')
                toast.error('Email Failed to Send')
            }

        } catch (error) {
            toast.dismiss('loadingState')
            toast.error('Email Failed to Send')
        }

    };
    return (
        <>
            <Toaster richColors position="bottom-center" duration={1500} />
            <header className='section-header'>Get in Touch<p>Contact Me</p></header>
            <div className={classes.contact_inner}>
                <div className={classes.left_box}>
                    <div className={classes.text}>
                        <p>Please fill out the form on this section to contact me and discuss any work opportunity.</p>
                    </div>
                    <ul className={classes['contact-info']}>
                        <li>
                            <div className={classes["img-container"]}>
                                <svg className={classes.svg} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M21 16.42V19.9561C21 20.4811 20.5941 20.9167 20.0705 20.9537C19.6331 20.9846 19.2763 21 19 21C10.1634 21 3 13.8366 3 5C3 4.72371 3.01545 4.36687 3.04635 3.9295C3.08337 3.40588 3.51894 3 4.04386 3H7.5801C7.83678 3 8.05176 3.19442 8.07753 3.4498C8.10067 3.67907 8.12218 3.86314 8.14207 4.00202C8.34435 5.41472 8.75753 6.75936 9.3487 8.00303C9.44359 8.20265 9.38171 8.44159 9.20185 8.57006L7.04355 10.1118C8.35752 13.1811 10.8189 15.6425 13.8882 16.9565L15.4271 14.8019C15.5572 14.6199 15.799 14.5573 16.001 14.6532C17.2446 15.2439 18.5891 15.6566 20.0016 15.8584C20.1396 15.8782 20.3225 15.8995 20.5502 15.9225C20.8056 15.9483 21 16.1633 21 16.42Z"></path></svg>
                            </div>
                            <div className={classes.text_container}>
                                <span>Contact Number</span>
                                <h3>+2349169614606</h3>
                            </div>
                        </li>
                        <li>
                            <div className={classes["img-container"]}>
                                <svg className={classes.svg} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M3 3H21C21.5523 3 22 3.44772 22 4V20C22 20.5523 21.5523 21 21 21H3C2.44772 21 2 20.5523 2 20V4C2 3.44772 2.44772 3 3 3ZM20 7.23792L12.0718 14.338L4 7.21594V19H20V7.23792ZM4.51146 5L12.0619 11.662L19.501 5H4.51146Z"></path></svg>
                            </div>
                            <div className={classes.text_container}>
                                <span>email</span>
                                <h3><a href="mailto:williamsayo44@gmail.com">williamsayo44@gmail.com</a></h3>
                            </div>
                        </li>
                        <li>
                            <div className={classes["img-container"]}>
                                <svg className={classes.svg} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M2 5L9 2L15 5L21.303 2.2987C21.5569 2.18992 21.8508 2.30749 21.9596 2.56131C21.9862 2.62355 22 2.69056 22 2.75827V19L15 22L9 19L2.69696 21.7013C2.44314 21.8101 2.14921 21.6925 2.04043 21.4387C2.01375 21.3765 2 21.3094 2 21.2417V5ZM16 19.3955L20 17.6812V5.03308L16 6.74736V19.3955ZM14 19.2639V6.73607L10 4.73607V17.2639L14 19.2639ZM8 17.2526V4.60451L4 6.31879V18.9669L8 17.2526Z"></path></svg>
                            </div>
                            <div className={classes.text_container}>
                                <span>Address</span>
                                <h3>Lagos, Nigeria.</h3>
                            </div>
                        </li>
                    </ul>
                </div>
                <div className={classes.right_box}>
                    <form ref={form} onSubmit={sendEmail} >
                        <div className={classes["form-control"]}>
                            <input type="text" id="name" name="from_name" placeholder="Your Name" required />
                        </div>
                        <div className={classes["form-control"]}>
                            <input type='email' id="email" placeholder="Your Email" name="from_email" required />
                        </div>
                        <div className={classes["form-control"]}>
                            <textarea id="message" placeholder="Message" name="message" required></textarea>
                        </div>
                        <div>
                            <Button className='secondary-btn'>
                                <span>Submit Message </span>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M1.94619 9.31543C1.42365 9.14125 1.41953 8.86022 1.95694 8.68108L21.0431 2.31901C21.5716 2.14285 21.8747 2.43866 21.7266 2.95694L16.2734 22.0432C16.1224 22.5716 15.8178 22.59 15.5945 22.0876L12 14L18 6.00005L10 12L1.94619 9.31543Z"></path></svg>
                            </Button>
                        </div>
                    </form>
                </div>

            </div>

        </>
    )
}

export default Contact
