import api from '../../../service/api';

async function getRandomJoke(){
  const request = await api.get('random')
  const response = request.data
  return response
}



let Home = {
  is_private: false,

  render: async () => {
    const jokes = await getRandomJoke();
      let view = /*html*/`
          <div>
            <h1>Primeira página</h1>
            <img src=${jokes.icon_url} alt=${jokes.value}>
            <p>${jokes.value}</p>
          </div>
      `;

      return view
  },

  after_render: async () => {}
}

export default Home;