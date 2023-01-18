import Head from "next/head";
import {BsFillMoonStarsFill} from "react-icons/bs";
import {
  AiFillTwitterCircle,
  AiFillLinkedin,
  AiFillYoutube,
  AiFillGithub,
} from "react-icons/ai";
import Image from "next/image";
import ProfilePictureWithoutBG from "../../public/images/profile_picture_without_background.png";
import TempImage from "../../public/images/temp_image.png";

export default function Home() {
  return (
    <>
      <Head>
        <title>Charizard17 Portfolio Website</title>
        <meta
          name="description"
          content="In this page, you can find some of my projects and my contact info"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="bg-black px-10 md:px-20 lg:px-40">
        <section className="min-h-screen">
          <nav className="py-10 mb-12 flex justify-between">
            <h1 className="text-xl text-yellow-300">Charizard17</h1>
            <ul className="flex items-center text-yellow-300">
              <li>
                <BsFillMoonStarsFill className="cursor-pointer text-xl" />
              </li>
              <li>
                <a
                  className="bg-gradient-to-r from-cyan-500 to-orange-500 text-white px-4 py-2 rounded-md ml-8"
                  href="#"
                >
                  Resume
                </a>
              </li>
            </ul>
          </nav>
          <div className="text-center p-10 text-yellow-300">
            <div className="mx-auto bg-gradient-to-b from-gray-100 rounded-full w-60 h-60 relative overflow-hidden mt-20">
              <Image
                src={ProfilePictureWithoutBG}
                layout="fill"
                objectFit="cover"
              />
            </div>
            <h2 className="text-5xl py-2 text-orange-500 font-medium md:text-6xl">
              Esad Dursun
            </h2>
            <h3 className="text-2xl py-2 md:text-3xl">
              Self-taught Software Engineer
            </h3>
            <p className="text-md py-5 leading-8 text-yellow-100 md:text-xl max-w-lg mx-auto">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Consequuntur deserunt minima officiis, blanditiis impedit hic
              rerum nihil laborum neque facilis voluptate cupiditate incidunt
              adipisci voluptatibus veritatis quidem. Quo, architecto explicabo.
            </p>
          </div>
          <div className="flex justify-center gap-16 py-3 text-yellow-300 text-5xl">
            <AiFillLinkedin />
            <AiFillGithub />
          </div>
        </section>
        <section>
          <div className="text-center p-10 text-yellow-300">
            <h3 className="text-2xl py-2">Services I offer</h3>
            <p className="text-md py-5 leading-8 text-yellow-100">
              Lorem ipsum dolor sit, amet{" "}
              <span className="text-teal-300">consectetur</span> adipisicing
              elit. In explicabo dignissimos commodi sequi sed fugiat deleniti
              consequatur itaque voluptas. Animi?
            </p>
          </div>
          <div className="lg:flex gap-10">
            <div className="text-center p-10 bg-gray-800 text-yellow-300 shadow-lg rounded-xl my-10">
              <Image src={TempImage} width={100} height={100} />
              <h3>Lorem, ipsum.</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Doloremque est natus quo?
              </p>
              <h4 className="py-4 text-orange-400">Tools I use</h4>
              <p className="text-gray-300 py-1">Photoshop</p>
              <p className="text-gray-300 py-1">Illustrator</p>
              <p className="text-gray-300 py-1">Figma</p>
            </div>
          </div>
          <div className="lg:flex gap-10">
            <div className="text-center p-10 bg-gray-800 text-yellow-300 shadow-lg rounded-xl my-10">
              <Image src={TempImage} width={100} height={100} />
              <h3>Lorem, ipsum.</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Doloremque est natus quo?
              </p>
              <h4 className="py-4 text-orange-400">Tools I use</h4>
              <p className="text-gray-300 py-1">Photoshop</p>
              <p className="text-gray-300 py-1">Illustrator</p>
              <p className="text-gray-300 py-1">Figma</p>
            </div>
          </div>
          <div className="lg:flex gap-10">
            <div className="text-center p-10 bg-gray-800 text-yellow-300 shadow-lg rounded-xl my-10">
              <Image src={TempImage} width={100} height={100} />
              <h3>Lorem, ipsum.</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Doloremque est natus quo?
              </p>
              <h4 className="py-4 text-orange-400">Tools I use</h4>
              <p className="text-gray-300 py-1">Photoshop</p>
              <p className="text-gray-300 py-1">Illustrator</p>
              <p className="text-gray-300 py-1">Figma</p>
            </div>
          </div>
        </section>
        <section>
          <div className="text-center p-10 text-yellow-300">
            <h3 className="text-3xl py-1">Portfolio</h3>
            <p className="text-md py-5 leading-8 text-yellow-100">
              Lorem ipsum dolor sit, amet{" "}
              <span className="text-teal-300">consectetur</span> adipisicing
              elit. In explicabo dignissimos commodi sequi sed fugiat deleniti
              consequatur itaque voluptas. Animi? Lorem ipsum dolor sit amet,
              consectetur adipisicing elit. Ratione, hic?
            </p>
          </div>
          <div className="flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap">
            <div className="flex-1">
              <Image src={TempImage} className="rounded-lg m-auto" />
            </div>
            <div className="flex-1">
              <Image src={TempImage} className="rounded-lg m-auto" />
            </div>
            <div className="flex-1">
              <Image src={TempImage} className="rounded-lg m-auto" />
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
