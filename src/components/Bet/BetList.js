import React from 'react';
import styled from 'styled-components';
import { Slider } from '../Slider/Slider';
import { BetService } from '../../services/BetService';

import footBallIcon from '../../images/icons/football.png';
import tennisIcon from '../../images/icons/tennis.png';
import basketBallIcon from '../../images/icons/basketball.png';
import deFaultIcon from '../../images/icons/default.png';

const ICONS = {
    FOOTBALL: footBallIcon,
    TENNIS: tennisIcon,
    BASKETBALL: basketBallIcon
}

const BetContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: #222222;
    padding: 20px 0;
    height: 190px;
`;

const Points = styled.div`
    color: #FFCB00;
    font-size: 22px;
`;

const Infos = styled.div`
    display: flex;
    align-items: center;
    margin: 20px 0;
    color: #FFF;
    font-size: 16px;
`;

const SportImage = styled.img`
    margin-right: 10px;
`;

const GameTime = styled.div`
    margin-bottom: 20px;
    color: #868170;
`;

const BetLink = styled.a`
    background-color: #00B438;
    width: 100px;
    height: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    text-decoration: none;
    color: #FFF;
    border-radius: 5px;
    font-weight: bold;
`;

export const BetList = ({ liveEvents }) => {
    
    if (liveEvents.length === 0) 
        return (<div> Loading Bets ... </div>)

    const events = liveEvents.map(event => {
        return (
            <BetContainer key={event.event.name}>
                {
                    event.liveData.score && 
                    <Points>
                        {event.liveData.score.home} - {event.liveData.score.away}
                    </Points>
                }
                <Infos>
                    <SportImage src={ICONS[event.event.sport] || deFaultIcon} alt="sport type icon" />
                    {event.event.homeName} - {event.event.awayName}
                </Infos>
                <GameTime>
                    {BetService.getBetDateFormatted(event.event.start)}
                </GameTime>
                <BetLink 
                    href={`https://www.unibet.com/betting#/event/live/${event.event.id}`}
                    target="_blank"
                >
                    Place a bet
                </BetLink>
            </BetContainer>
        )
    });

    return (<Slider>{events}</Slider>);
}