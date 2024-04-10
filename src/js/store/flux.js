import { object } from "prop-types";

const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			demo: [
				{
					title: "FIRST",
					background: "lightGrey",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				}
			],
			characters: [],
			planets: [],
			vehicles: [],
			vehicle: {},
			character: [],
			favorites: [],
		},
		actions: {
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			getCharacters: () => {
				fetch("https://www.swapi.tech/api/people")
					.then(res => res.json())
					.then(data => setStore({ characters: data.results }))
					.catch(error => ('Error fetching data:', error));
			},
			getPlanets: () => {
				fetch("https://www.swapi.tech/api/planets/")
					.then(res => res.json())
					.then(data => setStore({ planets: data.results }))
					.catch(error => ('Error fetching data:', error));
			},
			getVehicles: () => {
				fetch("https://www.swapi.tech/api/vehicles/")
					.then(res => res.json())
					.then(data => setStore({ vehicles: data.results }))
					.catch(error => ('Error fetching data:', error));
			},
			getVehicleById: (id) => {
				fetch(`https://www.swapi.tech/api/vehicles/` + id)
					.then(res => res.json())
					.then(data => setStore({ vehicle: data.result.properties }))
					.catch(err => console.error(err))
			},
			getCharacterById: async (id) => {
				const response = await fetch(`https://www.swapi.tech/api/characters/` + id);
				if (!response.ok) {
					throw new Error("Error al obtener los personajes de la API");
				}
				const data = await response.json();
				const characters = data.results;
				setStore({ character: characters })
				},
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			},
			addFavorites: (data) => {
				setStore({ favorites: [...getStore().favorites, data] })
			},
			removeFavorites: (data) => {
				const newFavorites = getStore().favorites.filter(favorite => favorite !== data);
				setStore({
					favorites: newFavorites
				});
			}

		}
	};
};

export default getState;
