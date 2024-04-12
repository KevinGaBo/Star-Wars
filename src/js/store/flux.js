
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
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			getCharacters: () => {
				fetch(`${process.env.BASE_URL}/people`)
					.then(res => res.json())
					.then(data => setStore({ characters: data.results }))
					.catch(error => ('Error fetching data:', error));
			},
			getPlanets: () => {
				fetch(`${process.env.BASE_URL}/planets/`)
					.then(res => res.json())
					.then(data => setStore({ planets: data.results }))
					.catch(error => ('Error fetching data:', error));
			},
			getVehicles: () => {
				fetch(`${process.env.BASE_URL}/vehicles/`)
					.then(res => res.json())
					.then(data => setStore({ vehicles: data.results }))
					.catch(error => ('Error fetching data:', error));
			},
			getVehicleById: (id) => {
				fetch(`${process.env.BASE_URL}/vehicles/` + id)
					.then(res => res.json())
					.then(data => setStore({ vehicle: data.result.properties }))
					.catch(err => console.error(err))
			},
			getCharacterById: async (id) => {
				const response = await fetch(`${process.env.BASE_URL}/characters/` + id);
				if (!response.ok) {
					throw new Error("Error al obtener los personajes de la API");
				}
				const data = await response.json();
				const characters = data.results;
				setStore({ character: characters })
				},
			changeColor: (index, color) => {
				const store = getStore();

				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

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
