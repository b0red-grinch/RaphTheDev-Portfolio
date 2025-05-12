import Image from "next/image";

import { CalendarDays } from "lucide-react";

import { Card, CardContent } from "@/components/ui/card";

import { JobImages } from "@/components/JobImages";

const jobs = [
    {
        role: "Backend Developer", // TODO: Replace with actual role
        company: "Good Thing co", // TODO: Replace with actual company name
        logo: "/company.svg", // TODO: Replace with actual logo
        duration: "2024 - Present",
        description: [
            "* Collaborated with other developers to build API microservices for an e-commerce app using Node-Express, MongoDB, and TypeScript.",
            "* Assisted in the development of scalable APIs for handling product listing, inventory management, payment processes, and logistics of an ecommerce store",
            "* Programmed automations to enhance customer conversion with abandoned carts and birthday email alerts using CRON + RabbitMQ",
            "* Integrated with Flowdesk to programmatically add new users to newsletters for email marketing endeavors",
            "* Contributed to the development of an admin API service for enabling the operations team to manage products and inventory",
            "* Computed comprehensive analytics and metrics for tracking the performance of products using MongoDB aggregations",
            "* Programmed automations for adding 5,000+ products listed on an Excel spreadsheet to the platform",
            "* Developed an API service that onboarded and served 50+ local vendors",
            "* Provided key sales metrics and analytics on the vendor API using MongoDB aggregations  ",
            "* Collaborated with other team members to brainstorm feature implementations and withFrontend Engineers to facilitate the smooth integrations of endpoints",
        ],
        link: "https://techinnovators.com",
        images: [],
    },
    // {
    //     role: "Senior Full-Stack Developer", // TODO: Replace with actual role
    //     company: "Tech Innovators Inc.", // TODO: Replace with actual company name
    //     logo: "/company.svg", // TODO: Replace with actual logo
    //     duration: "2018 - 2020",
    //     description:
    //         "Developed and maintained various client projects, focusing on responsive design and performance optimization.",
    //     link: "https://websolutions.com",
    //     images: [
    //         "/devvault.png",
    //         "/devvault.png",
    //     ],
    // },
    // {
    //     role: "Senior Full-Stack Developer", // TODO: Replace with actual role
    //     company: "Tech Innovators Inc.", // TODO: Replace with actual company name
    //     logo: "/company.svg", // TODO: Replace with actual logo
    //     duration: "2016 - 2018",
    //     description:
    //         "Assisted in the development of web applications, gained experience in agile methodologies and version control.",
    //     link: "https://startupventures.com",
    //     images: [
    //         "/devvault.png",
    //         "/devvault.png",
    //     ],
    // },
]

export const Experience = () => {
    return (
        <>
            <h2 className="text-xl font-bold mb-4">Work Experience</h2>
            <Card>
                <CardContent className="pt-6">
                    <ul className="space-y-8">
                        {jobs.map((j, i) => (
                            <li key={i} className="border-b last:border-b-0 pb-8 last:pb-0">
                                {/* Job Details */}
                                <div className="flex items-center space-x-4">
                                    <Image
                                        src={j.logo}
                                        alt={j.company}
                                        width={40}
                                        height={40}
                                        className="rounded-md border shadow-md object-cover"
                                    />
                                    <div>
                                        <h3 className="font-semibold">
                                            {j.role}
                                        </h3>
                                        <p className="text-sm text-muted-foreground">
                                            {j.company}
                                        </p>
                                    </div>
                                </div>
                                <p className="text-xs text-muted-foreground mt-2 flex items-center">
                                    <CalendarDays className="size-3 mr-2"/>
                                    {j.duration}
                                </p>
                                <p className="text-sm mt-2">{j.description.map((description:string, index:number)=> (
                                    <div key={index}> {description} </div>
                                ))}</p>
                                {/* Job Images */}
                                <JobImages 
                                    role={j.role} 
                                    link={j.link}
                                    images={j.images} 
                                    duration={j.duration} 
                                />
                            </li>
                        ))}
                    </ul>
                </CardContent>
            </Card>
        </>
    )
}