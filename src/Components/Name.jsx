import '../Styles/Name.css'
function Name() {
    return (
       <div className="name-container">
            <h3>Tomoya Okazaki</h3>
            <h4 className='title '>Software Engineer</h4>
            <a className='web' href="/">Website</a>
            <div className="button-container">
                <button className="email_button">Email</button>
                <button className="linkedin_button">LinkedIn</button>
            </div>
        </div> 
    )
} export default Name