import Image from "next/image";
export default function Slider() {
	return (
       
      <div>

      <Image
        className=" w-[100%] h-[700px]"
        alt="slide_img"
        src={require("../../../img/slider.jpg")}
      />

       </div>
   );
}