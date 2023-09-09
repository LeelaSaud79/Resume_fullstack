import React from 'react';
import Education from './Education';
import Experience from './Experience';
import Certification from './Certification';
import Project from './Project';
import Contact from './Contact';
import Skill from './Skill';
import Reference from './Reference';
import Logout from './Logout';
import { useQuery } from 'react-query';
import { readRequest } from './ApiHandler';



const cv = () => {
  // Declare the information variable at the beginning
  const information = JSON.parse(localStorage.getItem('userInfo'));

  // Fetch education data
  const fetchEducation = async () => {
    const response = await readRequest(`educations/${information.info_id}`);
    return response?.data;
  };

  const { data: education } = useQuery('educationData', fetchEducation);

  // Fetch projects data
  const fetchProjects = async () => {
    const response = await readRequest(`Projects/${information.info_id}`);
    return response?.data;
  };
  const { data: projects } = useQuery('projectsData', fetchProjects);

  // For references
  const fetchReferences = async () => {
    const response = await readRequest(`References/${information.info_id}`);
    return response?.data;
  };
  const { data: references } = useQuery('referenceData', fetchReferences);

  // For Training/Certifications
  const fetchCertificate = async () => {
    const response = await readRequest(`Certifications/${information.info_id}`);
    return response?.data;
  };
  const { data: certifications } = useQuery('certificationsData', fetchCertificate);

  // For Experience
  const experData = async () => {
    const response = await readRequest(`Experiences/${information.info_id}`);
    return response?.data;
  };
  const { data: experience } = useQuery('experienceData', experData);

  // For Skills
  const skillData = async () => {
    const response = await readRequest(`Skills/${information.info_id}`);
    return response?.data;
  };
  const { data: skill } = useQuery('skillsData', skillData);

  return (
    <>
      <div className="container-fluid d-flex justify-content-center bg-dark">
        <div className="row box">
          <div className="col-sm-5">

            <div className="cont">
              <hr />
                <Contact
                  key={information.info_id}

                  name={information.name}
                  address={information.address}
                  email={information.email}
                  phone={information.phone}
                  github = {information.github_link}
                  link={information.social_media_link}
                  summary={information.summary}
                  designation ={information.designation}
                >
                  {information.phone && (
                    <p>
                      <i className="fas fa-phone"></i>
                      <a href={`tel:${information.phone}`}> Click to call</a>
                    </p>
                  )}

                  {information.address && (
                    <p>
                      <i className="fas fa-map-marker-alt"></i> Address:
                      <a
                        href={`https://goo.gl/maps/oKWFs2kzC6Hj8VHf6/${encodeURIComponent(
                          information.address
                        )}`}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {information.address}
                      </a>
                    </p>
                  )}

                  {information.email && (
                    <p>
                      <i className="far fa-envelope"></i>{" "}
                      <a href={`mailto:${information.email}`}>Email</a>
                    </p>
                  )}

                  {information.social_media_link && (
                    <p>
                      <a href={information.social_media_link}>
                        <i className="fab fa-linkedin"></i> LinkedIn
                      </a>
                    </p>
                  )}

                  {information.github && (
                    <p>
                      <a href={information.name}>
                        <i className="fab fa-github"></i> GitHub
                      </a>
                    </p>
                  )}
                </Contact>
            </div>

            <div className="skill">
              <h3>Skills</h3>
              <hr />
              {skill?.map((sk) => (
                <Skill key={sk.skill_id} heading={sk.skill} />
              ))}
            </div>
            <div className="reference">
              <h3>REFERENCE</h3>
              <hr />
              {references?.map((ref) => (
                <Reference
                  key={ref.ref_id}
                  heading={ref.reference_by}
                  position={ref.designation}
                  company={ref.company}
                  end={ref.email}
                  activity={ref.phone_number}
                />
              ))}
            </div>
            {/* button */}
            <div className="button">
              <a id="hire-button" href="mailto:leelasaud79@gmail.com">
                Click Here to Hire
              </a>
            </div>
            <div className="button">
              <a id="hire-button" href="mailto:leelasaud79@gmail.com">
                Click Here to Hire
              </a>

              <Logout />
            </div>
          </div>
          <div className="col-sm-7">
            {/* for education */}
            <div>
              <h3>EDUCATION</h3>
              <hr />
              {education?.map((edu) => (
                <Education
                  key={edu.eid}
                  heading={edu.college_name}
                  start={edu.startdate.split("-")[0]}
                  end={edu.end_date.split("-")[0]}
                  activity={edu.degree}
                  board={edu.board}
                />
              ))}
            </div>
            <br />

            {/* For Experience */}
            <div>
              <h3>EXPERIENCE</h3>
              <hr />
              {experience?.map((exp) => (
                <Experience
                  key={exp.id}
                  heading={exp.company_name}
                  position={exp.position}
                  start={exp.start_date.split("-")[0]}
                  end={exp.end_date.split("-")[0]}
                  activity={exp.tech_used}
                />
              ))}
              
            </div>
            <br />

            {/* Training/Certifications */}
            <div>
              <h3>TRAINING/CERTIFICATIONS</h3>
              <hr />
              {certifications?.map((cer) => (
                <Certification
                  key={cer.cid}
                  heading={cer.title}
                  activity={cer.issue_date.split("-")[0]}
                  describe={cer.institute}
                  link={cer.link}
                />
              ))}
            </div>

            {/* PROJECTS INVOLVED */}
            <div>
              <h3>PROJECTS INVOLVED</h3>
              <hr />    
              {projects?.map((proj) => (
                <Project
                  key={proj.pid}
                  heading={proj.project_name}
                  activity={proj.tech_stack}
                  describe={proj.descritpion}
                  site={proj.link}
                />
              ))}
             
              {/* <Leaflet /> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default cv;
