export default function NavBar() {
    return (
        
    <div class="flex flex-row flex-wrap justify-center  gap-4 lg:gap-12 py-6 grayscale dark:text-ghost font-semibold text-xs lg:text-2xl text-charcoal tracking-tighter">
    <a class="z-10 dark:text-ghost text-charcoal font-bold text-xs lg:text-2xl lowercase">Rolando Chapa</a>
    <a href="#about" class="link link-hover lowercase">About Me</a>
    <a href="#portfolio" class="link link-hover lowercase">Projects</a>
    <a href="#skills" class="link link-hover lowercase">Skils</a>
    <a href="#contact" class="link link-hover lowercase">Contact</a>
</div>
    )
}