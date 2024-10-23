import {Chrono} from "react-chrono";
import dtuLogo from '../assets/WorkPlacesLogos/DTU_logo.png';
import bpLogo from '../assets/WorkPlacesLogos/BP-logo.png';
import superPushLogo from '../assets/WorkPlacesLogos/SuperPush-logo.png';

const Employment = () => {
    const items = [{
        title: "September 2023 - August 2024",
        cardTitle: "DTU MSc in Computer Science and Engineering",
        url: "https://www.dtu.dk/english/education/graduate/msc-programmes/computer-science-and-engineering",
        cardSubtitle: "Technical University of Denmark -  Full time student and graduation of MSc in Computer Science and Engineering",
        cardDetailedText: "As started in industrial MSc program where I have been allowed to participate wile continuing  full time work, I have been decided to dedicate my full time to the program and graduate in 2024 the time whas well spent where I tooke advaced courses in computer security and innovation and my master thesis was in the field implementation of service technology in cafes and restaurants archived the highest grade possible",

        media: {
            type: "IMAGE",
            source: {
                url: dtuLogo,
            },

        }
    },
        {
            title: "August 2016 - August 2023",
            cardTitle: "Brain Plus",
            url: "https://www.brain-plus.com/",
            cardSubtitle: "Full stack developer",
            cardDetailedText: "In my previous role at Brain Plus, a MedTech startup, I initially focused on backend development, API support, and database management. As the company expanded, I played a key role in transforming the internal platform into a SaaS solution for therapists. My responsibilities included managing authorization, setting up a license webshop, analyzing user performance, and designing a dashboard analytics tool.\n" +
                "\n" +
                "Later, I led the development of the backend for a new product, utilizing microservices architecture, and deploying it on Europe's Open Telekom Cloud. I was responsible for setting up the CI/CD pipeline using Semaphore and Git actions, while enhancing my DevOps skills with tools like Terraform, Kubernetes, and Helm.\n" +
                "\n" +
                "Additionally, leveraging my business background, I contributed to user experience improvements and helped shape the company’s sales and revenue strategy.",
            media: {
                type: "IMAGE",
                source: {
                    url: bpLogo
                }
            }
        },
        {
            title: "2012 - 2013",
            cardTitle: "Super Push - Publicis Groupe",
            url: "https://www.linkedin.com/company/super-push-publicis/?originalSubdomain=il",
            cardSubtitle: "Team Leader and campaign site supervisor",
            cardDetailedText: "In my role, I oversee a team of advertising field agents who are responsible for carrying out" +
                " campaigns in their designated areas. I ensure that day-to-day operations run smoothly, distribute knowledge " +
                "and resources fairly among the staff, and strive to maintain high levels of motivation and performance.",
            media: {
                type: "IMAGE",
                source: {
                    url: superPushLogo
                }
            }

        },
        {
            title: "2011 - 2012",
            cardTitle: "I.N.T Integrico",
            url: "https://www.linkedin.com/in/eli-meidan-00639a5a/?originalSubdomain=il",
            cardSubtitle: "Team Leader and campaign site supervisor",
            cardDetailedText: "I was responsible for maintaining all aspects of quality assurance. This included performing" +
                " visual inspections of products to ensure they met the qualifications of all customer orders. " +
                "I also ensured that production fulfilled the product build protocol and met the high standards of the company. " +
                "It was important to me to make sure the firm’s customers were receiving their orders correctly, " +
                "so I tracked shipments to ensure the customer would receive their product(s) on time. Additionally," +
                " I continually searched for ways to improve operations and logistics. ",

        },
        {
            title: "2001 - 2011",
            cardTitle: "Amin Car Services",
            url: "",
            cardSubtitle: "COO",
            cardDetailedText: "I have over ten years of experience working my way up in my family’s business, " +
                "I have diligently advanced within my family's business, progressing from an entry-level office position " +
                "to the esteemed role of Chief Operating Officer for a team of 25 dedicated employees. " +
                " My multifaceted responsibilities have encompassed service advisory, sales and marketing initiatives, " +
                "customer relations, and oversight of the garage floor departments.  I worked closely with the CEO to report, " +
                "advise, and execute business operations. ",

        }
    ];

    return (
        <>
            <div className="row mt-5">
                <div className="col">
                    <h1>Employment</h1>
                </div>
            </div>
            <div className="mb-5 pb-5">
                <Chrono items={items}
                        mode="VERTICAL_ALTERNATING"
                        disableToolbar={true}
                        mediaSettings={{align: 'right', fit: 'cover', imageFit: "contain"}}
                        scrollable={true}
                        disableInteraction={true}
                />
            </div>
        </>
    )
}

export default Employment;