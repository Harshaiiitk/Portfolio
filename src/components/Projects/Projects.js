import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import ProjectCard from './ProjectCards'
import Particle from '../Particle'
import concurrent from '../../Assets/Projects/concurrent.png'
import superRes from '../../Assets/Projects/superRes.jpeg'
import download from '../../Assets/Projects/download.png'

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: 'white' }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: 'center', paddingBottom: '10px' }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={superRes}
              isBlog={false}
              title="Image Super Resolution"
              description="Engineered an SRGAN model in Python using Keras, incorporating convolutional and residual blocks to achieve 4x image resolution enhancement while preserving intricate textures, reaching an 87% validation accuracy. Optimized data pipeline for high-dimensional image data in the MIRFLICKR-25000 dataset, reducing preprocessing time by 20% with advanced augmentation and standardization techniques for 128x128 pixel inputs.
"
              ghLink="https://github.com/Harshaiiitk"

            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={download}
              isBlog={false}
              title="Twitter Hate Speech Recognition"
              description="Built machine learning models in Python using scikit-learn, NLTK, and TensorFlow to identify hate speech and offensive content in real-time from Twitter data, leveraging Twitter API for data extraction. Engineered text-based features like n-grams, TF-IDF vectors, sentiment scores, and lexical attributes to enhance model accuracy and effectively capture hate speech patterns.
."
              ghLink="https://github.com/Harshaiiitk"

            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={concurrent}
              isBlog={false}
              title="Concurrent Data Structures in C++"
              description="Developed high-performance concurrent data structures using C++ and shared locks, demonstrating expertise in multi-threading and synchronization primitives. Optimized for read-heavy workloads, achieving an 800ms performance improvement for 1 million random reads over sequential implementations.
"
              ghLink="https://github.com/Harshaiiitk"

            />
          </Col>
        </Row>
      </Container>
    </Container>
  )
}

export default Projects
