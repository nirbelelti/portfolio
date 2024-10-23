import Tech from "../components/Tech.tsx";
import ror from "../assets/ToolsLogos/ror.png";
import py from "../assets/ToolsLogos/Python.png";
import java from "../assets/ToolsLogos/Java.png";
import dbi from "../assets/ToolsLogos/RDBMS.png";
import devOps from "../assets/ToolsLogos/DevOps.png";
import cpp from "../assets/ToolsLogos/cpp.png";
import arduino from "../assets/ToolsLogos/arduino.png";
import deployment from "../assets/ToolsLogos/Deployment.png";
import js from "../assets/ToolsLogos/Js.png";
import webDesign from "../assets/ToolsLogos/responsiveWebDesign.png";


const Technologies = () => {

    return (
        <>
            <div className="row mt-5 mb-5">
                <h1>Technologies</h1>
            </div>

            <div className="row justify-content-center text-center">
                <Tech src={ror} alt={"Ruby on Rails"}
                      subtitles={['Rails V5 - v7.2', 'Ruby', 'Turbo-Rails', 'Hotwire', 'Sidekick', 'Rubocop', 'Capibara', 'RSpec', 'API', 'MVC']}/>
                <Tech src={py} alt={"Python"}
                      subtitles={['Flask', 'PyTree', 'SimPy', 'Unittest', 'Graphviz', 'Tree_sitter']}/>
                <Tech src={java} alt={"Java"}
                      subtitles={['Spring Boot', 'Junit', 'Maven', 'Gradle', 'Cucumber', 'RabbitMQ', 'Quarkus', 'RESTful', 'API', 'MVC']}/>
                <Tech src={cpp} alt={"C++"}
                      subtitles={[]}/>
                <Tech src={arduino} alt={"Arduino"}
                      subtitles={['C++', 'LoraWan', 'DataCake', 'MQTT', 'Helium']}/>
            </div>

            <div className="row justify-content-center mt-5">
                <Tech src={js} alt={"JavaScript"}
                      subtitles={['React', 'Angular', 'JQuery', 'Ajax', 'Stimulus', 'Typescript', 'CoffeeScript']}/>
                <Tech src={webDesign} alt={"Web Design"}
                      subtitles={['Foundation zurb', 'Bootstrap', 'CSS', 'SCSS', 'HTML 5']}/>
            </div>

            <div className="row justify-content-center mt-5">
                <Tech src={dbi} alt={"Databases"}
                      subtitles={['Postgres', 'MySQL', 'SQLight', 'MongoDB', 'Redis']}/>
                <Tech src={devOps} alt={"DevOps"}
                      subtitles={['Terraform', 'Kubernetes', 'Helm', 'Docker', 'Semaphore', 'Git Actions', 'Jenkins']}/>
                <Tech src={deployment} alt={"Deployment"}
                      subtitles={['Heroku', 'AWS', 'Cloud Telekom', 'Azure', 'Git']}/>
            </div>
        </>
    );
}

export default Technologies;