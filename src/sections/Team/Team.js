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



const Team = () => {

    const teams = [
        {
            'img': imgOne,
            'name': 'Dr R.S Mohan Kumar',
            'description': 'Dr R.S Mohan Kumar is a passionate teacher conducting distinctive seminars and workshops throughout the country on Aesthetic dentistry including Direct and Indirect restorations. Furthermore he is a certfied Implantologist and trained Laser Dentist. He holds prestigious position as joint secretary for IACDE and as deputy editor of the Journal of Conservative Dentistry.'
        },
        {
            'img': imgTwo,
            'name': 'Dr Madhu Hariharan',
            'description': 'Dr Madhu Hariharan has been a Key Opinion Leader in Endodontics for Dentsply Sirona, and is also an expert in Laser Dentistry and is currently a Key Opinion Leader for LITE TOUCH (world’s first in Handpiece ER:YAG Laser).'
        },
        {
            'img': imgThree,
            'name': 'Dr Esha Nausheen',
            'description':'Dr Esha Nausheen, an Oral and Maxillofacial specialist is currently the director of Madhu’s Centre for Laser Dentistry and Endodontics, Kochi. She is also an expert in Laser dentistry and had been a keynote speaker in WALT conference 2023.'
        },
        {
            'img': imgFour,
            'name': 'Dr Kumar N C',
            'description':'Dr Kumar N C is the principal of BGS Global Institute of Dental Sciences, and is an expert in Prdiatric and Preventive Dentistry. He is research oriented and has got numerous publications in prestigious national and international journals. His discipline, commitment and honesty has been a major driving force that has driven students towards their excellence.'
        },
        {
            'img': imgFive,
            'name': 'Dr Bolla Nagesh',
            'description':'Dr Bolla Nagesh is a Professor and Vice Dean at Sibar Institute of Dental Sciences. He is specialized in Conservative Dentistry & Endodontics and has over two decades of teaching experience. He currently serves as an Associate Editor for the Journal of Conservative Dentistry and is a reviewer for multiple scientific journals. Additionally, he has been an Honorary Faculty Member at Buffalo University, USA.'
        },
        {
            'img': imgSix,
            'name': 'Dr Ashwin P S',
            'description':'Dr Ashwin P S, a Periodontist and Implantologist, is currently associated with Curaden, India as an education consultant, conducting iTOP workshop at various institutions and clinics in the country. He is research oriented and has got numerous publications under his name, and has also authored the book on the topic PERIODONTAL DRESSING.'
        },
        {
            'img': imgSeven,
            'name': 'Dr Ponnappa M C',
            'description':'Dr Ponnappa M C is presently working as a Professor at Coorg Institute of Dental Sciences, Virajpet, has been mentoring students in the field of Aesthetic dentistry and Endodontics for over two dacades. His extensive knowledge in the field of lasers has particularly excelled students in providing superior patient care.'
        },
        {
            'img': imgEight,
            'name': 'Dr A Arvind Kumar',
            'description':'Dr A Arvind Kumar, currently heads the department of Conservative Dentistry and Endodontics at Rajas Dental College, Kavalkinaru. He has more than two decades of teaching experience and his academic excellence has bagged him numerous publications in prestigious journals. Journal of Conservative dentistry and Endodontics. He has also been one of the key editorial members of the Journal of Conservative dentistry and Endodontics, and the Journal of Aesthetic Dentistry Association of India.'
        },
        {
            'img': imgNine,
            'name': 'Dr Adarsh M S',
            'description':'Dr Adarsh M S is currently working as Professor in V.S Dental College and Hospital, Bangalore. He is trained in Micro-Esthetics and Advanced Endodontics from Switzerland, Germany and Singapore and has also been “Diplomate” of the prestigious Indian board of Micro restorative and Endodontics (IBMRE). He is also a Key Opinion Leader for Coltene and has conducted many workshops at various forums both at state and national level.'
        }
    ]


    return (
        <section className='team-section pt-100' >
            <div className="container" >
                <div className="row">
                    <div className="col-lg-7">
                        <SectionTitle 
                            subTitle="Meet our Team"
                            title="Get to know about our coaches"/>
                    </div>
                </div>

                <div className="row gx-3 gy-3"  >
                      {teams.map((team, index) => (
                            <div className="col-lg-3 col-sm-6" key={index}>
                                <div className="team-card" >
                                    <div className="team-img" >
                                        <img src={team.img} alt={team.name} />
                                    </div>
                                    <h3>{team.name}</h3>
                                    <p className="team-description">{team.description}</p>
                                </div>
                           </div>
                      ))}
                </div>
            </div>
        </section>
    );
};

export default Team;