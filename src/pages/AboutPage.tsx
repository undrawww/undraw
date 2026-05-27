export default function AboutPage() {
  return (
    <section className="py-12">
      <div className="flex flex-col md:flex-row gap-10 md:gap-14">
        <div className="md:w-[40%] shrink-0">
          <img
            src="https://res.cloudinary.com/dqmmfgbf1/image/upload/v1779897056/me_bzsh7r.jpg"
            alt="Portrait"
            className="w-full h-auto rounded-2xl object-cover"
          />
        </div>

        <div className="flex-1">
          <span className="inline-block uppercase tracking-widest text-sm text-gray-500 mb-6">About Undraw</span>

          <div className="space-y-6 text-gray-600">
            <p>
              Dan Andrew Asis is a hybrid shooter specializing in both photography and videography, with a primary focus on wedding events and meaningful celebrations. His work is centered on capturing authentic moments that reflect emotion, connection, and the unique story behind every occasion.
            </p>
            <p>
              With a strong appreciation for the beauty found in everyday life, he is drawn to natural light, subtle details, and fleeting moments that often go unnoticed. Through his lens, these scenes are transformed into visual memories that feel timeless almost like glimpses of paradise preserved in stillness.
            </p>
            <p>
              Driven by passion and dedication, he consistently strives to produce work that not only meets client expectations but exceeds them. He pays close attention to every detail and is willing to go beyond what is required, ensuring that each shot is thoughtfully crafted and visually compelling. His approach is guided by the goal of creating meaningful, high-quality imagery that leaves a lasting impression.
            </p>
          </div>
        </div>
      </div>

      <div className="mt-12 space-y-1 text-xs text-black">
        <p>undraw15@gmail.com</p>
        <p>+63 991 342 4637</p>
      </div>
    </section>
  );
}
