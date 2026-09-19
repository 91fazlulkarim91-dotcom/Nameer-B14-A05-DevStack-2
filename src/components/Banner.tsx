import BannerImage from "../../assets/banner-stack.png";
const Banner = () => {
  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img alt="Tailwind CSS hero component" src={BannerImage} className="" />
        <div>
          <h1 className="text-5xl font-bold">
            Build Your Ideal
            <br />
            <h2 className="text-5xl md:text-6xl font-extrabold bg-linear-to-r from-red-500 via-pink-500 to-purple-600 bg-clip-text text-transparent">
              Development Stack
            </h2>
          </h1>
          <p className="py-6">
            Explore frontend, backend, database, and tooling options, compare
            them side by side, and put together the stack that fits your next
            project.
          </p>
          <button className="px-5 py-3 rounded-lg bg-gradient-to-r from-orange-500 to-pink-500 text-white text-sm font-semibold shadow-md hover:scale-105 hover:shadow-lg transition-all duration-300">
            Explore Technologies
          </button>{" "}
          <button className="btn btn-primary">Learn More</button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
