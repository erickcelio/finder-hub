import axios from 'utils/axios'

export const getUserByUsernameService = async (username) => {
  try {
    const { data } = await axios.get(`/users/${username}`)

    return data
  } catch (e) {
    const error = {
      message: 'Ocorreu um erro por favor tente novamente!',
    }

    if (e.response.status === 404) {
      error.message = 'Usuário não encontrado!'
    }

    throw error
  }
}

export const getUserRepositoriesByUsernameService = async (username) => {
  try {
    const { data } = await axios.get(`/users/${username}/repos`)

    return sortUserRepositoriesBasedOnStars(data)
  } catch (e) {
    const error = {
      message: 'Ocorreu um erro por favor tente novamente!',
    }

    throw error
  }
}

const sortUserRepositoriesBasedOnStars = (repositories) =>
  repositories.sort((a, b) =>
    a.stargazers_count > b.stargazers_count ? -1 : 1
  )
