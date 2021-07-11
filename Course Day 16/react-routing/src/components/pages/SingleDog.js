import React from 'react'
import { withRouter } from 'react-router-dom'

const SingleDog = ({ dogs, match, history }) => {
    const { name } = match.params //NOTE: getting name parameter from route, for ex: /dog/husky has husky as parameter
    const foundDog = dogs.filter(dog => name === dog.name)

    if (!foundDog.length)
        history.push('/')

    return (
        <div className="card">
            <div className="card-body">
                <h5 className="card-title">
                    Hi my name is, { foundDog[0] && foundDog[0].name }
                </h5>
                <p className="card-body">
                    Behaviour: { foundDog[0] && foundDog[0].behaviour }
                </p>
            </div>
        </div>
    )
}

export default withRouter(SingleDog)
