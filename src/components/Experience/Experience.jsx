import React from 'react'
import './Experience.css'
import {BsFillPatchCheckFill} from 'react-icons/bs'
function Experience() {
    return (
        <div className='container section' id='experience'>
            <h5>what skills i have</h5>
            <h2> My Experience</h2>

            <div className="experience-content">
                <div className='frontend-content'>
                    <h3>Frontend Development</h3>
                    <div className="skills">
                        <div className="detailes">
                            <div>
                                <BsFillPatchCheckFill />
                                <h4>HTML</h4>
                            </div>
                            <small>Experienced</small>
                        </div>
                        <div className="detailes">
                            <div>
                                <BsFillPatchCheckFill />
                                <h4>CSS</h4>
                            </div>
                            <small>Intermediate</small>
                        </div>
                        <div className="detailes">
                            <div>
                                <BsFillPatchCheckFill />
                                <h4>Javascript</h4>
                            </div>
                            <small>Experienced</small>
                        </div>
                        <div className="detailes">
                            <div>
                                <BsFillPatchCheckFill />
                                <h4>Bootstrap</h4>
                            </div>
                            <small>Intermediate</small>
                        </div>
                        <div className="detailes">
                            <div>
                                <BsFillPatchCheckFill />
                                <h4>Sass</h4>
                            </div>
                            <small>Intermediate</small>
                        </div>
                        <div className="detailes">
                            <div>
                                <BsFillPatchCheckFill />
                                <h4>Unit Testing</h4>
                            </div>
                            <small>Experienced</small>
                        </div>
                        <div className="detailes">
                            <div>
                                <BsFillPatchCheckFill />
                                <h4>React</h4>
                            </div>
                            <small>Intermediate</small>
                        </div>
                    </div>
                </div>
                <div className='backend-contnet'>
                    <h3>Backend Development</h3>
                    <div className="skills">
                        <div className="detailes">
                            <div>
                                <BsFillPatchCheckFill />
                                <h4>Java</h4>
                            </div>
                            <small>Intermediate</small>
                        </div>
                        <div className="detailes">
                            <div>
                                <BsFillPatchCheckFill />
                                <h4>Assembly</h4>
                            </div>
                            <small>Experienced</small>
                        </div>
                        <div className="detailes">
                            <div>
                                <BsFillPatchCheckFill />
                                <h4>My-SQL</h4>
                            </div>
                            <small>Intermediate</small>
                        </div>
                        <div className="detailes">
                            <div>
                                <BsFillPatchCheckFill />
                                <h4>Cpp</h4>
                            </div>
                            <small>Experienced</small>
                        </div>
                        <div className="detailes">
                            <div>
                                <BsFillPatchCheckFill />
                                <h4>PL-SQL</h4>
                            </div>
                            <small>Intermediate</small>
                        </div>
                        <div className="detailes">
                            <div>
                                <BsFillPatchCheckFill />
                                <h4>Python</h4>
                            </div>
                            <small>Intermediate</small>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Experience