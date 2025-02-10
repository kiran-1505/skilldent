import React from "react";
import "./ServiceBanner.scss";

// Import service images
import estheticImg from "../../assets/servicePage/1.png";
import rootCanalImg from "../../assets/servicePage/1.png";
import denturesImg from "../../assets/servicePage/1.png";
import crownsImg from "../../assets/servicePage/1.png";
import bracesImg from "../../assets/servicePage/1.png";
import extractionsImg from "../../assets/servicePage/1.png";
import implantsImg from "../../assets/servicePage/1.png";
import laserImg from "../../assets/servicePage/1.png";
import cleaningImg from "../../assets/servicePage/1.png";

// Service Data
const services = [
  {
    title: "Esthetic Treatment and Smile Designing",
    description: [
        "Focuses on enhancing the appearance of teeth and the overall smile using advanced cosmetic dentistry techniques.",
        "Includes teeth whitening to remove stains, dental veneers to correct imperfections, composite bonding for reshaping, and gum contouring to create a well-balanced smile.",
        "Ideal for individuals with discolored, chipped, misaligned, or unevenly spaced teeth who want a confident and attractive smile.",
        "Smile designing is customized based on facial structure, lip symmetry, and natural tooth proportions to achieve a harmonious look.",
      ],
    img: estheticImg,
  },
  {
    title: "Root Canal Treatment (RCT)",
    description: [
      "A procedure aimed at saving a severely infected or damaged tooth rather than extracting it.",
      "Essential for treating deep cavities, cracked teeth, severe sensitivity, or abscesses that affect the pulp (inner tissue).", 
      "Prevents the spread of infection, eliminates pain, and restores full function.",
      "The treated tooth is typically protected with a dental crown to ensure long-term durability and strength.", 
     ],
    img: rootCanalImg,
  },
  {
    title: "Complete and Partial Dentures",
    description: [
      "Designed to replace missing teeth and restore chewing efficiency, speech clarity, and facial aesthetics.",
      "Complete dentures are used when all teeth in an arch are missing, while partial dentures are suitable for patients who still have some natural teeth.",
      "Helps prevent facial sagging caused by tooth loss and supports the lips and cheeks.",
      "Available in different materials : ",
      "Acrylic dentures – lightweight and cost-effective.", 
      "Flexible dentures – more comfortable and adaptable. ",
      "Metal-based dentures – provide greater durability and stability.",
      "Custom-made to fit comfortably and provide a natural look.",
    ],
    img: denturesImg,
  },
  {
    title: "Crowns and Bridges",
    description: [
      "Crowns are used to cover and strengthen weak or damaged teeth, while bridges replace one or more missing teeth.",
      "Bridges replace one or more missing teeth by using adjacent natural teeth or implants as support.",
      "Helps in preventing shifting of nearby teeth, restoring proper bite alignment, and improving aesthetics.",
      "Available in different materials : ",
      "Metal-ceramic crowns– durable with a natural ceramic outer layer.",
      "All-ceramic and zirconia crowns – highly esthetic, metal-free, and biocompatible.",
      "E-max crowns – provide superior translucency for the most natural appearance. ",
    ],
    img: crownsImg,
  },
  {
    title: "Orthodontics (Braces & Clear Aligners)",
    description: [
      "Corrects crooked, crowded, spaced, or misaligned teeth, along with bite issues.",
      "Improves both aesthetics and functionality, ensuring proper alignment for better oral health and easier cleaning. ",
      "Treatment options include :",
      "Metal Braces – Traditional, strong, and effective for severe misalignments.", 
      "Ceramic Braces – Tooth-colored brackets for a more discreet look.",  
      "Lingual Braces – Placed behind the teeth for a completely invisible option.",  
      "Clear Aligners (e.g., Invisalign, ClearCorrect) – Removable, nearly invisible trays customized for mild to moderate corrections.",
      "Helps reduce excessive pressure on jaw joints, preventing conditions like TMJ disorders and uneven tooth wear.",
    ],
    img: bracesImg,
  },
  {
    title: "Extractions and Minor Oral Surgical Procedures",
    description: [
      "Necessary when a tooth is severely decayed, fractured, or impacted (such as wisdom teeth).",
      "Simple extractions involve removing visible teeth, while surgical extractions may require small incisions and bone removal for impacted or broken teeth. ", 
      "Other minor surgical procedures include :  ",
      "Frenectomy– Removes excess tissue causing speech or orthodontic issues. ", 
      "Cyst or Tumor Removal – Removes abnormal growths inside the oral cavity.", 
      "Apicoectomy– Performed when a root canal-treated tooth develops persistent infection.",
      "Advanced pain management techniques, including local anesthesia and sedation options, ensure a comfortable experience. ",
    ],
    img: extractionsImg,
  },
  {
    title: "Dental Implants",
    description: [
      "A long-lasting and natural-looking replacement for missing teeth.",
      "Consists of a titanium screw (implant), an abutment, and a crown/bridge/denture, functioning like a real tooth.",  
      "Prevents bone loss, maintains facial structure, and restores proper chewing ability.",  
      "Can be used for:  ",
      "Single Tooth Replacement – A single implant supporting a crown. ",
      "Multiple Tooth Replacement– Implant-supported bridges.",  
      "Full-Arch Rehabilitation – \"All-on-4\" or \"All-on-6\" fixed dentures for complete tooth loss. ",
      "Provides superior durability, stability, and aesthetics compared to traditional dentures or bridges. ",
    ],
    img: implantsImg,
  },
  {
    title: "Laser Therapy",
    description: [
      "A modern, minimally invasive treatment option that enhances precision and comfort in dental procedures.",
      "Used for:  ",
      "Gum disease treatment– Removes infected tissue and promotes faster healing.", 
      "Teeth whitening – Activates bleaching agents for brighter results.", 
      "Cavity detection– Identifies decay in early stages without drilling. ",
      "Soft tissue procedures – Used in frenectomy, gum contouring, and biopsies.", 
      "Pain management – Helps relieve discomfort in TMJ disorders and oral ulcers. ",
      "Reduces pain, bleeding, swelling, and healing time, offering a safer and more comfortable alternative to conventional treatments. ",
    ],
    img: laserImg,
  },
  {
    title: "Teeth Cleaning (Scaling and Polishing)",
    description: [
      "A preventive dental procedure that removes plaque, tartar (calculus), and surface stains.",
      "Essential for preventing cavities, gum disease (gingivitis, periodontitis), and bad breath.",
      "Scaling uses ultrasonic instruments to remove hardened deposits, while polishing smoothens tooth surfaces to prevent future plaque buildup. ", 
      "Recommended every 6 months to maintain optimal oral hygiene.", 
      "Helps prevent serious conditions like tooth loss and systemic health issues (e.g., heart disease, diabetes) linked to poor oral health.",
    ],
    img: cleaningImg,
  },
];

const ServiceBanner = () => {
  return (
    <section className="service-banner-section section-common section-bg">
      <div className="container">
        {services.map((service, index) => (
          <div
            className={`row align-items-center service-item ${
              index % 2 === 0 ? "reverse" : ""
            }`}
            key={index}
          >
            <div className="col-lg-6 col-md-6">
              <div className="service-banner-text">
                <h2>{service.title}</h2>
                {service.description && Array.isArray(service.description) && (
                <ul>
                    {service.description.map((point, i) => (
                    <li key={i}>{point}</li>
                    ))}
                </ul>
                )}
              </div>
            </div>
            <div className="col-lg-6 col-md-6">
              <div className="service-banner-img" >
                <img src={service.img} alt={service.title} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServiceBanner;
