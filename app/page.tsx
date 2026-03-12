"use client";
import Image from "next/image";
import { cherryBomb } from "./fonts";
import Snowfall from "react-snowfall";
import home_data from "@/data/home_data.json"
import { useEffect } from 'react'

export default function Home() {
  return (
    <main className="w-4/5 m-auto">
      {/* Start of Biography Section  */}
      <section id="biography" className="flex gap-2">
        {/* Avatar */}
        <div id="avatarSection" className="flex flex-col  items-center w-37.5">
          <div className="w-37.5 h-37.5 relative bg-secondary rounded-full">
            <Image
              alt="Suw's pfp"
              src="/img/avatar.png"
              fill
              className="object-cover rounded-full p-1.5"
            />
          </div>
          <div id="nameSection" className="mb-1">
            <span
              className={` ${cherryBomb.className} [-webkit-text-stroke:1px_black] text-main text-stroke text-2xl`}
            >
              Suw
            </span>
          </div>
          <div
            id="basicInfo"
            className="flex flex-col justify-between items-center gap-3"
          >
            <span
              id="gender"
              className={`text-xs  h-5.5 ${cherryBomb.className} text-white flex items-center justify-center gap-1  bg-sub-bg  rounded-full border-1 border-black px-2`}
            >
              <Image
                src="/img/male.png"
                width={16}
                alt="Male"
                height={16}
              ></Image>
              He/Him
            </span>
            <span
              id="country"
              className={`text-xs w-full h-5.5  text-white flex items-center justify-center gap-1  bg-sub-bg  rounded-full border-1 border-black px-2`}
            >
              <Image
                alt="Vietnam"
                src={`/img/vietnam.png`}
                width={20}
                height={20}
              ></Image>
              Can Tho • Vietnam
            </span>
          </div>
        </div>

        {/* Biography */}
        <div
          id="bio"
          className="bg-secondary-gradient p-4 rounded-2xl border-3 w-[40%]"
        >
          <h1
            className={`[-webkit-text-stroke:1px_black] flex items-center gap-1 text-main text-stroke text-xl ${cherryBomb.className}`}
          >
            <Image
              src="/icons/bio.png"
              alt="Biography"
              width={24}
              height={24}
            ></Image>
            BIOGRAPHY
          </h1>
          <p
            className={`[-webkit-text-stroke:1px_black] line-clamp-2 ${cherryBomb.className} text-stroke text-white`}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam mi
            arcu, tempus sit amzet luctus nec, consectetur at dolor.
          </p>
          <p
            className={`[-webkit-text-stroke:1px_black] line-clamp-2  ${cherryBomb.className} text-stroke text-white`}
          >
            Vivamus rutrum, felis in semper gravida, elit quam molestie massa,
            quis sollicitudin.
          </p>
          <p
            className={`[-webkit-text-stroke:1px_black] line-clamp-2  ${cherryBomb.className} text-stroke text-white `}
          >
            felis risus id urna. Maecenas quis euismod tellus. Orci varius
            natoque.
          </p>
        </div>
        {/* Favorite Musics */}
        <div className="bg-secondary-gradient w-full p-4 rounded-2xl border-3">
          <h1 className="text-main [-webkit-text-stroke:1px_black] text-xl mb-3">
            Favorite Artist:
          </h1>
          <iframe
            data-testid="embed-iframe"
            src="https://open.spotify.com/embed/artist/1eavaF4JYVytwilMtljNhO?utm_source=generator"
            width="100%"
            height="100%"
            allow="clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
          ></iframe>{" "}
        </div>
      </section>
      <section id="information" className="mt-3 flex relative gap-2 ">
        <div
          id="additionalInformation"
          className="bg-secondary-gradient p-4 rounded-2xl border-3 overflow-hidden w-[16%]"
        >
          <h1 className="text-main text-xl [-webkit-text-stroke:1px_black]">
            Additional:
          </h1>
          <p className="[-webkit-text-stroke:1px_black] text-white  line-clamp-3">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
          <p className="[-webkit-text-stroke:1px_black] text-white  line-clamp-3">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </div>

        <div id="personal" className="relative flex flex-col justify-between">
          <div
            id="lifeGoal"
            className="p-2 bg-secondary-gradient rounded-2xl border-3 overflow-hidden w-48.75"
          >
            <div className="flex items-center gap-1">
              <Image
                src={"/icons/goal.png"}
                alt="goals"
                width={30}
                height={30}
              ></Image>
              <span className="text-main text-xl [-webkit-text-stroke:1px_black]">
                Life goals:
              </span>
            </div>
            <ul className="text-white list-disc ">
              <li className="mx-0 ml-6 [-webkit-text-stroke:1px_black] ">
                To live happily with my family.
              </li>
              <li className="mx-0 ml-6 [-webkit-text-stroke:1px_black]">
                To be Back-end dev.
              </li>
            </ul>
          </div>

          <div
            id="favoriteSeries "
            className="bg-secondary-gradient py-2 px-4 rounded-2xl border-3 overflow-hidden w-48.75"
          >
            <span className="text-main text-xl [-webkit-text-stroke:1px_black]">
              Favorite Series:
            </span>
            <ul className="text-white list-disc ">
              <li className="mx-0 ml-4 [-webkit-text-stroke:1px_black]">
                Touhou Project.
              </li>
              <li className="mx-0 ml-4 [-webkit-text-stroke:1px_black]">
                Albion Online.
              </li>
              <li className="mx-0 ml-4 [-webkit-text-stroke:1px_black]">
                Blue Archive.
              </li>
            </ul>
          </div>
        </div>
        <div className=" bg-secondary-gradient p-4 rounded-2xl border-3 overflow-hidden w-2/4"></div>
        <div
          id="socialMedia"
          className="relative flex flex-col items-center justify-between flex-1"
        >
          <a
            href="#"
            className="bg-secondary-gradient rounded-full border-3 flex items-center justify-center w-full py-2"
          >
            <span className="[-webkit-text-stroke:1px_black] flex items-center gap-2 text-main text-xl">
              <Image
                src="/icons/github.png"
                alt="Github"
                width={24}
                height={24}
              ></Image>
              Github
            </span>
          </a>
          <a
            href="#"
            className="bg-secondary-gradient rounded-full border-3 flex items-center justify-center w-full py-2"
          >
            <span className="[-webkit-text-stroke:1px_black] flex items-center gap-2 text-main text-xl">
              <Image
                src="/icons/x.png"
                alt="Github"
                width={24}
                height={24}
              ></Image>
              X (Twitter)
            </span>
          </a>
          <a
            href=""
            className="bg-secondary-gradient rounded-full border-3 flex items-center justify-center w-full py-2"
          >
            <span className="[-webkit-text-stroke:1px_black] flex items-center gap-2 text-main text-xl">
              <Image
                src="/icons/discord2.jpg"
                alt="Github"
                width={24}
                height={24}
                className="rounded"
              ></Image>
              Github
            </span>
          </a>
          <a
            href=""
            className="bg-secondary-gradient rounded-full border-3 flex items-center justify-center w-full py-2"
          >
            <span className=" [-webkit-text-stroke:1px_black] flex items-center gap-2 text-main text-xl">
              <Image
                src="/icons/youtube.png"
                alt="Github"
                width={24}
                height={24}
              ></Image>
              Youtube
            </span>
          </a>
        </div>
      </section>
      <Snowfall snowflakeCount={70} wind={[0.5, 1]} speed={[0.5, 1]} />
    </main>
  );
}
