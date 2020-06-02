import { RESTClient, isRESTClient, LeCabCredentials } from "./client/RESTClient"
import { LeCabSubdomain, LeCabVersion, AxiosClient } from "./client/AxiosClient"
import LocationsAPIClient from "./endpoints/locations"
import ServicesAPIClient from "./endpoints/services"
import JobsAPIClient from "./endpoints/jobs"
import ServerAPIClient from "./endpoints/server"
import ProfilesAPIClient from "./endpoints/profiles"

type APIClientParams =
  | RESTClient
  | ({
      subdomain: LeCabSubdomain
      version?: LeCabVersion
    } & LeCabCredentials)

const loadRESTClient = (params: APIClientParams): RESTClient => {
  if (isRESTClient(params)) {
    return params
  } else {
    const { subdomain, version, ...creds } = params
    return new AxiosClient(subdomain, creds, version)
  }
}

export default class APIClient {
  locations: LocationsAPIClient
  services: ServicesAPIClient
  jobs: JobsAPIClient
  server: ServerAPIClient
  profiles: ProfilesAPIClient

  constructor(params: APIClientParams) {
    const restClient = loadRESTClient(params)
    this.locations = new LocationsAPIClient(restClient)
    this.services = new ServicesAPIClient(restClient)
    this.jobs = new JobsAPIClient(restClient)
    this.server = new ServerAPIClient(restClient)
    this.profiles = new ProfilesAPIClient(restClient)
  }
}
