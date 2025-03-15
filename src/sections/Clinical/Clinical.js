import React from 'react';
import './Clinical.scss';
import { FaTooth, FaTeeth } from 'react-icons/fa';
import { GiLaserPrecision } from 'react-icons/gi';
import { MdCleaningServices } from 'react-icons/md';
import { RiSurgicalMaskFill } from 'react-icons/ri';
import { TbDental, TbDentalOff } from 'react-icons/tb';

const Clinical = () => {
    const services = [
        {
            icon: <FaTeeth />,
            title: "Esthetic Treatment and Smile Designing",
            description: `• Focuses on enhancing the appearance of teeth and the overall smile using advanced cosmetic dentistry techniques.
• Includes teeth whitening to remove stains, dental veneers to correct imperfections, composite bonding for reshaping, and gum contouring to create a well-balanced smile.
• Ideal for individuals with discolored, chipped, misaligned, or unevenly spaced teeth who want a confident and attractive smile.
• Smile designing is customized based on facial structure, lip symmetry, and natural tooth proportions to achieve a harmonious look.`
        },
        {
            icon: <TbDentalOff />,
            title: "Root Canal Treatment (RCT)",
            description: `• A procedure aimed at saving a severely infected or damaged tooth rather than extracting it.
• Essential for treating deep cavities, cracked teeth, severe sensitivity, or abscesses that affect the pulp (inner tissue).
• Prevents the spread of infection, eliminates pain, and restores full function.
• The treated tooth is typically protected with a dental crown to ensure long-term durability and strength.`
        },
        {
            icon: <TbDental />,
            title: "Complete and Partial Dentures",
            description: `• Designed to replace missing teeth and restore chewing efficiency, speech clarity, and facial aesthetics.
• Complete dentures are used when all teeth in an arch are missing, while partial dentures are suitable for patients who still have some natural teeth.
• Helps prevent facial sagging caused by tooth loss and supports the lips and cheeks.
• Available in different materials:
  - Acrylic dentures – lightweight and cost-effective.
  - Flexible dentures – more comfortable and adaptable.
  - Metal-based dentures – provide greater durability and stability.
• Custom-made to fit comfortably and provide a natural look.`
        },
        {
            icon: <FaTooth />,
            title: "Crowns and Bridges",
            description: `• Crowns (caps) are used to cover and strengthen weak or damaged teeth, restoring their natural shape, size, and function.
• Bridges replace one or more missing teeth by using adjacent natural teeth or implants as support.
• Helps in preventing shifting of nearby teeth, restoring proper bite alignment, and improving aesthetics.
• Available in different materials:
  - Metal-ceramic crowns – durable with a natural ceramic outer layer.
  - All-ceramic and zirconia crowns – highly esthetic, metal-free, and biocompatible.
  - E-max crowns – provide superior translucency for the most natural appearance.`
        },
        {
            icon: <TbDental />,
            title: "Orthodontics (Braces & Clear Aligners)",
            description: `• Corrects crooked, crowded, spaced, or misaligned teeth, along with bite issues (malocclusions).
• Improves both aesthetics and functionality, ensuring proper alignment for better oral health and easier cleaning.
• Treatment options include:
  - Metal Braces – Traditional, strong, and effective for severe misalignments.
  - Ceramic Braces – Tooth-colored brackets for a more discreet look.
  - Lingual Braces – Placed behind the teeth for a completely invisible option.
  - Clear Aligners (e.g., Invisalign, ClearCorrect) – Removable, nearly invisible trays.
• Helps reduce excessive pressure on jaw joints, preventing TMJ disorders and uneven tooth wear.`
        },
        {
            icon: <RiSurgicalMaskFill />,
            title: "Extractions and Minor Oral Surgery",
            description: `• Necessary when a tooth is severely decayed, fractured, or impacted and cannot be saved.
• Simple extractions involve removing visible teeth, while surgical extractions may require incisions.
• Other minor surgical procedures include:
  - Frenectomy – Removes excess tissue causing speech or orthodontic issues.
  - Cyst or Tumor Removal – Removes abnormal growths inside the oral cavity.
  - Apicoectomy – Performed when a root canal-treated tooth develops persistent infection.
• Advanced pain management techniques ensure a comfortable experience.`
        },
        {
            icon: <FaTooth />,
            title: "Dental Implants",
            description: `• A long-lasting and natural-looking replacement for missing teeth.
• Consists of a titanium screw (implant), an abutment, and a crown/bridge/denture.
• Prevents bone loss, maintains facial structure, and restores proper chewing ability.
• Can be used for:
  - Single Tooth Replacement – A single implant supporting a crown.
  - Multiple Tooth Replacement – Implant-supported bridges.
  - Full-Arch Rehabilitation – "All-on-4" or "All-on-6" fixed dentures.
• Provides superior durability, stability, and aesthetics compared to traditional options.`
        },
        {
            icon: <GiLaserPrecision />,
            title: "Laser Therapy",
            description: `• A modern, minimally invasive treatment option that enhances precision and comfort.
• Used for:
  - Gum disease treatment – Removes infected tissue and promotes faster healing.
  - Teeth whitening – Activates bleaching agents for brighter results.
  - Cavity detection – Identifies decay in early stages without drilling.
  - Soft tissue procedures – Used in frenectomy, gum contouring, and biopsies.
  - Pain management – Helps relieve discomfort in TMJ disorders and oral ulcers.
• Reduces pain, bleeding, swelling, and healing time.`
        },
        {
            icon: <MdCleaningServices />,
            title: "Teeth Cleaning (Scaling and Polishing)",
            description: `• A preventive dental procedure that removes plaque, tartar, and surface stains.
• Essential for preventing cavities, gum disease, and bad breath.
• Scaling uses ultrasonic instruments to remove hardened deposits.
• Polishing smoothens tooth surfaces to prevent future plaque buildup.
• Recommended every 6 months to maintain optimal oral hygiene.
• Helps prevent serious conditions linked to poor oral health.`
        },
        {
            icon: <FaTooth />,
            title: "Emergency Dental Care",
            description: "Immediate attention for dental emergencies, providing quick relief and expert care when you need it most."
        }
    ];

    return (
        <section className='section-bg section-common clinical-section'>
            <div className="container">
                <div className="clinical-text">
                    <span>Clinical</span>
                    <h2>Our Clinical Services</h2>
                </div>

                <div className="clinical-services">
                    {services.map((service, index) => (
                        <div className="single-service" key={index}>
                            <div className="service-content">
                                <div className="icon">
                                    {service.icon}
                                </div>
                                <div className="service-text">
                                    <h3>{service.title}</h3>
                                    <p>{service.description.split('\n').map((line, i) => (
                                        <React.Fragment key={i}>
                                            {line}
                                            <br />
                                        </React.Fragment>
                                    ))}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Clinical; 