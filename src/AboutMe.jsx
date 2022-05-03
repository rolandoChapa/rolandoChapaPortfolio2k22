export default function AboutMe(){
return (
<div id="about" className="flex flex-col items-center content-center gap-4 lg:gap-12 py-6 grayscale dark:text-ghost font-semibold text-xs lg:text-2xl text-charcoal tracking-tighter">
    
    <div tabIndex="0" className="collapse collapse-plus border w-3/4 lg:w-1/3 dark:border-8 dark:border-white border-4 border-stone-500 bg-stone-500">
        <input type="checkbox" />
        <div className="collapse-title text-2xl font-semibold dark:text-ghost dark:font-medium lowercase">
            About Me
        </div>
        <div className="collapse-content dark:text-xl 2xl:text-2xl">
            <div className="dark:text-ghost dark:font-medium font-semibold text-base text-charcoal text-left about-me container lowercase">
                <div className="section-title">
                    <p className="aboutText ">
                        Hola World! <br /><br />
                        I'm Rolando Chapa, a front-end web dev based out of San Antonio. <br /><br />
                        I recently graduated from the University of texas at san antonio with a bachelor in computer science. <br /><br />
                        I aspire to make better websites; the kind that are easy to use, beautiful to look at, and accessible for everyone to enjoy. <br /><br />
                        That's what makes the web like home to me, and many others. And that's why so many have found success online, because it's so vast and never ending. You can find anything from the weather, to tonight's score, to knowing how to build a website at whatever level of expertise you might have. <br /><br />
                        And like the web, I'm also always growing. Every day, I aim to find something new to add to my tool chest. So remember that when looking at my projects on github, or even at some of the skills I already have. This is just the start of it all. <br /><br />
                        When I'm not typing lines of code at my desk, I enjoy cooking, exercising and always keeping an eye on my favorite teams. Sportsball runs my life.
                        I'm excited to keep learning and refining my skills with the right company. Feel free to contact me via email or on linkedin. <br /><br />
                    </p>

                    <p>
                        <a href="../assets/Rolando_Chapa_Resume.PDF" download>my resume for more details.</a>

                    </p>
                </div>
            </div>
        </div>
    </div>
</div>
)
}