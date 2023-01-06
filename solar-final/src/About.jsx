import { useNavigate } from "react-router-dom"


function About() {
    const navigate = useNavigate()


    return(
        <div>
            <p>Planet Picker Project</p>

            <button className="home" onClick={() => navigate('/')}>Home</button>

            
            <p>Prject Created By:
                Avi,
                Harry,
                james
            </p>
        </div>
    )
}
export default About