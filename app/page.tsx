import Image from "next/image";
import { cherryBomb } from "./fonts";

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
              className={` ${cherryBomb.className} text-main text-stroke text-2xl`}
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
        <div id="bio" className="bg-secondary-gradient p-4 rounded-2xl border-2 w-[40%]">
          <h1
            className={`text-main text-stroke text-lg ${cherryBomb.className}`}
          >
            BIOGRAPHY
          </h1>
          <p
            className={`line-clamp-3 text-sm ${cherryBomb.className} text-stroke text-white`}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam mi
            arcu, tempus sit amzet luctus nec, consectetur at dolor.
          </p>
          <br />
          <p
            className={`line-clamp-2 text-sm ${cherryBomb.className} text-stroke text-white`}
          >
            Vivamus rutrum, felis in semper gravida, elit quam molestie massa,
            quis sollicitudin.
          </p>
          <br />
          <p
            className={`line-clamp-2 text-sm ${cherryBomb.className} text-stroke text-white `}
          >
            felis risus id urna. Maecenas quis euismod tellus. Orci varius
            natoque.
          </p>
        </div>
        <div className="bg-secondary-gradient w-full p-4 rounded-2xl border-2"></div>
      </section>
      <section id="information"></section>
    </main>
  );
}
