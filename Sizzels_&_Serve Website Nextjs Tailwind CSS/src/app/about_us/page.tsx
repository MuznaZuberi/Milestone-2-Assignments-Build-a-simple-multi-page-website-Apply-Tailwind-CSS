import Image from "next/image";
import Link from "next/link";


export default function About() {
	return (

       <div>
           
           {/*About Section Start*/}
           <div className = "grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-7 pt-[280px]  p-10">
         	 <div>
         	  <Image
                   className=" w-[100%] h-[100%] rounded-tr-full"
                   alt="image"
                   src={require("../../../img/img_11.jpg")}
              />
           </div>

             <div>
              <h1 className = "font-bold font-serif text-orange-600 text-3xl p-4">The food's quality matches the wonderful taste of the root beer.</h1>
              <h1 className = "font-bold font-serif text-black text-xl pt-4  p-3">Establishing an environment where individuals can relish life's simple joys.
              </h1>
              <p className = "font-serif text-md p-3 text-justify">Our dynamic dining space guarantees an unforgettable gastronomic experience. Focusing on a range of sizzling dishes, we are committed to providing expertly crafted, delicious meals. The menu features an exciting blend of global cuisines, emphasizing grilled and sizzling platters that will  tantalize your palate. The lively ambiance, combined with outstanding service, makes it an ideal location for family get-togethers, celebrations, or a memorable dining outing.
              </p>
              <br/>
              <Link href = "/about_us" className=" text-white bg-orange-600 border-0 py-2 px-6 focus:outline-none hover:bg-black  rounded-xl ml-2">
                        Read More
              </Link>
             </div>
             </div>
        {/*About Section Start*/}

       </div>
	);
}
