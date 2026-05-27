export default function FilmsPage() {
  return (
    <section className="py-12">
      <p className="text-right text-gray-600 mb-24">Our films turn your day into a timeless story filled with nostalgia and emotion.</p>
      <div className="w-full">
        <video
          src="https://res.cloudinary.com/dqmmfgbf1/video/upload/v1779922544/0528_fuu9yz.mp4"
          controls
          playsInline
          className="w-full rounded-2xl"
        />
      </div>

      <div className="mt-8 space-y-1 text-xs text-black">
        <p>undraw15@gmail.com</p>
        <p>+63 991 342 4637</p>
      </div>
    </section>
  );
}
