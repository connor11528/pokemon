

var Pokemon = React.createClass({
  getInitialState: function() {
    return {
    	name: "",
    	national_id: null,
    	resource_uri: null,
		abilities: [],
		attack: null,
		catch_rate: null,
		defense: null,
		evolutions: {},
		happiness: null,
		male_female_ratio: "",
		moves: [],
		types: [],
		speed: null,
		total: null
    };
  },

  componentDidMount: function() {
  	var id = this.props.national_id;

    pokeService.findById(id).then(function(result){
		if (this.isMounted()) {
			this.setState(result);
		}
    }.bind(this));
  },

  render: function() {
    return (
      <div className='col-md-4'>
        <h1>{this.state.name}</h1>
      </div>
    );
  }
});

var PokemonList = React.createClass({
	render: function(){
		var pokemon = this.props.pokemon.map(function(poke){
			console.log('poke: ' + poke);
            return (
                <Pokemon national_id={poke} />
            );
        }.bind(this));
		return (
			<div className='row'>
				{pokemon} 
			</div>
		);
	}
});

var App = React.createClass({

	render: function(){
		var that = this;
		var pokemon = [];
		pokeService.getPokedex().then(function(data){
			var pokedex = data.pokemon;

			pokemon = pokedex.slice(0, 9);
			console.log(pokemon)
			that.setState({pokemon: pokemon});
		});
		return (
			<PokemonList pokemon={pokemon}/>
		);
	}
});

// SearchBar = React.createClass({
//     searchKeyChangeHandler: function() {
//         var searchKey = this.refs.searchKey.getDOMNode().value;
//         this.props.searchKeyChange(searchKey);
//     },
//     clearText: function() {
//         this.refs.searchKey.getDOMNode().value = "";
//         this.props.searchKeyChange("");
//     },
//     render: function () {
//         return (
//             <div className="search-wrapper">
//                 <input type="search" ref="searchKey" className="form-control"
//                     placeholder="Enter a partial beer, style, or brewery name"
//                     value={this.props.searchKey}
//                     onChange={this.searchKeyChangeHandler}/>
//                 <button className="btn btn-link" ><span className="glyphicon glyphicon-remove" aria-hidden="true" onClick={this.clearText}></span></button>
//             </div>
//         );
//     }
// });

React.render(
  <App />,
  document.getElementById('target')
);
