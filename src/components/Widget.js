import React from 'react'
import Axios from 'axios'
import './shared/styles/Widget.css'

class Widget extends React.Component {
    constructor() {
        super()
        this.state = {
            facts: [],
            kennyData: [],
            teamCrimesData: []
        }
    }

    componentDidMount() {
        this.fetchFactsKenny()
        this.fetchMostTeamCrimes()

    }

    fetchFactsKenny = async () => {
        try {
            const url = "http://NflArrest.com/api/v1/player"
            const facts = await Axios.get(url)
            // console.log(facts.data)
            this.setState(state => ({
                kennyData: [...state.facts, facts.data[0].Name, facts.data[0].arrest_count, facts.data[0].Team_name]
            }))
        }
        catch (error) {
            console.error('Error: ', error)
        }
    }

    fetchMostTeamCrimes = async () => {
        try {
            const url = 'http://NflArrest.com/api/v1/team'
            const facts = await Axios.get(url)
            console.log(facts.data)
            this.setState(state => ({
                teamCrimesData: [...state.facts, facts.data[0].Team_name, facts.data[0].arrest_count, facts.data[1].Team_name,]
            }))
        }
        catch (error) {
            console.error('Error: ', error)
        }
    }



    render() {
        const kennyFacts = this.state.kennyData
        const fact1 = `${kennyFacts[0]} from the ${kennyFacts[2]} leads the NFL with ${kennyFacts[1]} arrests `

        const teamFacts = this.state.teamCrimesData
        const fact2 = `${teamFacts[0]} and ${teamFacts[2]} are tied for lead in the NFL with ${teamFacts[1]} arrests`
        console.log(teamFacts)
        


        return (
            <div className='container'>
                <div className='fact-container'>
                    <div className='facts'>{fact1}</div>
                    <div className='facts'>{fact2}</div>
                </div>
            </div>
        )
    }
}


export default Widget