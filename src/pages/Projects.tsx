import apiLogo from '../assets/ToolsLogos/api-logo.png';
import devOpsLogo from '../assets/ToolsLogos/DevOps-logo.png';
import webDev from '../assets/ToolsLogos/web-development.png';
import python from '../assets/ToolsLogos/python.png';
import java from '../assets/ToolsLogos/java-logo.png';
import terraform from '../assets/ToolsLogos/terraform-logo.png';
import kubernetes from '../assets/ToolsLogos/kubernetes-logo.png';
import rails from '../assets/ToolsLogos/RoR-logo.png';
import react from '../assets/ToolsLogos/react.svg';
import ProjectsGroup from "../components/ProjectsGroup.tsx";
import {useEffect} from "react";


const Projects = () => {
    useEffect(() => {
        document.body.classList.add('robot-bg');
        return () => {
            document.body.classList.remove('robot-bg');
        };
    }, []);
    const apiProjects = [
        {
            name: "Microservices REST API Simulation with TDD",
            description: "This project demonstrates a microservices architecture using technologies such as Java, Maven," +
                " RabbitMQ (as a message broker), Cucumber, Docker, and Docker Compose. It showcases Test-Driven Development (TDD)" +
                " in a microservices environment, with a focus on inter-service communication via RabbitMQ." +
                " Each service is designed to be stand-alone, using Quarkus to handle web requests and utilizing the " +
                "Facade design pattern. Docker is used to containerize each service, while Docker Compose orchestrates the system.",
            technologies: ["Maven", "Java", "RabbitMQ", "Cucumber", "Docker", "Docker-Compose", "Quarkus"],
            image: java,
            link: "https://github.com/nirbelelti/JavaMicroservicesSimulation/tree/main/REST"
        },
        {
            name: "Demo User Authentication Service using Flask and JWT",
            description: "Implemented in Python (Facade, MVC, Flask), this demo API leverages Flask, JWT (JSON Web Tokens)," +
                " and SQLAlchemy with SQLite and Redis. It follows best practices for user authentication, including salting" +
                " and hashing passwords for security. The service returns JWTs for authentication and uses Redis for token s" +
                "torage and a robust token revocation mechanism. Key design patterns ensure secure, maintainable code and reliable token-based authentication.",
            technologies: ["Flask", "Python", "SQLAlchemy", "JWT", "TestUnit", "Singleton", "Facade", "Salting", "RESTful",
                "Redis", "MVC"],
            image: python,
            link: "https://github.com/nirbelelti/python-secure-flask-api-jwt-demo"
        },
        {
            name: "RESTful API with Ruby on Rails utilise Rails Engine",
            description: "This Ruby on Rails application facilitates payment processing between organizations, offering " +
                "APIs to initiate and manage payments, as well as process refunds. " +
                "It features a decoupled payment engine, which provides several advantages, such as isolating the payment" +
                " engine’s codebase from the main application for easier management and maintenance. " +
                "The engine is reusable across multiple projects without code duplication and can be versioned independently," +
                " giving better control over dependencies and updates. Additionally, the application follows the Facade design pattern," +
                " separating business logic from controllers for enhanced flexibility and maintainability.",
            technologies: ["Ruby on Rails", "Rails Engine", "API", "Facade", "RESTful", "PostgreSQL", "RSpec", "FactoryBot", "TDD"],
            image: rails,
            link: "https://github.com/nirbelelti/PaymentsDemoApp"
        },
    ]

    const frontEndProjects = [
        {
            name: "React App for a professional profolio",
            description: " This project showcases the professional portfolio website you are currently visiting. " +
                "It is built with React and TypeScript, featuring React Router for seamless navigation, including " +
                "active link highlighting for the current page. The website utilizes React Bootstrap for responsive " +
                "design and has a clean, modern aesthetic that prioritizes user experience and accessibility. " +
                "The site includes sections for a bio, projects, skills, and contact information, with smooth transitions" +
                " and animations that create a polished and engaging user interface.",
            technologies: ["React", "Vite", "JavaScript", "TypeScript", "NPM", "React Routs", "UI Design"],
            image: react,
            link: ""
        }]

    const devOpsProjects = [
        {
            name: "Terraform Cloud Configuration",
            description: "This project demonstrates the use of Terraform to configure cloud resources on OpenTelekomCloud," +
                " including a VPC, CCE, DNS, Load Balancer, SWR. It also installs Linux on the server, creates clusters, " +
                "and generates the .kube configuration file. and other essential components. and saving the configurations " +
                "and secrets are securely stored in encrypted S3 bucket.",
            technologies: ["Terraform", "OTC", "S3", "CCE", "DNS", "Load Balancer", "SWR", "Linux", "Kubernetes"],
            image: terraform,
            link: "https://github.com/nirbelelti/OTC_terraform_cloud_configuration"
        },
        {
            name: "Kubernetes and Helm Demo",
            description: "This project demonstrates the use of Kubernetes and Helm to deploy a simple Nginx web application." +
                " The Helm chart centralizes configuration in the values.yaml file, allowing easy customization of deployment" +
                " and service settings. By modifying this file, you can adjust the configuration or deploy a different " +
                "application without altering core templates. Helm's templating system ensures flexibility and simplifies" +
                " management in a containerized environment by keeping all variables in a single, easily manageable location.",
            technologies: ["Kubernetes", "Helm", "Nginx", "Docker", "YAML", "Helm Chart", "Minikube", "KubeCTL"],
            image: kubernetes,
            link: "https://github.com/nirbelelti/k8s-deployment-helm"
        }

    ]
    return (
        <>
            <div className="row mt-5">
                <h1>Projects</h1>
            </div>
            <ProjectsGroup group_icon={apiLogo} icon_alt={"api logo"} projects={apiProjects}/>
            <ProjectsGroup group_icon={webDev} icon_alt={'Web Development logo'} projects={frontEndProjects}/>
            <ProjectsGroup group_icon={devOpsLogo} icon_alt={'DevOps logo'} projects={devOpsProjects}/>
        </>
    )
}

export default Projects