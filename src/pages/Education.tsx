import { useState} from 'react';
import Certificate from "../components/Certificate.tsx";
import dtu from "../assets/certificates/MScDiplomaDTU.png";
import kea from "../assets/certificates/Kea.png";
import lander from "../assets/certificates/LanderBA.png";
import kubernetes from "../assets/certificates/CertificateOfCompletion_KubernetesNativeTools2018.png";
import terraform from "../assets/certificates/CertificateOfCompletion_LearningTerraform2020.png";
import ror from "../assets/certificates/CertificateOfCompletion_RoR5EssentialTraining.png";
import ror_ar from "../assets/certificates/CertificateOfCompletion_RoRGetMoreFromActiveRecord.png";
import ror_stp from "../assets/certificates/CertificateOfCompletion_AddingStripe PaymentsToRoRApplication.png";

const Education = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const handlePrev = () => {
        setActiveIndex((prevIndex) => (prevIndex === 0 ? certificates.length - 1 : prevIndex - 1));
    };

    const handleNext = () => {
        setActiveIndex((prevIndex) => (prevIndex === certificates.length - 1 ? 0 : prevIndex + 1));
    };

    const certificates = [
        {
            name: 'MSc Computer Science and Engineering',
            date: '31/09/2024',
            img_src: dtu,
            button: 'MSc Computer Science and Engineering',
            alt: 'MSc Diploma in Computer Science and Engineering Nir Belelti',
            description: 'MSc in Computer Science and Engineering- Technical University of Denmark Specialized in computer security. ' +
                'During my MSc in Computer Science and Engineering, I focused on Computer Security. This involved studying ' +
                'advanced techniques to protect digital systems and data.' +
                ' My coursework covered in-depth studies in system security, program analysis, data security, and biometric systems.' +
                ' I gained practical skills in identifying and addressing vulnerabilities, incorporating secure design principles,' +
                ' and applying logic for security in real-world applications. In addition to my technical studies, ' +
                'I also explored the intersection of technology and business, emphasizing innovation, startup culture, ' +
                'and the development of scalable solutions. This combination of technical expertise and entrepreneurial ' +
                'mindset has equipped me to not only safeguard critical infrastructure and data but also to drive ' +
                'innovation and bring secure, cutting-edge solutions to market in a rapidly evolving digital landscape.'

        },
        {
            name: 'AP Computer Science',
            date: '20/01/17',
            img_src: kea,
            alt: 'AP Degree in Computer science',
            description: 'AP in Computer Science program, Where I gained a comprehensive curriculum covering databases, ' +
                'information technology, system development, programming, and business understanding. ' +
                'The 2½-year program included a 10-week internship and provided insight into financial management, ' +
                'systems analysis, programming languages, networks, and technology development.'
        },
        {
            name: 'BA in Business administration ',
            date: '24/06/2012',
            img_src: lander,
            alt: 'BA in Business administration',
            description: 'I completed a BA in Business Administration with a specialization in Management and Marketing. ' +
                'This diploma provided me with a comprehensive understanding of business management principles and marketing strategies.' +
                ' Throughout the program, I gained practical knowledge in areas such as leadership, organizational behavior, ' +
                'strategic marketing, consumer behavior, and market research. My specialization equipped me with the skills' +
                ' needed to effectively manage teams, develop marketing plans, and analyze market trends to drive business success.'
        },
        {
            name: 'Kubernetes Native Tools',
            date: '25/02/2022',
            img_src: kubernetes,
            button: 'Kubernetes training',
            alt: 'Kubernetes Native Tools Certificate of Completion',
            description: 'This course provided a comprehensive understanding of Kubernetes and its native tools in this course. ' +
                'The curriculum equipped me with the skills to effectively manage and deploy applications on Kubernetes' +
                ' clusters using these tools and provided hands-on experience with each tool.'
        },
        {
            name: 'Learning Terraform',
            date: '22/03/2022',
            img_src: terraform,
            button: 'Terraform training',
            alt: 'Learning Terraform Certificate of Completion',
            description: 'In this course, I gained an in-depth understanding of Terraform, an infrastructure as a code ' +
                'tool that enables safe and predictable provision and management infrastructure in any cloud. ' +
                'Through this course. I learned skills to efficiently manage infrastructure, provision resources, ' +
                'and deploy applications using Terraform. The course covered important topics like configuration files, ' +
                'providers, resources, and modules, with hands-on experience for each concept.'
        },
        {
            name: 'Ruby on Rails 5 Essential Training',
            date: '07/12/2016',
            img_src: ror,
            button: 'Ruby on Rails training',
            alt: 'Ruby on Rails 5 Essential Training Certificate of Completion',
            description: 'I completed a course that introduced me to Ruby on Rails, a web application framework written in Ruby.' +
                ' Throughout the course, I gained knowledge on using Rails to develop web applications, handle databases, ' +
                'and deploy applications. The topics covered included controllers, views, models, migrations, and routes, ' +
                'and I had the opportunity to gain practical experience with each concept.'
        },
        {
            name: 'Ruby on Rails 5: Get More from ActiveRecord',
            date: '13/06/2019',
            button: 'RoR Advanced ActiveRecord',
            img_src: ror_ar,
            alt: 'Ruby on Rails 5: Get More from ActiveRecord Certificate of Completion',
            description: 'The course provided me with a detailed look at ActiveRecord in Ruby on Rails, ' +
                'covering database interaction, queries, record management, associations, validations, callbacks, ' +
                'and migrations, and provided practical experience with each concept.'
        },
        {
            name: 'Adding Stripe Payments to Your Ruby on Rails Application',
            date: '04/06/2018',
            img_src: ror_stp,
            button: 'RoR Stripe Payments',
            alt: 'Adding Stripe Payments to Your Ruby on Rails Application Certificate of Completion',
            description: 'This course provided an introduction to integrating Stripe payments into a Ruby on Rails application. ' +
                'I learned how to use the Stripe API to process payments, manage subscriptions, and handle webhooks. ' +
                'The course covered topics such as payment processing, subscription management, webhook handling,' +
                ' and security best practices.'
        }
    ];


    return (
        <>
            <div className="row">
                <div className="col-12 mt-5">
                    <h1>Education</h1>
                </div>
            </div>
            <div className="row justify-content-center d-none d-lg-inline">
                <div className="col-12  mt-5 mb-5">
                    <div className="btn-group " role="group" aria-label="Basic radio toggle button group">
                        {certificates.map((cert, index) => (
                            <div key={index}>
                                <input
                                    type="radio"
                                    className="btn-check"
                                    name="btnradio"
                                    id={`btnradio${index}`}
                                    autoComplete="off"
                                    data-bs-target="#educationCarousel"
                                    data-bs-slide-to={index}
                                    onChange={() => setActiveIndex(index)}
                                />
                                <label
                                    className={`btn btn-outline-light btn-sm ${activeIndex === index ? 'active' : ''}`}
                                    htmlFor={`btnradio${index}`}
                                >
                                    {cert.button ? cert.button : cert.name}
                                </label>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <div className="row justify-content-center ">
                <div className="col text-center">
                    <div id="educationCarousel" className="carousel slide">
                        <div className="carousel-inner">
                            {certificates.map((cert, index) => (
                                <div key={index} className={`carousel-item ${activeIndex === index ? "active" : ""}`}>
                                    <Certificate src={cert['img_src']} name={cert['name']} alt={cert['alt']}
                                                 date={cert['date']} description={cert['description']}/>
                                </div>
                            ))}
                        </div>
                        <button className="carousel-control-prev ps-0 ps-md-2 ps-lg-5" type="button"
                                data-bs-target="#educationCarousel"
                                data-bs-slide="prev" onClick={handlePrev}>
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Previous</span>
                        </button>
                        <button className="carousel-control-next pe-0 pe-lg-5 pe-md-2" type="button"
                                data-bs-target="#educationCarousel"
                                data-bs-slide="next" onClick={handleNext}>
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Next</span>
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Education;