import FadeSection from "./FadeSection";

export default function WhoAreWeSection() {
  return (
    <section
      className="relative overflow-hidden bg-cdblue px-4 py-24 text-white md:px-8"
      id="about"
    >
      {/* Background Logo: 
        1. Added pointer-events-none so it doesn't block user clicks.
        2. Used an arbitrary Tailwind class to make it spin very slowly (60 seconds).
      */}
      <img
        src="/LOGO/clogo.png"
        alt=""
        className="pointer-events-none absolute -right-40 top-10 z-0 h-[80rem] w-[80rem] animate-[spin_20s_linear_infinite] opacity-5 select-none"
      />

      <div className="relative z-10 mx-auto max-w-7xl">
        <FadeSection className="text-center">
          <p className="text-sm font-bold uppercase tracking-widest text-cgreen">
            Theorems Groups
          </p>
          <h2 className="mt-3 text-4xl font-extrabold tracking-tight md:text-5xl">
            Who We Are
          </h2>
        </FadeSection>

        <div className="mt-16 flex flex-col items-center gap-12 lg:mt-24 lg:flex-row lg:gap-20">
          
          {/* Earth Image (Now responsive) */}
          <div className="relative w-full max-w-md shrink-0 lg:w-5/12">
            <div className="absolute inset-0 -z-10 rounded-full bg-cgreen/20 blur-[100px]" />
            <img
              src="/images/dearth.png"
              alt="Global Reach"
              className="w-full drop-shadow-2xl"
            />
            <img
            src="/LOGO/tglogo.png"
            alt="theorems groups"
            className="absolute top-1/2 left-1/2 w-40 -translate-x-1/2 -translate-y-1/2 shadow-xl" />
          </div>

          {/* Large Quote */}
          <div className="flex w-full flex-col justify-center lg:w-7/12">
            {/* Cool decorative quote mark */}
            {/*<span className="font-serif text-8xl leading-none text-white/20">
              "
            </span>*/}
            <h3 className="text-3xl font-medium leading-relaxed md:text-4xl lg:text-5xl lg:leading-tight">
              We offer the <span className="text-cgreen">best</span> production machines from <span className="text-safety">India</span>, shipping to <span className="font-bold" > East and West African</span> countries to <span className="text-cblue">adapt</span> to the ever-changing needs of
              regional industries.
            </h3>
            {/*<span className="font-serif text-8xl text-end leading-none text-white/20">
              "
            </span>*/}
          </div>
        </div>

        {/* Mission Statement Glass Box */}
        <div className="relative mt-20 rounded-3xl border border-white/10 bg-gradient-to-b from-transparent to-cred p-8 backdrop-blur-md md:p-12 lg:mt-32 lg:p-16">
          
          {/* The Tilted Badge - refined for a cleaner look */}
          <span className="absolute -top-6 left-8 -rotate-3 rounded-xl bg-cred px-6 py-3 text-sm font-bold uppercase tracking-widest text-white shadow-xl md:left-12">
            Our Mission
          </span>
          
          <p className="text-2xl leading-relaxed text-gray-200 md:text-3xl lg:text-4xl lg:leading-normal">
            Our mission is to create a positive and sustainable impact by
            addressing social, economic, and environmental challenges in Africa.
            We contribute to the well-being and prosperity of communities by{" "}
            <span className="font-bold text-white">
              improving local living standards and generating local employment.
            </span>
          </p>
        </div>
      </div>
    </section>
  );
}
