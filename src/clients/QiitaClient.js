import Server from '../service/Server'
import ErrorService from '../service/ErrorService'

class QiitaClient {
  static get(component, params) {
    new Server().get(
      'https://qiita.com/api/v2/items',
      params,
      response => {
        component.setState({
          posts: response.data
        })
      },
      ErrorService.handler
    )
  }
}

export default QiitaClient
