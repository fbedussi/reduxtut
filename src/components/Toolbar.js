import React from 'react';
import {showAddDeck, filterCards} from '../actions';
import {Link} from 'react-router';
import {connect} from 'react-redux';

const mapDispatchToProsp = dispatch => ({
    showAddDeck: () => dispatch(showAddDeck()),
    onFilter: query => dispatch(filterCards(query))
});

const Toolbar = ({deckId, showAddDeck, onFilter}) => {
    let deckTools = deckId ? (<div>
                                <Link className='btn' to={`/deck/${deckId}/new`}>+ new card</Link>
                                <Link className='btn' to={`/deck/${deckId}/study`}>study deck</Link>
                                <input
                                    onChange={e => onFilter(e.target.value)}
                                    className='search'
                                    type='search'
                                    placeholder='search deck...' />
                              </div>) : null;
    return (<div className='toolbar'>
                <div>
                    <button onClick={showAddDeck}> + New Deck </button>
                </div>
                {deckTools}
            </div>);
};

export default connect(null, mapDispatchToProsp)(Toolbar);