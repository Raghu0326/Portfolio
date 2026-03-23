import { useParams, Link } from "react-router-dom";
import { projects } from "../data/projects";
import "./styles/ProjectDetails.css";
import { MdArrowBack } from "react-icons/md";
import { useEffect } from "react";

const ProjectDetails = () => {
  const { id } = useParams<{ id: string }>();
  const project = projects.find((p) => p.id === id);

  // Scroll to top when loading page
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!project) {
    return (
      <div className="project-not-found">
        <h2>Project not found</h2>
        <Link to="/" className="back-btn"><MdArrowBack /> Back to Home</Link>
      </div>
    );
  }

  return (
    <div className="project-details-container section-container">
      <Link to="/" className="back-btn"><MdArrowBack /> Back to Home</Link>
      
      <div className="project-header">
        <h1>{project.title}</h1>
        <p className="project-category">{project.category}</p>
        <div className="project-tools">
          <span>Tools used:</span> {project.tools}
        </div>
        {project.artstationUrl && (
          <div style={{ marginTop: '20px' }}>
            <a 
              href={project.artstationUrl} 
              target="_blank" 
              rel="noopener noreferrer" 
              style={{ display: 'inline-block', padding: '12px 28px', backgroundColor: '#fff', color: '#000', textDecoration: 'none', borderRadius: '50px', fontWeight: 'bold', fontSize: '0.9rem', transition: 'all 0.3s ease' }}
            >
              View on ArtStation
            </a>
          </div>
        )}
      </div>
      
      <div className="project-body">
        <p className="project-description">{project.fullDescription}</p>
      </div>

      {project.gallery && project.gallery.length > 0 && (
        <div className="project-gallery">
          {project.gallery.map((img, index) => (
            <img key={index} src={img} alt={`${project.title} detail ${index + 1}`} className="gallery-img" />
          ))}
        </div>
      )}
    </div>
  );
};

export default ProjectDetails;
