import { User } from "lucide-react";

const president = {
  name: "Mr. Sachin Satvi",
  role: "President",
};

const boardMembers = [
  { name: "Mr. Bablu Vahut", role: "Board Member" },
  { name: "Mrs. Shaila Diwe", role: "Treasurer" },
  { name: "Mr. Pranjan Raut", role: "Secretary" },
  { name: "Dr. Sharad Satvi", role: "Vice President" },
  { name: "Mr. Abhijit Pilena", role: "Joint Secretary" },
  { name: "Mr. Vipul Bharsat", role: "Board Member" },
];

const teams = [
  {
    title: "Activity Core Team #1",
    subtitle: "Education & Career Guidance",
    lead: "Mr. Chetan Guroda",
    members: 5,
  },
  {
    title: "Activity Core Team #2",
    subtitle: "Social Awareness",
    lead: "Dr. Sunil Parhad",
    members: 5,
  },
  {
    title: "Activity Core Team #3",
    subtitle: "Social Entrepreneurship",
    lead: "Mr. Pranjan Raut",
    members: 5,
  },
  {
    title: "Activity Core Team #4",
    subtitle: "Warli Painting Cluster Development",
    lead: "Mr. Sachin Satvi",
    members: 5,
  },
  {
    title: "Activity Core Team #5",
    subtitle: "Organizational Development",
    lead: "Mr. Vipul Bharsat",
    members: 5,
  },
  {
    title: "Activity Core Team #6",
    subtitle: "Traditional Knowledge & IPR",
    lead: "Mrs. Shaila Diwe",
    members: 5,
  },
];

export default function OrganizationChart() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4">

        <div className="text-center mb-14">
          <h2 className="text-4xl font-bold">
            Adivasi Yuva Seva Sangh
          </h2>
        </div>

        {/* PRESIDENT */}

        <div className="flex flex-col items-center">

          <div className="w-20 h-20 rounded-full bg-gray-100 border flex items-center justify-center">
            <User className="w-10 h-10 text-gray-500"/>
          </div>

          <h3 className="font-bold mt-3">
            {president.name}
          </h3>

          <p className="text-gray-500">
            {president.role}
          </p>

          <div className="w-[2px] h-12 bg-gray-300 mt-4"></div>

        </div>

        {/* BOARD */}

        <div className="relative mt-4">

          <div className="absolute left-16 right-16 top-0 h-[2px] bg-gray-300"></div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 pt-6">

            {boardMembers.map((member, index) => (

              <div
                key={index}
                className="relative flex flex-col items-center"
              >

                <div className="absolute -top-6 h-6 w-[2px] bg-gray-300"></div>

                <div className="w-16 h-16 rounded-full border bg-gray-100 flex items-center justify-center">
                  <User className="w-8 h-8 text-gray-500"/>
                </div>

                <h4 className="font-semibold text-sm mt-3 text-center">
                  {member.name}
                </h4>

                <p className="text-xs text-gray-500 text-center">
                  {member.role}
                </p>

              </div>

            ))}

          </div>

        </div>
                {/* ================= CORE ACTIVITY TEAMS ================= */}

        <div className="mt-20">

          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold">
              II. Core Activity Teams
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">

            {teams.map((team, index) => (

              <div
                key={index}
                className="relative bg-white border rounded-xl shadow-sm overflow-hidden hover:shadow-lg transition"
              >

                {/* Top Members */}

                <div className="bg-gray-100 px-6 py-4">

                  <div className="flex justify-center gap-3">

                    {Array.from({ length: team.members }).map((_, i) => (

                      <div
                        key={i}
                        className="w-10 h-10 rounded-full border bg-white flex items-center justify-center"
                      >
                        <User className="w-5 h-5 text-gray-500" />
                      </div>

                    ))}

                  </div>

                </div>

                {/* Team Name */}

                <div className="bg-gray-200 px-6 py-5 text-center">

                  <h3 className="font-bold text-lg">
                    {team.title}
                  </h3>

                  <p className="text-sm text-gray-600 mt-1">
                    {team.subtitle}
                  </p>

                </div>

                {/* Connector */}

                <div className="flex justify-center">
                  <div className="w-[2px] h-8 bg-gray-300"></div>
                </div>

                {/* Lead */}

                <div className="pb-8 flex flex-col items-center">

                  <div className="w-14 h-14 rounded-full border bg-gray-100 flex items-center justify-center">

                    <User className="w-7 h-7 text-gray-500"/>

                  </div>

                  <h4 className="font-semibold mt-3">
                    {team.lead}
                  </h4>

                  <p className="text-sm text-gray-500">
                    Team Lead
                  </p>

                </div>

              </div>

            ))}

          </div>

        </div>
                {/* ================= VOLUNTEERS ================= */}

        <div className="mt-24">

          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold">
              III. Volunteers / Supporters / Others
            </h2>

            <p className="text-gray-500 mt-2">
              Community volunteers, supporters and well-wishers working together for tribal development.
            </p>
          </div>

          <div className="border rounded-xl p-10">

            <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 lg:grid-cols-10 gap-6">

              {Array.from({ length: 20 }).map((_, index) => (

                <div
                  key={index}
                  className="flex flex-col items-center"
                >

                  <div className="w-12 h-12 rounded-full bg-gray-100 border flex items-center justify-center">

                    <User className="w-6 h-6 text-gray-500"/>

                  </div>

                  <span className="text-xs text-gray-500 mt-2 text-center">
                    Volunteer
                  </span>

                </div>

              ))}

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}