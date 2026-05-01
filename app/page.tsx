"use client";
import Image from "next/image";
import { cherryBomb } from "./fonts";
import Snowfall from "react-snowfall";
import data from "@/data/home_data.json";
import { Fragment, useEffect, useState } from "react";
import { repository } from "./api/github/response";
import HeatMap from "@uiw/react-heat-map";

type HeatmapData = {
  date: string;
  count: number;
};

export default function Home() {
  const [apiData, setApiData] = useState<HeatmapData[]>([]);
  const pageData = data[0];

  const now = new Date();
  const timeStart = new Date(now);

  timeStart.setDate(timeStart.getDate() - pageData.config_gh_time_start);

  useEffect(() => {
    async function getData() {
      const res = await fetch("/api/github");
      if (!res.ok) {
        console.log("Fetching Data Error, Please contact to the page owner");
        return;
      }
      // Tmr Please map the result of API, also find a way to optimize the rate limit plz

      const map = new Map();
      const fetchedData = await res.json();

      const commitArr: repository[] =
        fetchedData.commitContributionsByRepository;

      const cutoff = new Date();
      cutoff.setDate(now.getDate() - pageData.config_gh_time_start);

      commitArr.forEach((repo) => {
        repo.contributions.nodes.forEach((node) => {
          const date = node.occurredAt.split("T")[0];
          const d = new Date(date);
          if (d < cutoff) return;

          map.set(date, (map.get(date) || 0) + node.commitCount);
        });
      });

      const result = Array.from(map, ([date, count]) => ({
        date,
        count,
      }));

      setApiData(result);
    }
    // 20/03/2026 - Alr mate, I did it, but not the rate limit tho
    getData();
  }, []);
  return (
    <main>
      <Snowfall snowflakeCount={70} wind={[0.5, 1]} speed={[0.5, 1]} />
      <div className="content-blocker">
        <h1>Sorry for the inconvenience.</h1>
        <p>
          As of now, this website does not support smaller screens.
          <br />
          This feature will be implemented soon.
          <br />
          By Suwa!
        </p>
      </div>

      <div className="w-4/5 m-auto xl:block hidden profile">
        {/* Start of Biography Section */}
        <section id="biography" className="profile-section">
          {/* Avatar */}
          <div id="avatarSection" className="avatar-section">
            <div className="avatar-profile">
              <Image
                alt="Suw's pfp"
                src="/img/avatar.png"
                fill
                sizes="full"
                className="avatar-profile-image object-cover"
              />
            </div>
            <div id="nameSection" className="mb-1">
              <h1 className={`${cherryBomb.className}`}>Suw</h1>
            </div>
            <div
              id="basicInfo"
              className="flex flex-col justify-between items-center gap-3"
            >
              <span
                id="gender"
                className={`text-xs  h-5.5 ${cherryBomb.className} text-white flex items-center justify-center gap-1  bg-sub-bg  rounded-full border-1 border-black px-2`}
              >
                <Image src="/img/male.png" width={16} alt="Male" height={16} />
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
                />
                Can Tho • Vietnam
              </span>
            </div>
          </div>

          {/* Biography */}
          <div
            id="bio"
            className="bg-secondary-gradient p-4 rounded-2xl border-3 w-[40%]"
          >
            <h1>
              <Image
                src="/icons/bio.png"
                alt="Biography"
                width={24}
                height={24}
              />
              Biography
            </h1>
            {/* This part, I'm just challenging myself to make something more complicate, so I did this.. */}
            {data.map((content, index) => (
              <Fragment key={index}>
                <p
                  className={`[-webkit-text-stroke:1px_black] line-clamp-2 ${cherryBomb.className} text-stroke text-white`}
                >
                  {content.bio_1}
                </p>
                <br />
                <p
                  className={`[-webkit-text-stroke:1px_black] line-clamp-2 ${cherryBomb.className} text-stroke text-white`}
                >
                  {content.bio_2}
                </p>
                <br />
                <p
                  className={`[-webkit-text-stroke:1px_black] line-clamp-2 ${cherryBomb.className} text-stroke text-white`}
                >
                  {content.bio_3}
                </p>
              </Fragment>
            ))}
          </div>
          {/* Favorite Musics */}
          <div className="bg-secondary-gradient w-full p-4 rounded-2xl border-3">
            <h1>Favorite Artist</h1>
            <iframe
              data-testid="embed-iframe"
              src="https://open.spotify.com/embed/artist/1eavaF4JYVytwilMtljNhO?utm_source=generator"
              width="100%"
              height="100%"
              allow="clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              loading="lazy"
            />{" "}
          </div>
        </section>
        <section id="information" className="profile-section">
          <div
            id="additionalInformation"
            className="bg-secondary-gradient p-4 rounded-2xl border-3 overflow-hidden w-[16%]"
          >
            <h1>Additional Information</h1>
            <p className="[-webkit-text-stroke:1px_black] text-white  line-clamp-3">
              {pageData?.additional_1}
            </p>
            <p className="[-webkit-text-stroke:1px_black] text-white  line-clamp-4">
              {pageData?.additional_2}
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
                />
                <h1>Life goals</h1>
              </div>
              <ul className="text-white list-disc ">
                <li className="mx-0 ml-6 [-webkit-text-stroke:1px_black]">
                  {pageData?.life_1}
                </li>
                <li className="mx-0 ml-6 [-webkit-text-stroke:1px_black]">
                  {pageData?.life_2}
                </li>
              </ul>
            </div>

            <div
              id="favoriteSeries "
              className="bg-secondary-gradient py-2 px-4 rounded-2xl border-3 overflow-hidden w-48.75"
            >
              <h1>Favorite:</h1>
              <ul className="text-white list-disc ">
                <li className="mx-0 ml-4 [-webkit-text-stroke:1px_black]">
                  {pageData?.series_1}
                </li>
                <li className="mx-0 ml-4 [-webkit-text-stroke:1px_black]">
                  {pageData?.series_2}
                </li>
                <li className="mx-0 ml-4 [-webkit-text-stroke:1px_black]">
                  {pageData?.series_3}
                </li>
              </ul>
            </div>
          </div>
          <div className=" bg-secondary-gradient p-4 rounded-2xl border-3 overflow-hidden w-2/4">
            <h1 className="text-main text-xl [-webkit-text-stroke:1px_black]">
              Github Activities
            </h1>
            <HeatMap
              className="w-full h-10/12"
              value={apiData}
              endDate={now}
              startDate={timeStart}
              width={`100%`}
              height={`100%`}
              rectSize={20}
              rectRender={(props, data) => {
                //Gonna find a way to add tooltips soon
              }}
            />
          </div>
          <div
            id="socialMedia"
            className="relative flex flex-col items-center justify-between flex-1"
          >
            <a
              href={pageData?.github}
              className="bg-secondary-gradient rounded-full border-3 flex items-center justify-center w-full py-2"
            >
              <h1 className="m-0">
                <Image
                  src="/icons/github.png"
                  alt="Github"
                  width={24}
                  height={24}
                />
                Github
              </h1>
            </a>
            <a
              href={pageData?.twitter}
              className="bg-secondary-gradient rounded-full border-3 flex items-center justify-center w-full py-2"
            >
              <h1 className="m-0">
                <Image
                  src="/icons/x.png"
                  alt="twitter"
                  width={24}
                  height={24}
                />
                X (Twitter)
              </h1>
            </a>
            <a
              href=""
              className="bg-secondary-gradient rounded-full border-3 flex items-center justify-center w-full py-2"
            >
              <h1 className="m-0">
                <Image
                  src="/icons/discord2.jpg"
                  alt="discord"
                  width={24}
                  height={24}
                  className="rounded"
                />
                Discord
              </h1>
            </a>
            <a
              href={pageData?.youtube}
              className="bg-secondary-gradient rounded-full border-3 flex items-center justify-center w-full py-2"
            >
              <h1 className="">
                <Image
                  src="/icons/youtube.png"
                  alt="youtube"
                  width={24}
                  height={24}
                />
                Youtube
              </h1>
            </a>
          </div>
        </section>
      </div>
    </main>
  );
}
