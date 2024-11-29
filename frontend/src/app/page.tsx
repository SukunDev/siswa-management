import HomeNavbar from "@/components/homeNavbar";
import Image from "next/image";
import backhero from "./backhero.png";
import homepageSVG from "./homepage-header-1.svg";

export default function Home() {
  return (
    <>
      <div className="relative min-h-screen bg-[#171823] text-white font-montserrat">
        <HomeNavbar />

        <section className="bg-[#140648] overflow-hidden relative z-0">
          <Image
            src={backhero}
            alt=""
            height={1276}
            width={1974}
            className="absolute -z-10 w-full h-auto top-[70px] left-1/2 transform -translate-x-1/2"
          />
          <div className="max-w-7xl mx-auto h-screen px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col-reverse md:flex-row justify-between h-full mt-24 md:mt-0">
              <div className="flex flex-col my-auto basis-full md:basis-1/2">
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
                  Siswa Management
                </h2>
                <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-full md:max-w-2xl mb-6 md:mb-8">
                  Project ini merupakan project yang saya buat untuk memenuhi
                  kebutuhan test coding di PT Bratamedia
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <a
                    href="/signin"
                    className="px-5 py-3 sm:px-6 sm:py-3 w-fit rounded-md text-base sm:text-lg bg-blue-700 hover:-translate-y-1 transition duration-300 block capitalize"
                  >
                    sign in
                  </a>
                </div>
              </div>
              <div className="my-auto basis-full md:basis-1/2">
                <Image
                  src={homepageSVG}
                  alt=""
                  width={371}
                  height={406}
                  className="mx-auto max-w-full h-auto"
                />
              </div>
            </div>
          </div>
        </section>
        <footer className="py-4 sm:py-6 text-center text-gray-500">
          Made with <span className="text-red-500">❤</span> by sukundev 2024
        </footer>
      </div>
    </>
  );
}
