import React from 'react';
import {showAddDeck} from '../actions';
import {Link} from 'react-router';
import {connect} from 'react-redux';

const mapDispatchToProsp = dispatch => ({
    showAddDeck: () => dispatch(showAddDeck())
});

const Toolbar = ({deckId, showAddDeck}) => {
    let deckTools = deckId ? (<div>
                                <Link className='btn' to={`/deck/${deckId}/new`}>+ new card</Link>
                                <Link className='btn' to={`/deck/${deckId}/study`}>study deck</Link>
                              </div>) : null;
    return (<div className='toolbar'>
                <div>
                    <button onClick={showAddDeck}> + New Deck </button>
                </div>
                {deckTools}
            </div>);
};

export default connect(null, mapDispatchToProsp)(Toolbar);