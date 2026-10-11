import ImageDialog from '../components/ImageDialog.tsx';
import Icon from '../components/Icon.tsx';
import Section from '../components/Section.tsx';
import {courses, degrees} from '../content/education.ts';
import '../styles/Education.css';

const Education = () => (
    <Section
        id="education"
        label="Education"
        title="Three degrees, two disciplines"
        intro="Computer science with a security specialisation, built on a business degree — which is why I care about what software is for, not only how it works."
    >
        <ul className="degrees">
            {degrees.map((degree) => (
                <li key={degree.title} className="degree" data-reveal>
                    <p className="degree__year">{degree.year}</p>
                    <h3 className="degree__title">{degree.title}</h3>
                    <p className="degree__institution">{degree.institution}</p>
                    <p className="label">{degree.focus}</p>
                    <ul className="degree__highlights">
                        {degree.highlights.map((highlight) => <li key={highlight}>{highlight}</li>)}
                    </ul>
                    <ImageDialog
                        title={degree.title}
                        {...degree.document}
                        triggerClassName="text-button degree__document"
                    >
                        View diploma
                        <Icon name="expand"/>
                    </ImageDialog>
                </li>
            ))}
        </ul>

        <h3 className="courses__heading label">Courses</h3>
        <ul className="courses" data-reveal>
            {courses.map((course) => (
                <li key={course.title} className="course">
                    <span className="course__year">{course.year}</span>
                    <span className="course__title">{course.title}</span>
                    <span className="course__provider">{course.provider}</span>
                    <ImageDialog
                        title={course.title}
                        {...course.certificate}
                        triggerClassName="text-button course__certificate"
                        triggerLabel={`View certificate: ${course.title}`}
                    >
                        Certificate
                    </ImageDialog>
                </li>
            ))}
        </ul>
    </Section>
);

export default Education;
