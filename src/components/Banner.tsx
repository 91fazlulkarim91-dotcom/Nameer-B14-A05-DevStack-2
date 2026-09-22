import BannerImage from "../../assets/banner-stack.png";
const Banner = () => {
  return (
    <section className="bg-white py-12 sm:py-16 lg:py-20">
      <div className="mx-auto flex w-full max-w-6xl flex-col-reverse items-center gap-8 px-4 sm:px-6 lg:flex-row-reverse lg:justify-between lg:px-8">
        <img
          alt="Development stack illustration"
          src={BannerImage}
          className="w-full max-w-[230px] sm:max-w-[280px] lg:max-w-[300px]"
        />
        <div className="max-w-lg text-center lg:text-left">
          <h1 className="text-3xl font-bold leading-tight text-slate-900 sm:text-4xl">
            Build Your Ideal
            <br />
            <span className="bg-linear-to-r from-orange-500 via-pink-500 to-purple-600 bg-clip-text text-3xl font-extrabold text-transparent sm:text-4xl">
              Development Stack
            </span>
          </h1>
          <p className="max-w-md py-4 text-xs leading-5 text-slate-500 sm:text-sm">
            Explore frontend, backend, database, and tooling options, compare
            them side by side, and put together the stack that fits your next
            project.
          </p>
          <div className="flex flex-row justify-center gap-2 lg:justify-start">
            <button className="rounded btn bg-gradient-to-r from-orange-500 to-pink-500 px-3 py-2 text-[10px] font-semibold text-white shadow-sm">
              Explore Technologies
            </button>
            <button className="rounded border btn border-slate-200 px-4 py-2 text-[10px] font-semibold text-slate-600">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
