import { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

const ContactMe = () => {
	const [currInput, setCurrInput] = useState(0);
	const [formData, setFormData] = useState({ "from_name": "", "from_email": "", "message": "" });


	const form = useRef();

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
				console.log(form.current)
				form.current.reset();
			}, (error) => {
				console.log(error);
			});

	};


	const inputVariants = {
		offscreen: {
			x: 200,
			opacity: 0,
		},
		onscreen: {
			x: 0,
			opacity: 1,
			transition: {
				type: "spring",
				bounce: 0.4,
				duration: 2,
				delay: 1
			}
		}
	};

	return (
		<div className={ "w-full m-32 flex justify-center" }>
			<form ref={ form } className={ "w-2/3 px-16 py-8 text-cyberpunkYellow" }>
				<div className={ "flex flex-col py-4" }>
					<motion.input
						key={`name-${currInput}`}
						type="text"
						name="from_name"
						placeholder={ "Let's get your name first!" }
						value={ formData.from_name }
						onChange={ (e) => setFormData({ ...formData, "from_name": e.target.value }) }
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						exit={{ opacity: 0 }}
						transition={{ duration: 1 }}
						className={ `h-14 text-2xl py-1 px-4 font-semibold bg-black border-2 rounded-lg border-aqua focus:outline-none placeholder-aqua/40 ${currInput !== 0 ? 'hidden' : ''}` }
					/>

					<motion.input
						key={`email-${currInput}`}
						type="text"
						name="from_email"
						placeholder={ "Now let's get your email!" }
						value={ formData.from_email }
						onChange={ (e) => setFormData({ ...formData, "from_email": e.target.value }) }
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						exit={{ opacity: 0 }}
						transition={{ duration: 1 }}
						className={ `h-14 text-2xl py-1 px-4 font-semibold bg-black border-2 rounded-lg border-aqua focus:outline-none placeholder-aqua/40 ${currInput !== 1 ? 'hidden' : ''}` }
					/>

					<motion.textarea
						key={`message-${currInput}`}
						name="message"
						cols={ 30 }
						rows={ 5 }
						placeholder={ "Drop your message here :)" }
						value={ formData.message }
						onChange={ (e) => setFormData({ ...formData, "message": e.target.value }) }
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						exit={{ opacity: 0 }}
						transition={{ duration: 1 }}
						className={ `text-2xl py-1 px-4 font-semibold bg-black border-2 rounded-lg border-aqua focus:outline-none placeholder-aqua/40 ${currInput !== 2 ? 'hidden' : ''}` }
					/>

					<motion.div className={ "py-4 text-2xl" }>
						<motion.button
							whileHover={ currInput !== 0 ? { scale: 1.1 } : {} }
							whileTap={ currInput !== 0 ? { scale: 0.9 } : {} }
							onClick={ backClick }
							disabled={ currInput === 0 }
							className={ `border-2 border-aqua rounded-lg px-6 py-2 font-semibold ${ currInput === 0 ? 'text-cyberpunkYellow/20' : 'hover:bg-cyberpunkYellow hover:text-black' }` }
						>
							Back
						</motion.button>

						<motion.button
							whileHover={ { scale: 1.1 } }
							whileTap={ { scale: 0.9 } }
							onClick={ nextClick }
							className={ `border-2 border-aqua rounded-lg mx-4 px-6 py-2 hover:bg-cyberpunkYellow hover:text-black font-semibold ${ currInput !== 2 ? '' : 'hidden' }` }
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
					</motion.div>
				</div>
			</form>

		</div>
	);
};

export default ContactMe;