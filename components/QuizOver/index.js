import React, { Fragment, useEffect, useState } from 'react'
import { GiTrophyCup } from 'react-icons/gi';
import Loader from '../Loader'

const QuizOver = React.forwardRef((props, ref) => {
    const {levelNames,
         score,
         maxQuestions,
         quizLevel, 
         percent,
         loadLevelQuestions
        } = props;

const [asked, setAsked] = useState([]);

    useEffect(() => {
        setAsked(ref.current)
    }, [ref])

    const averageGrade = maxQuestions / 2

    if (score < averageGrade) {
        setTimeout(() => loadLevelQuestions(quizLevel), 3000);
    }

    const decision = score >= averageGrade ? (
        <Fragment>
            <div className="stepsBtnContainer"> 
            {
                quizLevel < levelNames.length ? 
                (
                    <Fragment>
                        <p className="successMsg">Bravo, passez au niveau suivant !</p>
                        <button 
                            className="btnResult success"
                            onClick={() => loadLevelQuestions(quizLevel)}
                            >
                            Niveau suivant
                        </button>
                     </Fragment>
                )
                :
                (
                    <Fragment>
                        <p className="successMsg"> <GiTrophyCup size='50px' /> Bravo, vous êtes un expert !</p>
                        <button 
                        className="btnResult gameOver"
                        onClick={() => loadLevelQuestions(0)}
                        >
                        Accueil
                        </button>
                     </Fragment>
                )
            }
            </div>
            <div className="percentage">
            <div className="progressPercent">réussite {percent}%</div>
            <div className="progressPercent">note: {score}/{maxQuestions}</div>
        
        
        </div>
        </Fragment>
    )
    :
    (
        <Fragment>
            <div className="stepsBtnContainer">
                        <p className="failureMsg">Vous avez échoué...</p>
                        <button className="btnResult success">Niveau suivant</button>
                        
                    </div>
                    <div className="percentage">
                    <div className="progressPercent">réussite {percent}%</div>
                    <div className="progressPercent">note: {score}/{maxQuestions}</div>
                    
                    
                    </div>
        </Fragment> 
    )

    const questionAnswer = score >= averageGrade ? (
        asked.map( question =>{
            return (
                <tr key={question.id}>
                    <td>{question.question}</td>
                    <td>{question.answer}</td>
                    <td>
                        <button className="btnInfo">Infos</button>
                    </td>
                </tr>
            )
        })
    )
    :
    (
        <tr>
                            
              <td colSpan="3">
                <Loader
                   loadingMsg={"pas de réponse !"}
                   styling={{textAlign: 'center', color: 'red'}}
                />
              </td>
              </tr>
    )
   

    return (
        <Fragment>
        
        {decision}

        <hr/>
        <p>Les réponses aux questions posées:</p>

        <div className="answerContainer">
            <table className="answers">
                <thead>
                    <tr>
                        <th>Qustion</th>
                        <th>Réponses</th>
                        <th>Infos</th>
                    </tr>
                </thead>
                <tbody>
                    {questionAnswer}
                </tbody>
            </table>

        </div>
        

        </Fragment>
    )
})

 

export default React.memo(QuizOver)
