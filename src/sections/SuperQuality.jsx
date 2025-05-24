import { shoe8, thumbnailBackground } from "../assets/images"; // Ensure the correct import path
import  Button1 from "../components/Button1";

const SuperQuality = () => {
  return (
    <section
      id="about-us"
      className="flex justify-between items-center max-lg:flex-col gap-10 w-full max-container"
    >
      <div className="flex flex-1 flex-col">
        <h2 className="font-palanquin capitalize text-4xl lg:max-w-lg font-bold">
          We Provide You
          <span className="text-coral-red"> Super </span>
          <span className="text-coral-red">Quality </span> Shoes
        </h2>
        <p className="mt-4 lg:max-w-lg info-text">
          Ensuring premium comfort and style, our meticulously crafted footwear
          is designed to elevate your experience, providing you with unmatched
          quality, innovation, and a touch of elegance.
        </p>
        <p className="mt-6 lg:max-w-lg info-text">
          Our dedication to detail and excellence ensures your satisfaction.
        </p>
        <div className="mt-11">
          <Button1 label="View details" />
        </div>
      </div>

      <div
        className="flex-1 flex justify-center items-center relative"
        style={{
          backgroundImage: `url(${thumbnailBackground})`, // Set background image
          backgroundSize: 'cover', // Ensure it covers the entire div
          backgroundPosition: 'center', // Center the background image
          width: '100%',
          height: '500px', // Ensure the container has a height for the background to show
        }}
      >
        <img
          src={shoe8} // Shoe image
          alt="product detail"
          width={570}
          height={522}
          className="object-contain z-10 shadow-xl" // Ensure shoe image is on top of background and make it pop out with shadow
        />
      </div>
    </section>
  );
};

export default SuperQuality;
