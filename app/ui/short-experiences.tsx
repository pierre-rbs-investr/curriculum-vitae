import Image from "next/image";

const items = [
  {
    id: 1,
    position: "Lead Developer",
    company: "Acme Corp",
    startDate: "2019-01-01",
    endDate: "2020-01-01",
    skills: ["React", "TypeScript", "GraphQL"],
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    logo: "https://tailwindui.com/img/logos/158x48/transistor-logo-gray-900.svg",
  },
  {
    id: 2,
    position: "Lead Developer",
    company: "Acme Corp",
    startDate: "2019-01-01",
    endDate: "2020-01-01",
    skills: ["React", "TypeScript", "GraphQL"],
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    logo: "https://tailwindui.com/img/logos/158x48/transistor-logo-gray-900.svg",
  },
  // More items...
];

export default function ShortExperiences() {
  return (
    <>
      <div className="bg-indigo-600 px-6 py-24 sm:py-32 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
            Experiences
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-300">
            Discover my professional experiences and what I can bring to your
            team. Why not working together? Go ahead and be the next one!
          </p>
          <ul role="list" className="divide-y divide-gray-200 py-10">
            <li className="px-4 py-4 sm:px-0">
              <button
                type="button"
                className="group relative block w-full rounded-lg border-2 border-dashed border-gray-300 p-12 text-center hover:border-white focus:outline-none focus:ring-2 focus:ring-indigo-50 focus:ring-offset-2"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-12 h-12 mx-auto text-gray-300 group-hover:text-white"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 0 0 .75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 0 0-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0 1 12 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 0 1-.673-.38m0 0A2.18 2.18 0 0 1 3 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 0 1 3.413-.387m7.5 0V5.25A2.25 2.25 0 0 0 13.5 3h-3a2.25 2.25 0 0 0-2.25 2.25v.894m7.5 0a48.667 48.667 0 0 0-7.5 0M12 12.75h.008v.008H12v-.008Z"
                  />
                </svg>

                <span className="mt-2 block text-sm font-semibol text-gray-300 group-hover:text-white">
                  Add a new experience
                </span>
              </button>
            </li>
            {items.map((item) => (
              <li key={item.id} className="px-4 py-4 sm:px-0">
                <div className="overflow-hidden rounded-lg bg-white shadow">
                  <div className="px-4 py-5 sm:px-6 flex justify-between">
                    <div className="flex gap-x-6">
                      <Image
                        src={item.logo}
                        alt="Company logo"
                        width={80}
                        height={25}
                      />
                      {item.company}
                    </div>
                    <div>
                      {item.startDate} - {item.endDate}
                    </div>
                  </div>
                  <div className="px-4 py-5 sm:p-6">{item.description}</div>
                  <div className="bg-gray-50 px-4 py-5 sm:p-6">
                    {item.skills.map((skill) => (
                      <span
                        key={skill}
                        className="inline-block px-2 py-1 text-xs font-semibold text-white bg-indigo-500 rounded-full mx-1"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}
