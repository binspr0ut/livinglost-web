import Navbar from "../components/navbar";
import Footer from "../components/footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Meet the Developers | The Living and The Lost",
  description: "Meet the team behind The Living and The Lost",
};

type Member = {
  name: string;
  role: string;
  image: string;
  linkedin?: string;
  github?: string;
  instagram?: string;
};

const team: Member[] = [
  {
    name: "Karenhapukh Aurelia Rustiawan",
    role: "Project Manager / Illustrator",
    image: "/images/dev1.png",
    linkedin: "https://www.linkedin.com/in/karenhapukh-aurelia-rustiawan/",
  },
  {
    name: "Devica Sutikno",
    role: "Game Artist / Illustrator",
    image: "/images/dev2.png",
    linkedin: "https://www.linkedin.com/in/devicasutikno/",
  },
  {
    name: "Andre Michael",
    role: "Illustrator / Writer",
    image: "/images/dev3.png",
    linkedin: "https://www.linkedin.com/in/andre-michael-3024b1207/",
  },
  {
    name: "Mahardika Putra Wardhana",
    role: "Tech Lead / Game Developer",
    image: "/images/dev4.png",
    linkedin: "https://www.linkedin.com/in/mahardikawardhana/",
  },
  {
    name: "Rigel Sundun Tandilolo",
    role: "Game Developer / Writer",
    image: "/images/dev5.png",
    linkedin: "https://www.linkedin.com/in/rigeltandilolo/",
  },
];

export default function DeveloperPage() {
  return (
    <>
      <Navbar />

      <div className="min-h-screen pt-32 pb-24 bg-linear-to-b from-amber-100 to-amber-50">
        <h1 className="text-4xl font-bold text-center text-amber-900 mb-10">
          Meet the Developers
        </h1>

        {/* TEAM GRID */}
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 px-6">
          {team.map((member, index) => (
            <div
              key={index}
              className="bg-white/60 backdrop-blur-sm p-6 rounded-2xl overflow-hidden shadow-md border border-amber-200 flex flex-col items-center"
            >
              {/* Photo */}
              <div className="w-28 h-28 rounded-full border-4 border-amber-200 shadow-md overflow-hidden mb-4">
                <img
                  src={member.image}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Name */}
              <h2 className="text-xl text-amber-900">{member.name}</h2>
              <p className="text-amber-700 mb-4">{member.role}</p>

              {/* Buttons */}
              <div className="flex flex-col gap-3 w-full">
                {member.linkedin && (
                  <a
                    href={member.linkedin}
                    target="_blank"
                    className="w-full bg-amber-50 border border-amber-300 py-2 rounded-xl text-center text-amber-900 font-medium hover:bg-amber-100 shadow-sm transition"
                  >
                    LinkedIn
                  </a>
                )}

                {member.github && (
                  <a
                    href={member.github}
                    target="_blank"
                    className="w-full bg-amber-50 border border-amber-300 py-2 rounded-xl text-center text-amber-900 font-medium hover:bg-amber-100 shadow-sm transition"
                  >
                    GitHub
                  </a>
                )}

                {member.instagram && (
                  <a
                    href={member.instagram}
                    target="_blank"
                    className="w-full bg-amber-50 border border-amber-300 py-2 rounded-xl text-center text-amber-900 font-medium hover:bg-amber-100 shadow-sm transition"
                  >
                    Instagram
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </>
  );
}
