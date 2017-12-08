import React, { Component } from 'react';
import styled from 'styled-components';
import { BetService } from '../../services/BetService';
import { BetList } from './BetList';

const BetContent = styled.div`
	width: 900px;
	text-align: left;
	margin: 16px auto;
`;

const Article = styled.article`
    padding: 8px 16px 16px;
    background: #fff;
    border-radius: 4px;
    overflow: hidden;
`;

const H1 = styled.h1`
    font-size: 22px;
`;

const Preamble = styled.p`
    font-weight: bold;
`;

const Aside = styled.aside`
    float: right;
    width: 220px;
    border-left: solid 1px #ccc;
    margin-left: 8px;
    padding: 0 0 8px 16px;
`;

const H2 = styled.h2`
    font-size: 15px;
    margin: 4px 0;
`;

export class Bet extends Component {
    constructor(props) {
        super(props);
        this.state = {
            liveEvents: []
        }
    }
    componentDidMount() {
        this.loadBets();
    }
    
    loadBets = async () => {
        try {
            let liveEvents = await BetService.loadBets();
            this.setState({ liveEvents });
        } catch (e) {
            console.log(e);
        }
    }
    render() {
        return (
            <BetContent>
                <Article>
                    <H1>Live matches</H1>
                    <Preamble>
                        Here is a list of matches that are live right now.
                    </Preamble>
                    <Aside>
                        <H2>Live betting</H2>
                        <p>Place your bets as the action unfolds. We offer a wide selection of live betting events and you can place both single and combination bets.</p>
                        <p>You will be able to see an in-play scoreboard with the current result and match stats, while on selected events you will also be able to watch the action live with Unibet TV on the desktop site.</p>
                    </Aside>
                    <BetList liveEvents={this.state.liveEvents} />
                </Article>
            </BetContent>
        )
    }
}