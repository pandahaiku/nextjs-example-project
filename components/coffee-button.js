import Image from "next/image";
import React from "react";
import buttonStyles from '../styles/button.module.css';

const CoffeeButton = React.forwardRef(({ onClick, href }, ref) => {
  return <div href={href} onClick={onClick} ref={ref}>
    <button className="p-4 max-w-sm mx-auto bg-sky-100 hover:bg-sky-200 rounded-xl shadow-lg flex items-center space-x-4">
      <div className="shrink-0">
        <Image
          priority
          src="/images/coffee.png"
          className="h-12 w-12"
          height={70}
          width={70}
          alt="Profile Image"
        />
      </div>
      <div>
        {/* className= sets the attribute for the given section, and we can use styles defined from utilStyles which was imported*/}
        <div className="text-xl font-medium text-black">Thanks for reading!</div>
        <p className={buttonStyles.lighttext}>Click here to buy me a cofee!</p>
      </div>
    </button>
  </div>
})
CoffeeButton.displayName = "CoffeeButton";

export default CoffeeButton;