import React, { Component } from 'react';
import { connect } from 'react-redux';
import { removeQuote, upvoteQuote, downvoteQuote } from '../actions/quotes';
import QuoteCard from '../components/QuoteCard';

class Quotes extends Component {
  render() {
    return (
      <div>
        <hr />
        <div className="row justify-content-center">
          <h2>Quotes</h2>
        </div>
        <hr />
        <div className="container">
          <div className="row">
            <div className="col-md-4">
               {
                 this.props.quotes.map(quote => <QuoteCard key={quote.id} quote={quote} removeQuote={this.props.removeQuote} upvoteQuote={this.props.upvoteQuote} downvoteQuote={this.props.downvoteQuote} />)
               }
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({ quotes: state.quotes })

const mapDispatchToProps = {
  removeQuote,
  upvoteQuote,
  downvoteQuote,
}

export default connect(mapStateToProps, mapDispatchToProps)(Quotes);
