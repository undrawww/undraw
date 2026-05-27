import { NavLink } from 'react-router-dom';

export default function HomePage() {
  return (
    <section className="relative pt-6 pb-12">
      <div className="grid md:grid-cols-[0.68fr_1.82fr] gap-20 items-start pt-8 pb-12">
        <div className="max-w-[520px] md:max-w-[560px]">
          <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl leading-tight">The only limit is your imagination.</h1>
          <p className="text-gray-600 max-w-[42rem] mt-6">
            Driven by passion and creativity, I use photography and videography to transform ideas into meaningful visual stories. I enjoy capturing genuine moments and creating memorable experiences that reflect each person's unique story.
          </p>
          <div className="mt-7">
            <NavLink to="/gallery" className="inline-block px-5 py-2.5 rounded-full bg-black text-white font-semibold text-sm mt-6">
              View Gallery
            </NavLink>
          </div>
        </div>
        <div className="relative overflow-hidden md:justify-self-end md:w-full md:max-w-none md:-mr-20 md:min-h-[860px] lg:-mr-28 lg:min-h-[calc(100vh-140px)]">
          <img
            src="https://res.cloudinary.com/dqmmfgbf1/image/upload/v1779888536/imh_jyvqpc.jpg"
            alt="Hero"
            loading="lazy"
            className="w-full h-full object-cover object-right"
          />
        </div>
      </div>

      <div className="mt-8 space-y-1 text-xs text-black">
        <p>undraw15@gmail.com</p>
        <p>+63 991 342 4637</p>
      </div>
    </section>
  );
}
