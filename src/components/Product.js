import React, { Component } from 'react';

function formatPrice(cents) {
  return (cents / 100).toFixed(2);
}

const ProductRender = (props) => (
	<li className="menu-game">
		<img src={props.image} alt={props.name} />
		<h3 className="game-name">
			{
				props.name
			}
			<span className="price">{formatPrice(props.price)}</span>
			<span className="price">{props.quantity}</span>
		</h3>
		<p>{props.desc}</p>
		{
			props.quantity > 0 && !props.editable ?
				<button onClick={props.onAdd}>Ajouter</button>
			:
				null
		}
		{
			props.editable ?
				<button onClick={props.onEdit}>Modifier</button>
			:
				null
		}
		{
			props.editable ?
				<div>
					<button
						onClick={props.onDecrement}
					>
						Retirer
					</button>
					<button
						onClick={props.onIncrement}
					>
						Rajouter
					</button>
				</div>
			:
				null
		}
		{
			props.editable ?
				<button onClick={props.onDelete}>Supprimer</button>
			:
				null
		}
	</li>
)

const styleEditableInput = {
	width: "100%",
	backgroundColor: "transparent"
}

const ProductEditable = (props) => (
	<div
		className="menu-game"
		style={styleEditableInput}
	>
		<input placeholder="Nom du jeu" style={styleEditableInput} type="text" value={props.name} onChange={(e) => props.onChangeName(e.target.value)}/><br/>
		<input placeholder="Prix" style={styleEditableInput} type="text" value={props.price} onChange={(e) => props.onChangePrice(e.target.value)}/><br/>
		<input placeholder="Description" style={styleEditableInput} type="text" value={props.desc} onChange={(e) => props.onChangeDescription(e.target.value)}/><br/>
		<input placeholder="URL image" style={styleEditableInput} type="text" value={props.image} onChange={(e) => props.onChangeImage(e.target.value)}/><br/>
		{
			!props.add ?
				<button onClick={props.onCancel}>Annuler</button>
			:
				null
		}
		<button onClick={props.onAdd}>{ props.add ? "Ajouter" : "Confirmer" }</button>
	</div>
)


const Product = (props) => {
	if (props.edit) {
		return <ProductEditable {...props} />;
	}
	return <ProductRender {...props}/>
}

export default Product;