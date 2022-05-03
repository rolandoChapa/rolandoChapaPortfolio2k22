export default function() {
return (
<div id="portfolio" class="flex flex-col items-center content-center gap-4 lg:gap-12 py-6 dark:text-ghost font-semibold text-xs lg:text-2xl text-charcoal tracking-tighter">
    
    <div tabindex="0" class="collapse collapse-plus w-3/4 lg:w-1/3 border dark:border-8 dark:border-white border-4 border-stone-900 bg-stone-500 lowercase">
        <input type="checkbox" />
        <div class="collapse-title text-2xl font-semibold dark:text-ghost dark:font-medium lowercase">
            Projects
        </div>
        <div class="collapse-content dark:text-ghost dark:font-medium font-semibold text-base text-charcoal text-left ">
            <div class="flex flex-col flex-wrap self-center place-content-center items-baseline gap-y-8">
                <div class="card w-auto bg-base-100 shadow-xl ">
                    
                    <div class="card-body">
                        <h2 class="card-title">2022 Portfolio</h2>
                        <p>tools used: </p>
                        <p>react + tailwindcss with daisyui + vite.js</p>
                        <div class="card-actions justify-end">
                            <button class="btn btn-active btn-ghost">
                                <a href="https://github.com/rolandoChapa/rolandoChapaPortfolio2k22">GitHub</a>
                            </button>
                        </div>
                    </div>
                </div>
                <div class="card w-auto bg-base-100 shadow-xl">
                    
                    <div class="card-body">
                        <h2 class="card-title">Random NBA Player</h2>
                        <p>tools used: </p>
                        <p>react + tailwindcss with flowbite + vite.js</p>
                        <div class="card-actions justify-end">
                            <button class="btn btn-active btn-ghost">
                                <a href="https://github.com/rolandoChapa/JS-Dice-Game">GitHub</a>
                            </button>
                        </div>
                    </div>
                </div>
                <div class="card w-auto bg-base-100 shadow-xl">
                    
                    <div class="card-body">
                        <h2 class="card-title">tinDog</h2>
                        <p>tools used: </p>
                        <p>react + tailwindcss with daisyui + vite.js</p>
                        <div class="card-actions justify-end">
                            <button class="btn btn-active btn-ghost">
                                <a href="https://github.com/rolandoChapa/TinDogV254698">GitHub</a>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
)
}