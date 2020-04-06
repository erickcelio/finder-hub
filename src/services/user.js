import axios from 'utils/axios'

export const getUserByUsernameService = async (username) => {
  try {
    const { data } = await axios.get(`/users/${username}`)

    return data
  } catch (e) {
    const error = {
      message: 'Ocorreu um erro por favor tente novamente!',
    }

    switch (e.response.status) {
      case 404:
        error.message = 'Usuário não encontrado!'
    }

    throw error
  }
}
