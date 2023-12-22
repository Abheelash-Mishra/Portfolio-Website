import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

const ContactMe = () => {
	const [isActive, setIsActive] = useState(false);
	const [currInput, setCurrInput] = useState(0);

	const [formData, setFormData] = useState({ "from_name": "", "from_email": "", "message": "" });


	const form = useRef();
	console.log(currInput)

	const nextClick = (e) => {
		e.preventDefault();

		if (currInput < 2) {
			setCurrInput(currInput + 1);
		}
	};

	const backClick = (e) => {
		e.preventDefault();

		if (currInput > 0) {
			setCurrInput(currInput - 1);
		}
	};

	const sendEmail = (e) => {
		e.preventDefault();

		emailjs.sendForm('service_e9mw3ci', 'template_kpov14r', form.current, 'ho0x6-htbbzk46VOU')
			.then((result) => {
				console.log("Mail sent!")
				console.log(form.current)
				form.current.reset();
			}, (error) => {
				console.log(error);
			});

	};

	return (
		<div className={ "w-full m-32 flex justify-center" }>
			<form ref={ form } className={ "w-2/3 px-16 py-8 text-cyberpunkYellow" }>
				<div className={ "flex flex-col py-4" }>
					<input
						type="text"
						name="from_name"
						placeholder={ "Let's get your name first!" }
						value={ formData.from_name }
						onChange={ (e) => setFormData({ ...formData, "from_name": e.target.value }) }
						className={ `h-14 text-2xl py-1 px-4 font-semibold bg-black border-2 rounded-lg border-aqua focus:outline-none placeholder-aqua/40 ${currInput !== 0 ? 'hidden' : ''}` }
					/>

					<input
						type="text"
						name="from_email"
						placeholder={ "Now let's get your email!" }
						value={ formData.from_email }
						onChange={ (e) => setFormData({ ...formData, "from_email": e.target.value }) }
						className={ `h-14 text-2xl py-1 px-4 font-semibold bg-black border-2 rounded-lg border-aqua focus:outline-none placeholder-aqua/40 ${currInput !== 1 ? 'hidden' : ''}` }
					/>

					<textarea
						name="message"
						cols={ 30 }
						rows={ 5 }
						placeholder={ "Drop your message here :)" }
						value={ formData.message }
						onChange={ (e) => setFormData({ ...formData, "message": e.target.value }) }
						className={ `text-2xl py-1 px-4 font-semibold bg-black border-2 rounded-lg border-aqua focus:outline-none placeholder-aqua/40 ${currInput !== 2 ? 'hidden' : ''}` }
					/>

					<div className={ "py-4 text-2xl" }>
						<motion.button
							whileHover={ { scale: 1.1 } }
							whileTap={ { scale: 0.9 } }
							onClick={ backClick }
							className={ `border-2 border-aqua rounded-lg px-6 py-2 hover:bg-cyberpunkYellow hover:text-black font-semibold ${currInput === 0 ? 'disabled:bg-blue' : ''}` }
						>
							Back
						</motion.button>

						<motion.button
							whileHover={ { scale: 1.1 } }
							whileTap={ { scale: 0.9 } }
							onClick={ nextClick }
							className={ `border-2 border-aqua rounded-lg mx-4 px-6 py-2 hover:bg-cyberpunkYellow hover:text-black font-semibold ${currInput !== 2 ? '' : 'hidden'}` }
						>
							Next
						</motion.button>

						<motion.button
							whileHover={ { scale: 1.1 } }
							whileTap={ { scale: 0.9 } }
							onClick={ sendEmail }
							className={ `border-2 border-aqua rounded-lg mx-4 px-6 py-2 hover:bg-cyberpunkYellow hover:text-black font-semibold ${currInput !== 2 ? 'hidden' : ''}` }
						>
							Submit
						</motion.button>
					</div>
				</div>
			</form>

		</div>
	);
};

export default ContactMe;