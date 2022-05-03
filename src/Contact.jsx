export default function Contact(){
	return (

		<div id="contact" class="flex flex-row flex-wrap justify-center gap-4 lg:gap-12 py-6 grayscale dark:text-ghost font-semibold text-xs lg:text-2xl text-charcoal tracking-tighter">
			<div tabindex="0" class="collapse collapse-plus border w-3/4 lg:w-1/3 dark:border-8 border-4 dark:border-white bg-stone-500 lowercase">
                <input type="checkbox"/>
                <div class="collapse-title text-2xl font-semibold dark:text-ghost dark:font-medium">
                    Contact
                </div>
                <div class="collapse-content dark:text-ghost dark:font-medium font-semibold text-base text-charcoal text-left ">
                    <ul>
                        <li class="li">
                            <a href="mailto:roly3412@gmail.com?subject=Hey Rola!">email me</a>
                        </li>
                        <li class="li">
                            <a href="https://www.linkedin.com/in/rolando-chapa-3353aa166/">linkedIn</a>
                        </li>
                        <li>
                        <a href="../assets/Rolando_Chapa_Resume.PDF" download>resume</a>
                        </li>
                    </ul>
                </div>
            </div>
		</div>
		
		)
}