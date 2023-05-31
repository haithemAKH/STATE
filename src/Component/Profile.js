import React, { Component } from 'react'
export default class Profile extends Component {

/*COMPTEUR DE MOUNTING DE PROFIL RELIER PAR UNE BOUTTON TOGGLE INITIALISéE PAR "FALSE" 
QUI AFFICE LE PROFIL ET LE FAIRE MASQUER  ET L'EXPORTATION DU FICHIER PROFIL VERS APP*/
    state = {
        person: {
          fullName: "NASRI HAITHEM",
          bio: "I'm A Web Developer, specializing in HTML5, JavaScript, React, database design, and front-end development.Adept at collaborating with dynamic teams to build high quality websites and identify opportunities to enhance the user experience.",
          imgSrc: "https://images.pexels.com/photos/16999736/pexels-photo-16999736/free-photo-of-ville-homme-gens-femme.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
          profession: "Web Developer",
        },
        showPerson: false,
        timeInterval: 0
      }
    
      handleToggle = () => {
        this.setState({
          showPerson: !this.state.showPerson
        })
      }
    
      componentDidMount() {
        this.interval = setInterval(() => {
          this.setState({ timeInterval: this.state.timeInterval + 1 })
        }, 1000);
      }
    
      componentWillUnmount() {
        clearInterval(this.interval);
      }
    
      render() {
        const { fullName, bio, imgSrc, profession } = this.state.person;
        return (
            //BOUTTON TOGGLE
          <div >
            <button onClick={this.handleToggle}>show my NEW LIFE</button>
            {this.state.showPerson &&
              <div className='profile'>
                <img src={imgSrc} alt={fullName} />
                <h1>{fullName}</h1>
                <h3>{profession}</h3>
                <h3>{bio}</h3>
              </div>
            }
            <p>Component mounted since {this.state.timeInterval} seconds</p>
          </div>
        );
      }
    }




