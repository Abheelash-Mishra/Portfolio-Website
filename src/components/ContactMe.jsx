import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

const ContactMe = () => {
	const [isActive, setIsActive] = useState(false);

	const handleActiveClick = () => {
		setIsActive(true);
	}

	const form = useRef();

	const sendEmail = (e) => {
		e.preventDefault();

		emailjs.sendForm('service_e9mw3ci', 'template_kpov14r', form.current, 'ho0x6-htbbzk46VOU')
			.then((result) => {
				console.log(result);
			}, (error) => {
				console.log(error);
			});
	};

	return (
		<div className={ "w-full m-32 flex items-center justify-center" }>
			{ !isActive && (
				<motion.button
					animate={ { opacity: [0, 0.9, 0] } }
					transition={ { duration: 5, repeat: Infinity, ease: "easeInOut" } }
					className={ "rounded-full bg-aqua power-animation" }
					onClick={ handleActiveClick }
				>
					<i className="fa-solid fa-power-off text-black p-24 opacity-70 text-8xl"/>
				</motion.button>
			) }

			{ isActive && (
				<div className={ "w-1/2 flex flex-col items-center justify-center text-cyberpunkYellow border-2 border-aqua rounded-2xl" }>
					<form ref={form} onSubmit={sendEmail} className={"w-full px-16 py-8"}>
						<div className={ "flex flex-col py-4" }>
							<label htmlFor="name" className={ "text-3xl font-bold py-2 px-4" }>Name</label>
							<input type="text" name="from_name" className={ "text-2xl py-1 px-4 font-semibold bg-black border-b-2 border-aqua focus:outline-none" }/>
						</div>

						<div className={ "flex flex-col py-4" }>
							<label htmlFor="email" className={ "text-3xl font-bold py-2 px-4" }>Email</label>
							<input type="email" name="from_email" className={ "text-2xl py-1 px-4 font-semibold bg-black border-b-2 border-aqua focus:outline-none" }/>
						</div>

						<div className={ "flex flex-col py-6" }>
							<label htmlFor="message" className={ "text-3xl font-bold py-2 px-4" }>Message</label>
							<textarea
								name="message"
								cols="30"
								rows="10"
								className={ "text-2xl p-4 font-semibold bg-black border-2 border-aqua rounded-2xl focus:outline-none" }
							/>
						</div>

						<div className={ "flex flex-col items-center justify-center" }>
							<motion.button
								whileHover={ { scale: 1.1 } }
								whileTap={ { scale: 0.9 } }
								type="submit"
								value={"Send"}
								className={ "text-xl border-2 border-cyberpunkYellow rounded-full px-8 py-4 hover:bg-cyberpunkYellow hover:text-black font-semibold" }
							>
								Submit
							</motion.button>
						</div>
					</form>
				</div>
			) }

		</div>
	);
};

export default ContactMe;