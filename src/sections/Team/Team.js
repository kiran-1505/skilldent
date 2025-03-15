import React from 'react';
import './Team.scss';
import SectionTitle from '../../components/SectionTitle/SectionTitle';
import imgOne from '../../assets/about/team/1-Mohan.png';
import imgTwo from '../../assets/about/team/2-madhu.png';
import imgThree from '../../assets/about/team/3-esha.png';
import imgFour from '../../assets/about/team/4-kumar.png';
import imgFive from '../../assets/about/team/5-bolla.png';
import imgSix from '../../assets/about/team/6-ashwin.png';
import imgSeven from '../../assets/about/team/7-ponappa.png';
import imgEight from '../../assets/about/team/8-arvind.png';
import imgNine from '../../assets/about/team/9-adarsh.png';
import imgTen from '../../assets/about/team/10-priyamariam.png';
import imgEleven from '../../assets/about/team/11-appajigouda.png';
import imgTwelve from '../../assets/about/team/12-bhargavi.png';
import imgThirteen from '../../assets/about/team/13-shishirsingh.png';
import imgFourteen from '../../assets/about/team/14-uthkal.png';

const Team = () => {
    const teams = [
        {
            'img': imgThirteen,
            'name': 'Dr Shishir Singh',
            'description': 'Dr Shishir Singh, Dean, Professor and Head, Conservative Dentistry and Endodontics, Terna Dental College, Mumbai. He has more than 3 decades of clinical and teaching experience. He is also a Key Opinion Leader for Dentsply and Shofu. He has got numerous publications across journals and has also authored various books. His vision is to educate graduates and post graduates using a Didactic, Clinical and Evidence based research approach for dental education following the Deep learning processes.'
        },
        {
            'img': imgOne,
            'name': 'Dr R.S Mohan Kumar',
            'description': 'Dr R.S Mohan Kumar is a passionate teacher conducting distinctive seminars and workshops throughout the country on Aesthetic dentistry including Direct and Indirect restorations. Furthermore he is a certfied Implantologist and trained Laser Dentist. He holds prestigious position as joint secretary for IACDE and as deputy editor of the Journal of Conservative Dentistry.'
        },
        {
            'img': imgTwo,
            'name': 'Dr Madhu Hariharan',
            'description': 'Dr Madhu Hariharan has been a Key Opinion Leader in Endodontics for Dentsply Sirona, and is also an expert in Laser Dentistry and is currently a Key Opinion Leader for LITE TOUCH (world\'s first in Handpiece ER:YAG Laser).'
        },
        {
            'img': imgThree,
            'name': 'Dr Esha Nausheen',        
            'description': 'Dr Esha Nausheen, an Oral and Maxillofacial specialist is currently the director of Madhu\'s Centre for Laser Dentistry and Endodontics, Kochi. She is also an expert in Laser dentistry and had been a keynote speaker in WALT conference 2023.'
        },
        {
            'img': imgNine,
            'name': 'Dr Adarsh M S',
            'description': 'Dr Adarsh M S is currently working as Professor in V.S Dental College and Hospital, Bangalore. He is trained in Micro-Esthetics and Advanced Endodontics from Switzerland, Germany and Singapore and has also been "Diplomate" of the prestigious Indian board of Micro restorative and Endodontics (IBMRE). He is also a Key Opinion Leader for Coltene and has conducted many workshops at various forums both at state and national level.'
        },
        {
            'img': imgSeven,
            'name': 'Dr Ponnappa M C',
            'description': 'Dr Ponnappa M C is presently working as a Professor at Coorg Institute of Dental Sciences, Virajpet, has been mentoring students in the field of Aesthetic dentistry and Endodontics for over two dacades. His extensive knowledge in the field of lasers has particularly excelled students in providing superior patient care.'
        },
        {
            'img': imgFive,
            'name': 'Dr Bolla Nagesh',
            'description': 'Dr Bolla Nagesh is a Professor and Vice Dean at Sibar Institute of Dental Sciences. He is specialized in Conservative Dentistry & Endodontics and has over two decades of teaching experience. He currently serves as an Associate Editor for the Journal of Conservative Dentistry and is a reviewer for multiple scientific journals. Additionally, he has been an Honorary Faculty Member at Buffalo University, USA.'
        },
        {
            'img': imgFour,
            'name': 'Dr Kumar N C',
            'description': 'Dr Kumar N C is the principal of BGS Global Institute of Dental Sciences, and is an expert in Prdiatric and Preventive Dentistry. He is research oriented and has got numerous publications in prestigious national and international journals. His discipline, commitment and honesty has been a major driving force that has driven students towards their excellence.'
        },
        {
            'img': imgEight,
            'name': 'Dr A Arvind Kumar',
            'description': 'Dr A Arvind Kumar, currently heads the department of Conservative Dentistry and Endodontics at Rajas Dental College, Kavalkinaru. He has more than two decades of teaching experience and his academic excellence has bagged him numerous publications in prestigious journals. Journal of Conservative dentistry and Endodontics. He has also been one of the key editorial members of the Journal of Conservative dentistry and Endodontics, and the Journal of Aesthetic Dentistry Association of India.'
        },
        {
            'img': imgFourteen,
            'name': 'Dr Uthkal',
            'description': 'Dr. Uthkal M.P is Vice Principal & Professor, Malabar Dental College, is also a Senior Radiologist & Business Expansion Head, ORAL D Pvt Ltd. He has over 13 years of experience and has numerous publications across national & international journals. He also conducts regular CDE programs on CBCT, palliative care, HIV-AIDS associated oral  lesions. He was a part of panel of speakers for the webinar titled EMBRACING DIGITAL DENTISTRY – THE FUTURE, Organized by Indian dental alliance, Kuwait.'
        },
        {
            'img': imgSix,
            'name': 'Dr Ashwin P S',
            'description': 'Dr Ashwin P S, a Periodontist and Implantologist, is currently associated with Curaden, India as an education consultant, conducting iTOP workshop at various institutions and clinics in the country. He is research oriented and has got numerous publications under his name, and has also authored the book on the topic PERIODONTAL DRESSING.'
        },
        {
            'img': imgTen,
            'name': 'Dr Priya Mariam Thomas',
            'description': 'Dr. Priya Mariam Thomas, is a skilled Endodontist with more than 7 years of experience across general and restorative dentistry. She exclusively practices micro-endodontics and has been the consultant of choice at various clinics. She is also a mentor at SkillDent academy sharing her profound knowledge with colleagues. She has got several awards and Publications across national and international journals.'
        },
        {
            'img': imgEleven,
            'name': 'Dr Appajigouda',
            'description': 'Dr Appajigouda M Patil, a consultant Prosthodontist and Implantologist is specialised in Basal, Pterygoid and Zygomatic implants. He was also a key note speaker for DIOnavi "Meet our Mentor" held in February 2025. He has also mentored various students and clinicians and has shared his profound knowledge across various platforms.'
        },
        {
            'img': imgTwelve,
            'name': 'Dr Bhargavi',
            'description': 'Dr. Bhargavi H, MDS (Conservative Dentistry & Endodontics), GDC Bangalore. Highly accomplished Endodontist with 4 years of cumulative experience, including 3 years in general dentistry and 2 years in specialized endodontics. Published research in renowned national and international journals. Expertised in advanced endodontic procedure, Microscopic dentistry, Conservative dentistry.'
        },
        
    ];

    return (
        <section className='team-section pt-100'>
            <div className="container">
                <div className="row">
                    <div className="col-lg-7">
                        <SectionTitle 
                            subTitle="Meet our Team"
                            title="Get to know about our coaches"/>
                    </div>
                </div>

                <div className="team-members">
                    {teams.map((team, index) => (
                        <div className="team-member" key={index}>
                            <div className="member-photo">
                                <img src={team.img} alt={team.name} />
                                <h3>{team.name}</h3>
                            </div>
                            <div className="member-info">
                                <p className="bio">{team.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Team;