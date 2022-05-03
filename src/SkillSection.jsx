export default function SkillSection() {
return (
<div id="skills" class="flex flex-row flex-wrap justify-center gap-4 lg:gap-12 py-6 grayscale dark:text-ghost font-semibold text-xs lg:text-2xl text-charcoal tracking-tighter">
    <div tabindex="0" class="collapse collapse-plus subpixel-antialiased w-3/4 lg:w-1/3 border dark:border-8 border-4 dark:border-white bg-stone-500 lowercase">
        <input type="checkbox" />
        <div class="collapse-title text-2xl  font-semibold dark:text-ghost dark:font-medium">
            Skills
        </div>
        <div class="collapse-content dark:text-ghost dark:font-medium font-semibold text-base text-charcoal text-left ">
            <p>
                UI/UX Design |
                Javascript |
                React<br/>

                HTML5 |
                css3 |
                TailwindCSS<br/>
                
                Node.js |
                git |
                Vite<br/>

                
            </p>
        </div>
    </div>
</div>
)
}