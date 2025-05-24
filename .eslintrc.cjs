const ShoeCard = ({ imgURL, changeBigShoeImage, bigShoeImg }) => {
  const handleClick = () => {
    // Debugging line
    console.log('Current Big Image:', bigShoeImg);
    console.log('Clicked Image URL:', imgURL.bigShoe);

    // Check if the big shoe image is different and switch
    if (bigShoeImg !== imgURL.bigShoe) {
      changeBigShoeImage(imgURL.bigShoe); // Update the big image in the parent component
    }
  };

  return (
    <div
      className={`border-2 rounded-xl ${bigShoeImg === imgURL.bigShoe ? "border-coral-red" : "border-transparent"} cursor-pointer max-sm:flex-1`}
      onClick={handleClick}
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%', // Ensure the div takes full width
        height: '100%', // Ensure the div takes full height
        position: 'relative', // Ensure it's not affected by any surrounding elements
        pointerEvents: 'auto', // Ensure pointer events are enabled
      }}
    >
      <div className='flex justify-center items-center bg-card bg-center bg-cover sm:w-40 sm:h-40 rounded-xl max-sm:p-4'>
        <img
          src={imgURL.thumbnail}
          alt='shoe collection'
          width={127}
          height={103.34}
          className='object-contain'
        />
      </div>
    </div>
  );
};

export default ShoeCard;
