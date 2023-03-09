import React from 'react'
import './Portfolio.css'
import Bondi from '../../assets/bondi.png'
import CustomerOrder from '../../assets/customerOrder.png'
import MyForm from '../../assets/form.png'
import Leon from '../../assets/leon.png'
import Note from '../../assets/note.png'
import MyPortfolio from '../../assets/portfolio.png'
import Responsev from '../../assets/responsev.png'
import Robot from '../../assets/robot.jpg'
import fitclub from '../../assets/fitclub.png'

function Portfolio() {
    return (
        <div className='container section' id='portfolio'>
            <h5>my recent work</h5>
            <h2>Portfolio</h2>
            <div className="portfolio-container">
                <div className="portfolio-card">
                    <div>
                        <img src={Robot} alt="" />
                    </div>
                    <p>Robot able to hear the person's question 
                        and answer it in Arabic. Developed using gTTS, speech_recognition and ChatterBot library.</p>
                    <div className="btns">
                        <a href='https://github.com/zakaria-ali/AAUP-Engineering-Robot' className='btn btn-primary' target="_blanke" >Github </a>
                        <a href='https://docs.google.com/document/d/18ipZGTbdvCUCzWCuCQa3H4qty6Ow8u6W/edit?usp=sharing&ouid=101766767548763033300&rtpof=true&sd=true' className='btn ' target="_blanke" >Preview</a>
                    </div>
                </div>
                <div className="portfolio-card">
                    <img src={Bondi} alt="" />
                    <p>Responsive web page designed using Bootstrap, 
                        shows a template of a company page with Services ,Portfolio, and other sections.</p>
                        <div className="btns">
                            <a href='https://github.com/zakaria-ali/Bondi-Project' className='btn btn-primary' target="_blanke" >Github </a>
                            <a href='https://zakaria-ali.github.io/Bondi-Project/' className='btn ' target="_blanke" >Preview</a>
                        </div>
                </div>
                <div className="portfolio-card">
                    <img src={Leon} alt="" />
                    <p>Web page designed with HTML, 
                        and CSS show a template of a company page with Services ,Portfolio, and other sections.</p>
                        <div className="btns">
                            <a href='https://github.com/zakaria-ali/Lion-Web-Page' className='btn btn-primary' target="_blanke" >Github </a>
                            <a href='https://zakaria-ali.github.io/Lion-Web-Page/' className='btn ' target="_blanke" >Preview</a>
                        </div>
                </div>
                <div className="portfolio-card">
                    <img src={Note} alt="" />
                    <p>Page able user to record his notes and tasks and delete, edit, and check them, 
                        with a feature of Local Storage to save data when the page is closed.</p>
                        <div className="btns">
                            <a href='https://github.com/zakaria-ali/Note-Page' className='btn btn-primary' target="_blanke" >Github </a>
                            <a href='https://zakaria-ali.github.io/Note-Page/' className='btn ' target="_blanke" >Preview</a>
                        </div>
                </div>
                <div className="portfolio-card">
                    <img src={CustomerOrder} alt="" />
                    <p>Web Pages designed using Oracle Apex, for displaying, 
                        searching and modifying orders made by customers.</p>
                        <div className="btns">
                            <a href='https://github.com/zakaria-ali/Customer-Orders-Application' className='btn btn-primary' target="_blanke" >Github </a>
                            <a href='https://apex.oracle.com/pls/apex/r/zakaria_project/customer-orders12345646851/home?session=116163867163283' className='btn ' target="_blanke" >Preview</a>        
                        </div>
                </div>
                <div className="portfolio-card">
                    <img src={Responsev} alt="" />
                    <p>I designed a responsive site to learn, gain experience, 
                        and train on how to manage pages and make them responsive</p>
                        <div className="btns">
                            <a href='https://github.com/zakaria-ali/Responsive-Site' className='btn btn-primary' target="_blanke" >Github </a>
                            <a href='https://zakaria-ali.github.io/Responsive-Site/' className='btn ' target="_blanke" >Preview</a>
        
                        </div>
                </div>
                <div className="portfolio-card">
                    <img src={MyForm} alt="" />
                    <p>I have designed a page that contains a form for entering user information, but within specific validations, 
                        if they are not applied, information will not be sent to the server</p>
                        <div className="btns">
                            <a href='https://github.com/zakaria-ali/Form-Validation' className='btn btn-primary' target="_blanke" >Github </a>
                            <a href='https://zakaria-ali.github.io/Form-Validation/' className='btn ' target="_blanke" >Preview</a>
        
                        </div>
                </div>
                <div className="portfolio-card">
                    <img src={MyPortfolio} alt="" />
                    <p>I designed my own  responsive portfolio website using  HTML, CSS, and Bootstrap</p>
                    <div className="btns">
                        <a href='https://github.com/zakaria-ali/portfolio' className='btn btn-primary' target="_blanke" >Github </a>
                        <a href='https://zakaria-ali.github.io/portfolio/' className='btn ' target="_blanke" >Preview</a>
    
                    </div>
                </div>
                <div className="portfolio-card">
                    <img src={fitclub} alt="" />
                    <p>A responsive website for a fitness club that was designed and
                        built by React based on a beautiful animation, where several
                        libraries from React were used to complete the project</p>
                        <div className="btns">
                            <a href='https://github.com/zakaria-ali/React-Fit-Club' className='btn btn-primary' target="_blanke" >Github </a>
                            <a href='https://zakaria-ali.github.io/React-Fit-Club/' className='btn ' target="_blanke" >Preview</a>
        
                        </div>
                </div>
            </div>
        </div>
    )
}

export default Portfolio