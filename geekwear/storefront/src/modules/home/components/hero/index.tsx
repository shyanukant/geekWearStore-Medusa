import UnderlineLink from "@modules/common/components/underline-link"
import Image from "next/image"


const Hero = () => {
  return (
    <section className=" dark:bg-gray-800 dark:text-gray-100">
      <div className="content-container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
        <div className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
          <h1 className="text-5xl font-bold leading-none sm:text-6xl">Fasion for
            <span className="dark:text-violet-400"> Geek</span>
          </h1>
          <p className="mt-6 mb-8 text-lg sm:mb-12">This Halloween, our new Geek collection will shelter you from the harsh elements of a world that doesn&apos;t care if you live or die.
          </p>

          <UnderlineLink href="/store">Explore products</UnderlineLink>

        </div>
        <div className="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
          <Image
            src="/home.png"
            // layout="responsive"
            width={600}
            height={650}
            loading="eager"
            priority={true}
            quality={90}
            objectFit="cover"
            alt="halloween"
            className="object-contain h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128"
            draggable="false"
          />
        </div>
      </div>
    </section>
  )
}

export default Hero
