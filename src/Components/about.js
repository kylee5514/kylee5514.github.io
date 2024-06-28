import React from 'react'
import './components.css'

export const About = (props) => {
    return(
        <div className="about">
            <img src={'images/photo.png'} alt="profile"/>
            <div className='contents'>
                <div className='greeting'>Hi, I'm Kwangyoung Lee! 😜</div>
                <div className='description'>Hello! I am a second year PhD candidate in the Department of Industrial Design at KAIST. I am working with <a href='https://galaxytourist.notion.site/galaxytourist/Hwajung-Hong-cc10b0291bbe4ca38dbf4882cd687423'>Prof. Hwajung Hong</a> at <a href='https://dxd-lab.github.io/'>DxD Lab</a>. <br/><br/> My primary research interest is Personal informatics related to mental health in HCI field. I would like to contribute to engaging individuals in recording their data related to mental health in everyday life, helping them understand their status and reflect positive changes in their behavior.</div>
                <div className='icons'>
                    <a href='mailto:kwangyoung@kaist.ac.kr'><img src="/icons/kwangyoung_mail.svg" alt="mail"/></a>
                    {/* <a href='https://scholar.google.com/citations?user=3h9XkqYAAAAJ&hl=ko&oi=ao'><img src="/icons/scholar.svg" alt="scholar"/></a> */}
                    {/* <a href='https://scholar.google.com/citations?user=3h9XkqYAAAAJ&hl=ko&oi=ao'><img src="/icons/linkedin.svg" alt="linkedin"/></a> */}
                    <a href='PDF/CV_kwangyoungLee_2024.pdf'><img src="/icons/kwangyoung_cv.svg" alt="cv"/></a>
                    {/* <a href='https://scholar.google.com/citations?user=3h9XkqYAAAAJ&hl=ko&oi=ao'><img src="/icons/instagram.svg" alt="instagram"/></a> */}
                    {/* <a href='https://scholar.google.com/citations?user=3h9XkqYAAAAJ&hl=ko&oi=ao'><img src="/icons/github.svg" alt="github"/></a> */}
                </div>
            </div>
        </div>
    )
}