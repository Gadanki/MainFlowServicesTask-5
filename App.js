import React, { useState } from "react";
import "./App.css";

const googleCloudServices = [
  { id: 1, 
    name: "Compute Engine", 
    description: "Google Compute Engine is an IaaS component of Google Cloud Platform (GCP). It is built on the global infrastructure that runs Google's  Search Engine, Gmail, YouTube, and other Big Services.", 
    features: ['Computing','Data Storage','Data Analytics','Machine Learning'],
    image: "/images/compute-engine.png" },
  { id: 2, 
    name: "Cloud Storage", 
    description: "Cloud storage is a cloud computing service in which data and files are stored offsite by a third-party provider and can be accessed through a public internet or dedicated private network connection.", 
    features:['Private cloud','Public cloud','Hybrid cloud','Multicloud'],
    image: "/images/cloud-storage.png" },
  { id: 3, 
    name: "BigQuery", 
    description: "BigQuery is designed to handle massive amounts of data, such as log data from thousands of retail systems or IoT data from millions of vehicle sensors across the globe. It's a fully managed and serverless data warehouse which empowers you to focus on analytics instead of managing infrastructure. ", 
    features:['Storage','Ingestion','Querying'],
    image: "/images/bigquery.png" },
  { id: 4, 
    name: "AI Platform", 
    description: "An artificial intelligence (AI) platform is an integrated set of technologies that allow people to develop, test, deploy, and refresh machine learning (ML) and deep learning models.", 
    features:['OpenAI ChatGPT','DataRobot','TenosrFlow','Microsoft Azure'],
    image: "/images/ai-platform.png" },
  { id: 5, 
    name: "Cloud Functions", 
    description: "Cloud Functions are a serverless computing service offered by Google Cloud Platform (GCP). They provide a simple way to run code in response to events with minimal configuration and maintenance.", 
    features:['Cost savings','Flexibility','Scalability'],
    image: "/images/cloud-functions.png" },
];

function App() {
  const [selectedService, setSelectedService] = useState(null);

  return (
    <div className="App">
      <nav className="App-nav">
        <div className="nav-logo">Cloud Explorer</div>
        <ul className="nav-links">
          <li><a href="#home">Home</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#about">About</a></li>
        </ul>
      </nav>


      <header className="App-header" id="home">
        <h1>Google Cloud Services</h1>
      </header>

      <div className="container">

        <div className="services" id="services">
          <h2>Services</h2>
          {googleCloudServices.map((service) => (
            <button
              key={service.id}
              onClick={() => setSelectedService(service)}
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "flex-start",
                marginBottom: "10px",
                padding: "10px",
                border: "1px solid #ddd",
                borderRadius: "5px",
                backgroundColor: selectedService?.id === service.id ? "#1976d2" : "#fff",
                color: selectedService?.id === service.id ? "#fff" : "#000",
                cursor: "pointer",
                width: "350px",
                height: "80px",
                boxSizing: "border-box",
              }}
            >
              <img
                src={service.image}
                alt={service.name}
                style={{ 
                  width: "50px",  
                  height: "50px", 
                  marginRight: "10px" 
                }}
              />
              {service.name}
            </button>
          ))}
        </div>

        <div className="details">
          <h2>Details</h2>
          {selectedService ? (
            <>
              <img
                src={selectedService.image}
                alt={selectedService.name}
                style={{ 
                  width: "450px", 
                  height: "300px",
                  marginBottom: "20px" 
                }}
              />
              <h3>{selectedService.name}</h3>
              <p>{selectedService.description}</p>
              <h3>Features:</h3>
              <ul>
                {selectedService.features.map((feature, idx) => (
                  <li key={idx}>{feature}</li>
                ))}
              </ul>
              <a href="https://cloud.google.com/?hl=en">
                Learn More
              </a>
            </>
          ) : (
            <p>Select a service to view details.</p>
          )}
        </div>
      </div>

      <section className="about" id="about">
        <h2>About This App</h2>
        <p>
          Cloud Explorer provides a detailed overview of Google Cloud services. 
          Explore features, descriptions, and resources for popular cloud offerings.
        </p>
      </section>
    </div>
  );
}

export default App;
